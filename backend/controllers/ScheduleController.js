const sql = require('../sqlConnection'); // Nhập kết nối SQL

class ScheduleController {
    static async getSchedule(req, res) {
        let connection; // Biến để giữ kết nối cơ sở dữ liệu
        try {
            connection = await sql.connectToDatabase(); // Kết nối tới cơ sở dữ liệu

            // Truy vấn để lấy thông tin các trận đấu
            const [raceData] = await connection.promise().query(`
                SELECT R.RaceID, R.RaceName, R.Date, RT.Location, RT.FlagRacePic
                FROM Races R
                LEFT JOIN RaceTracks RT ON R.RaceTrackID = RT.RaceTrackID
            `);

            const today = new Date(); // Ngày hiện tại

            // Duyệt qua từng trận đấu và xử lý dữ liệu
            const races = await Promise.all(raceData.map(async (race) => {
                let raceInfo = {
                    RaceID: race.RaceID,
                    RaceName: race.RaceName,
                    Date: race.Date,
                    Location: race.Location,
                    FlagRacePic: race.FlagRacePic,
                    TopDrivers: [] // Sẽ chứa thông tin top 3 tay đua nếu trận đấu đã diễn ra
                };

                // Kiểm tra xem trận đấu đã diễn ra hay chưa
                if (new Date(race.Date) < today) {
                    // Trận đấu đã diễn ra, lấy thông tin top 3 tay đua
                    const [topDrivers] = await connection.promise().query(`
                        SELECT D.DriverName, D.DriverPic
                        FROM DetailResult DR
                        LEFT JOIN Drivers D ON DR.DriverID = D.DriverID
                        WHERE DR.RaceID = ?
                        ORDER BY DR.Position ASC
                        LIMIT 3
                    `, [race.RaceID]);

                    raceInfo.TopDrivers = topDrivers.map(driver => ({
                        DriverName: driver.DriverName,
                        DriverPic: driver.DriverPic
                    }));
                }

                return raceInfo;
            }));

            // Trả dữ liệu dưới dạng JSON
            res.json({ races });
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
