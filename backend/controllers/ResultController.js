const sql = require('../sqlConnection'); // Nhập kết nối SQL
const SumPoint = require('../controllers/SumPoint.js'); // Nhập mô-đun tính tổng điểm

class ResultController {
    static async getTopResults(req, res) {
        let connection;
        try {
            // Kết nối tới cơ sở dữ liệu
            connection = await sql.connectToDatabase();
            const raceID  = req.params.id; 
            let topResults = []; // Khai báo bên ngoài để sử dụng sau này
            console.log(raceID)
            // Truy vấn lấy thông tin về trận đua và tay đua đứng đầu
            if (raceID == 'all' || raceID == null || raceID == undefined) {
                const [results] = await connection.promise().query(`
                    SELECT 
                        R.RaceID,
                        R.RaceName, 
                        R.Date, 
                        RT.RaceTrackName, 
                        D.DriverName, 
                        T.TeamName, 
                        DR.LapsCompleted, 
                        DR.TimeOrRetired 
                    FROM Races R
                    JOIN RaceTracks RT ON R.RaceTrackID = RT.RaceTrackID
                    JOIN DetailResult DR ON R.RaceID = DR.RaceID
                    JOIN Drivers D ON DR.DriverID = D.DriverID
                    JOIN Teams T ON D.TeamID = T.TeamID
                    WHERE DR.Position = 1
                    ORDER BY R.Date DESC
                `);

                // Tạo mảng để chứa kết quả
                topResults = results.map(result => ({
                    RaceID: result.RaceID,  // Lưu RaceID để dùng cho truy vấn sau
                    RaceName: result.RaceName,
                    Date: result.Date,
                    RaceTrackName: result.RaceTrackName,
                    DriverName: result.DriverName,
                    TeamName: result.TeamName,
                    LapsCompleted: result.LapsCompleted,
                    TimeOrRetired: result.TimeOrRetired
                }));

                // Nếu không có kết quả nào, trả về ngay
                if (topResults.length === 0) {
                    return res.json({ topResults, driverResults: [] });
                }
            }

            // Lấy kết quả chi tiết cho mỗi RaceID
            const [resultsDetail] = await connection.promise().query(`
                SELECT 
                    DR.Position, 
                    D.DriverID, 
                    D.DriverName, 
                    T.TeamName, 
                    DR.LapsCompleted, 
                    DR.TimeOrRetired
                FROM DetailResult DR
                JOIN Drivers D ON DR.DriverID = D.DriverID
                JOIN Teams T ON D.TeamID = T.TeamID
                WHERE DR.RaceID = ?
                ORDER BY DR.Position ASC
            `, [raceID]);  // Sử dụng RaceID đã lấy ở trên

            // Lấy tổng điểm cho tất cả tay đua một lần
            const totalPoints = await SumPoint.calculateTotalPoints(resultsDetail.map(driver => driver.DriverID));
            
            // Tạo một bản đồ để ánh xạ DriverID với tổng điểm
            const pointsMap = totalPoints.reduce((map, obj) => {
                map[obj.DriverID] = obj.total_points; // Gán tổng điểm vào map
                return map;
            }, {});
            
            // Gom dữ liệu thành từng tay đua
            const driverResults = resultsDetail.map(detail => ({
                Position: detail.Position,
                DriverID: detail.DriverID,
                DriverName: detail.DriverName,
                TeamName: detail.TeamName,
                LapsCompleted: detail.LapsCompleted,
                TimeOrRetired: detail.TimeOrRetired,
                TotalPoints: pointsMap[detail.DriverID] || "0" // Lấy tổng điểm từ map, nếu không có trả về 0
            }));

            // In ra kết quả để kiểm tra
            console.log('Drivertop Results:', topResults);

            // Trả dữ liệu dưới dạng JSON
            res.json({ topResults, driverResults });
        } catch (err) {
            console.error('Lỗi khi lấy dữ liệu kết quả: ', err);
            res.status(500).send('Lỗi khi lấy dữ liệu kết quả');
        } finally {
            if (connection) {
                connection.release(); // Giải phóng kết nối
            }
        }
    }
}

module.exports = ResultController;
