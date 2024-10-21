const sql = require('../sqlConnection'); // Nhập kết nối SQL

class InforTeamController {
    static async getTeamInfo(req, res) {
        let connection; // Biến để giữ kết nối cơ sở dữ liệu
        const teamID = req.params.id; // Lấy TeamID từ URL
        console.log('Yêu cầu nhận TeamID:', teamID); // Log TeamID

        try {
            connection = await sql.connectToDatabase(); // Kết nối tới cơ sở dữ liệu
            console.log('Kết nối tới cơ sở dữ liệu thành công.'); // Log thành công kết nối

            // Truy vấn để lấy thông tin chi tiết đội đua và các tay đua thuộc đội đó
            const [teamInfo] = await connection.promise().query(`
                SELECT 
                    t.TeamID, 
                    t.TeamName, 
                    t.TeamPic, 
                    t.FounderYear, 
                    t.Base, 
                    t.TeamChief, 
                    t.WorldChampionship,
                    d.DriverID,
                    d.DriverName,
                    d.DriverPic
                FROM Teams t
                LEFT JOIN Drivers d ON t.TeamID = d.TeamID
                WHERE t.TeamID = ?
            `, [teamID]); // Thay ? bằng teamID từ URL

            // Kiểm tra nếu không tìm thấy thông tin đội đua
            if (teamInfo.length === 0) {
                console.log('Không tìm thấy đội với TeamID:', teamID); // Log nếu không tìm thấy đội
                return res.status(404).send('Không tìm thấy đội đua');
            }

            // Tạo cấu trúc dữ liệu theo định dạng mong muốn
            const team = {
                TeamID: teamInfo[0].TeamID,
                TeamName: teamInfo[0].TeamName,
                TeamPic: teamInfo[0].TeamPic,
                FounderYear: teamInfo[0].FounderYear,
                Base: teamInfo[0].Base,
                TeamChief: teamInfo[0].TeamChief,
                WorldChampionship: teamInfo[0].WorldChampionship,
                Drivers: teamInfo.map(driver => ({
                    DriverID: driver.DriverID,
                    DriverName: driver.DriverName,
                    DriverPic: driver.DriverPic
                })).filter(driver => driver.DriverID) // Lọc các tay đua không có thông tin
            };

            // console.log('Dữ liệu đội đua được trả về:', team); // Log dữ liệu đội trước khi trả về

            // Trả dữ liệu chi tiết đội đua dưới dạng JSON
            res.json({ team });
        } catch (err) {
            console.error('Lỗi khi lấy thông tin chi tiết đội đua: ', err);
            res.status(500).send('Lỗi khi lấy thông tin chi tiết đội đua');
        } finally {
            if (connection) {
                connection.release(); // Giải phóng kết nối
                console.log('Đã giải phóng kết nối tới cơ sở dữ liệu.'); // Log giải phóng kết nối
            }
        }
    }
}

module.exports = InforTeamController;
