// backend/Controller/HomeController.js

const sql = require('../sqlConnection'); // Nhập kết nối SQL
const SumPoint = require('./SumPoint'); // Nhập class SumPoint

class HomeController {
    static async getHomeData(req, res) {
        let connection; // Khai báo biến kết nối
        try {
            const totalPoints = await SumPoint.calculateTotalPoints(); // Lấy tổng điểm từ SumPoint

            // Lấy top 10 tay đua dựa trên điểm
            const topDrivers = totalPoints.sort((a, b) => b.total_points - a.total_points).slice(0, 10);

            // Lấy thông tin tay đua từ bảng Drivers
            const driverIds = topDrivers.map(driver => driver.DriverID);
            connection = await sql.connectToDatabase(); // Kết nối đến cơ sở dữ liệu

            // Thực hiện truy vấn để lấy thông tin tay đua, tên đội, ảnh tay đua và ảnh cờ quốc tịch
            const [driverInfo] = await connection.promise().query(`
                SELECT D.DriverID, D.DriverName, D.DriverPic, D.FlagPic, T.TeamName
                FROM Drivers D
                JOIN Teams T ON D.TeamID = T.TeamID
                WHERE D.DriverID IN (${driverIds.join(',')})
            `);
            
            // In ra driverInfo để kiểm tra dữ liệu
            // console.log('Thông tin tay đua:', driverInfo);

            // Tạo kết quả
            const result = topDrivers.map(driver => {
                const driverData = driverInfo.find(d => d.DriverID === driver.DriverID);
                if (driverData) {
                    return {
                        position: topDrivers.indexOf(driver) + 1, // Thứ hạng
                        name: driverData.DriverName, // Tên tay đua
                        team: driverData.TeamName, // Tên đội
                        points: driver.total_points, // Điểm số
                        driverImage: driverData.DriverPic, // Ảnh tay đua
                        flagImage: driverData.FlagPic // Ảnh cờ quốc tịch
                    };
                } else {
                    // console.error(`Không tìm thấy thông tin tay đua cho DriverID: ${driver.DriverID}`);
                    return null; // Trả về null hoặc xử lý tùy theo nhu cầu
                }
            }).filter(item => item !== null); // Lọc bỏ các item null

            // In ra kết quả để kiểm tra
            console.log('Kết quả:', result);

            // Tạo một biến mới chỉ chứa dữ liệu 3 tay đua đứng đầu
            const top3Drivers = result.slice(0, 3).map(driver => ({
                name: driver.name, // Tên tay đua
                driverImage: driver.driverImage, // Ảnh tay đua
                position: driver.position, // Thứ hạng
                flagImage: driver.flagImage // Ảnh cờ quốc tịch
            }));

            // In ra kết quả top 3
            console.log('Top 3 tay đua:', top3Drivers);

            res.json({ topDrivers: result, top3Drivers }); // Trả dữ liệu dưới dạng JSON
        } catch (err) {
            console.error('Lỗi khi lấy dữ liệu ở home: ', err);
            res.status(500).send('Lỗi khi lấy dữ liệu home');
        } finally {
            if (connection) {
                connection.release(); // Giải phóng kết nối
            }
        }
    }
}

module.exports = HomeController;
