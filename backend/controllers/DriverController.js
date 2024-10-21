const sql = require('../sqlConnection'); // Nhập kết nối SQL
const SumPoint = require('./SumPoint'); // Nhập class SumPoint

class DriverController {
    static async getDriverData(req, res) {
        let connection; // Biến để giữ kết nối cơ sở dữ liệu
        try {
            connection = await sql.connectToDatabase(); // Kết nối tới cơ sở dữ liệu
            
            // Truy vấn để lấy thông tin các tay đua và đội của họ
            const [driverData] = await connection.promise().query(`
                SELECT D.DriverID, D.DriverName, D.DriverNumber, D.DriverPicTwo, D.FlagPic, T.TeamName
                FROM Drivers D
                LEFT JOIN Teams T ON D.TeamID = T.TeamID
            `);

            // In ra driverData để kiểm tra dữ liệu lấy từ DB
            // console.log('Dữ liệu tay đua:', driverData);

            // Lấy tổng điểm cho từng tay đua
            const totalPoints = await SumPoint.calculateTotalPoints(); // Giả sử trả về dạng [{DriverID, total_points}, ...]

            // Tạo một bản đồ (map) để ánh xạ DriverID với tổng điểm
            const pointsMap = totalPoints.reduce((map, obj) => {
                map[obj.DriverID] = obj.total_points; // Gán tổng điểm vào map
                return map;
            }, {});

            // Gom dữ liệu thành từng tay đua
            const drivers = driverData.map(row => ({
                DriverID: row.DriverID, // ID tay đua
                DriverName: row.DriverName, // Tên tay đua
                DriverNumber: row.DriverNumber, // Số áo tay đua
                DriverPicTwo: row.DriverPicTwo, // Ảnh chân dung tay đua
                FlagPic: row.FlagPic, // Ảnh cờ quốc gia
                TeamName: row.TeamName, // Tên đội
                TotalPoints: pointsMap[row.DriverID] || "0" // Lấy tổng điểm từ map, nếu không có trả về 0
            }));

            // In ra danh sách tay đua để kiểm tra
            console.log('Danh sách tay đua:', drivers);

            // Trả dữ liệu dưới dạng JSON
            res.json({ drivers });
        } catch (err) {
            console.error('Lỗi khi lấy dữ liệu tay đua: ', err);
            res.status(500).send('Lỗi khi lấy dữ liệu tay đua');
        } finally {
            if (connection) {
                connection.release(); // Giải phóng kết nối
            }
        }
    }
}

module.exports = DriverController;
