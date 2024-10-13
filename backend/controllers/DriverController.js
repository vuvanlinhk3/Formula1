const connectToDatabase = require('../sqlConnection'); // Nhập kết nối SQL
const SumPoint = require('./SumPoint'); // Nhập lớp tính tổng điểm

class DriverController {
    static async getDriverData(req, res) {
        let connection;
        try {
            // Kết nối đến cơ sở dữ liệu
            connection = await connectToDatabase(); // Kết nối đến cơ sở dữ liệu

            // Lấy tổng điểm từ SumPoint
            const pointsData = await SumPoint.calculateTotalPoints();

            // Tạo object map để lưu điểm cho từng DriverID
            const pointsMap = {};
            pointsData.forEach(point => {
                pointsMap[point.DriverID] = point.total_points;
            });

            // Thực hiện truy vấn để lấy thông tin tay đua
            return new Promise((resolve, reject) => {
                connection.query(`
                    SELECT 
                        d.DriverID,
                        d.DriverName, 
                        d.DriverNumber, /* Lấy số áo tay đua */
                        d.DriverPicTwo,
                        d.FlagPic, 
                        t.TeamName
                    FROM Drivers d
                    JOIN Teams t ON d.TeamID = t.TeamID
                    ORDER BY d.DriverID
                `, (err, rows) => {
                    if (err) {
                        console.error('Lỗi khi truy vấn lấy dữ liệu tay đua: ', err);
                        return reject('Không thể lấy dữ liệu tay đua');
                    }

                    // Gắn tổng điểm vào thông tin tay đua
                    const driverData = rows.map(row => ({
                        DriverID: row.DriverID, // Lấy DriverID
                        DriverName: row.DriverName, // Tên tay đua
                        DriverNumber: row.DriverNumber, // Số áo tay đua
                        Points: pointsMap[row.DriverID] || 0, // Lấy điểm từ map, mặc định là 0 nếu không có
                        FlagPic: row.FlagPic, // Ảnh cờ quốc gia
                        TeamName: row.TeamName, // Tên đội
                        DriverPicTwo: row.DriverPicTwo // Ảnh tay đua
                    }));

                    // In ra kết quả để kiểm tra
                    console.log('Danh sách tay đua:', driverData);

                    // Trả về dữ liệu dưới dạng JSON cho client
                    res.status(200).json({ drivers: driverData });
                    resolve();
                });
            });
        } catch (err) {
            console.error('Lỗi khi lấy dữ liệu tay đua: ', err);
            res.status(500).json({ error: 'Không thể lấy dữ liệu tay đua' });
        } finally {
            if (connection) {
                connection.close(); // Giải phóng kết nối
            }
        }
    }
}

module.exports = DriverController;
