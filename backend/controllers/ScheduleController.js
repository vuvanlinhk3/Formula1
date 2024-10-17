const sql = require('../sqlConnection'); // Nhập kết nối SQL

class ScheduleController {
    static async getSchedule(req, res) {
        let connection; // Biến để giữ kết nối cơ sở dữ liệu
        try {
            connection = await sql.connectToDatabase(); // Kết nối tới cơ sở dữ liệu

            // Truy vấn để lấy thông tin các trận đấu và trường đua
            const [raceData] = await connection.promise().query(`
                SELECT R.RaceID, R.RaceName, R.Date, RT.Location, RT.RaceTrackPic, RT.FlagRacePic, RT.Length
                FROM Races R
                LEFT JOIN RaceTracks RT ON R.RaceTrackID = RT.RaceTrackID
            `);

            const today = new Date(); // Ngày hiện tại

            // Chia ra các trận đấu thành hai mảng: đã diễn ra và chưa diễn ra
            const racesCompleted = [];
            const racesUpcoming = [];

            raceData.forEach(race => {
                const raceInfo = {
                    RaceID: race.RaceID,
                    RaceName: race.RaceName,
                    Date: race.Date,
                    Location: race.Location,
                    RaceTrackPic: race.RaceTrackPic, // Thêm ảnh trường đua
                    FlagRacePic: race.FlagRacePic, // Thêm cờ quốc gia
                    Length: race.Length, // Thêm chiều dài trường đua
                };

                // Phân loại trận đấu dựa trên ngày
                if (new Date(race.Date) < today) {
                    racesCompleted.push(raceInfo); // Trận đấu đã diễn ra
                } else {
                    racesUpcoming.push(raceInfo); // Trận đấu chưa diễn ra
                }
            });

            // Trả dữ liệu dưới dạng JSON
            res.json({ racesCompleted, racesUpcoming });
        } catch (err) {
            console.error('Lỗi khi lấy dữ liệu lịch trình trận đấu: ', err);
            res.status(500).send('Lỗi khi lấy dữ liệu lịch trình trận đấu');
        } finally {
            if (connection) {
                connection.release(); // Giải phóng kết nối
            }
        }
    }
}

module.exports = ScheduleController;
