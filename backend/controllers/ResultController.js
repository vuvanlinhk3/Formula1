const sql = require('../sqlConnection'); // Nhập kết nối SQL

class ResultController {
    static async getTopResults(req, res) {
        let connection;
        try {
            // Kết nối tới cơ sở dữ liệu
            connection = await sql.connectToDatabase();

            // Truy vấn lấy thông tin về trận đua và tay đua đứng đầu
            const [results] = await connection.promise().query(`
                SELECT 
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
            const topResults = results.map(result => ({
                RaceName: result.RaceName,
                Date: result.Date,
                RaceTrackName: result.RaceTrackName,
                DriverName: result.DriverName,
                TeamName: result.TeamName,
                LapsCompleted: result.LapsCompleted,
                TimeOrRetired: result.TimeOrRetired
            }));

            // In ra kết quả để kiểm tra
            console.log('Top Results:', topResults);

            // Trả dữ liệu dưới dạng JSON
            res.json({ topResults });
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
