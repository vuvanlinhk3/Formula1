const sql = require('../sqlConnection'); // Nhập kết nối SQL
const SumPoint = require('./SumPoint'); // Nhập class SumPoint

class HomeController {
    static async getHomeData(req, res) {
        let connection; // Khai báo biến kết nối
        try {
            connection = await sql.connectToDatabase(); // Kết nối đến cơ sở dữ liệu
            // Truy vấn để lấy thông tin lịch trình
            const [scheduleData] = await connection.promise().query(`
                SELECT R.RaceID, 
                       RT.FlagRacePic, 
                       RT.RaceNameNational, 
                       R.RaceName, 
                       R.Date
                FROM Races R
                JOIN RaceTracks RT ON R.RaceTrackID = RT.RaceTrackID
            `);

            // Tạo biến lưu trữ thông tin lịch trình
            const schedules = scheduleData.map(row => ({
                RaceID: row.RaceID, // ID trận đua
                FlagRacePic: row.FlagRacePic, // Ảnh cờ quốc gia
                RaceNameNational: row.RaceNameNational, // Tên quốc gia
                RaceName: row.RaceName, // Tên trận đấu
                Date: row.Date // Thời gian diễn ra
            }));
            // Lấy tổng điểm từ SumPoint
            const totalPoints = await SumPoint.calculateTotalPoints(); 

            // Lấy top 10 tay đua dựa trên điểm
            const topDrivers = totalPoints.sort((a, b) => b.total_points - a.total_points).slice(0, 10);

            // Lấy thông tin tay đua từ bảng Drivers
            const driverIds = topDrivers.map(driver => driver.DriverID);
            
            // Thực hiện truy vấn để lấy thông tin tay đua, tên đội, ảnh tay đua và ảnh cờ quốc tịch
            const [driverInfo] = await connection.promise().query(`
                SELECT D.DriverID, D.DriverName, D.DriverPic, D.FlagPic, T.TeamName
                FROM Drivers D
                JOIN Teams T ON D.TeamID = T.TeamID
                WHERE D.DriverID IN (${driverIds.join(',')})
            `);

            // Tạo kết quả cho topDrivers
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
                    return null; // Trả về null hoặc xử lý tùy theo nhu cầu
                }
            }).filter(item => item !== null); // Lọc bỏ các item null

            // Tạo một biến mới chỉ chứa dữ liệu 3 tay đua đứng đầu
            const top3Drivers = result.slice(0, 3).map(driver => ({
                name: driver.name, // Tên tay đua
                driverImage: driver.driverImage, // Ảnh tay đua
                position: driver.position, // Thứ hạng
                flagImage: driver.flagImage // Ảnh cờ quốc tịch
            }));

            

            // Kết quả
            // console.log('Kết quả:', {schedules, topDrivers: result, top3Drivers });
            res.json({ topDrivers: result, top3Drivers, schedules }); // Trả dữ liệu dưới dạng JSON
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
