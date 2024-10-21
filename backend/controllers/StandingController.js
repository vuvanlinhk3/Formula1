const sql = require('../sqlConnection'); // Nhập kết nối SQL
const SumPoint = require('./SumPoint'); // Import SumPoint để tính tổng điểm

class StandingController {
    static async getStandings(req, res) {
        let connection;
        try {
            // Gọi hàm tính tổng điểm từ SumPoint
            const driverPoints = await SumPoint.calculateTotalPoints();

            // Kết nối tới cơ sở dữ liệu để lấy thêm thông tin về tay đua
            connection = await sql.connectToDatabase();
            const [driverData] = await connection.promise().query(`
                SELECT 
                    D.DriverID, 
                    D.DriverName, 
                    D.Nationality, 
                    T.TeamName 
                FROM Drivers D
                LEFT JOIN Teams T ON D.TeamID = T.TeamID
            `);

            // Map tổng điểm vào từng tay đua dựa trên DriverID và sắp xếp theo tổng điểm (giảm dần)
            const standings = driverPoints
                .map(pointRow => {
                    const driver = driverData.find(d => d.DriverID === pointRow.DriverID);
                    return {
                        DriverID: pointRow.DriverID,
                        DriverName: driver ? driver.DriverName : 'N/A',
                        Nationality: driver ? driver.Nationality : 'N/A',
                        TeamName: driver ? driver.TeamName : 'N/A',
                        Points: pointRow.total_points
                    };
                })
                .sort((a, b) => b.Points - a.Points); // Sắp xếp theo tổng điểm giảm dần

            // Thêm vị trí (top 1, top 2,...) cho từng tay đua
            standings.forEach((driver, index) => {
                driver.Position = index + 1; // Vị trí xếp hạng bắt đầu từ 1
            });

            // In ra standings để kiểm tra
            // console.log('Standings:', standings);

            // Trả dữ liệu dưới dạng JSON
            res.json({ standings });
        } catch (err) {
            console.error('Lỗi khi lấy dữ liệu standings: ', err);
            res.status(500).send('Lỗi khi lấy dữ liệu standings');
        } finally {
            if (connection) {
                connection.release(); // Giải phóng kết nối
            }
        }
    }
}

module.exports = StandingController;
