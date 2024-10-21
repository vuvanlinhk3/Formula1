const sql = require('../sqlConnection'); // Nhập kết nối SQL

class InforDriverController {
    static async getDriverInfo(req, res) {
        let connection; // Biến để giữ kết nối cơ sở dữ liệu
        const driverID = req.params.id; // Lấy DriverID từ URL
        console.log('Yêu cầu nhận DriverID:', driverID); // Log DriverID

        try {
            connection = await sql.connectToDatabase(); // Kết nối tới cơ sở dữ liệu
            console.log('Kết nối tới cơ sở dữ liệu thành công.infor '); // Log thành công kết nối

            // Truy vấn để lấy thông tin chi tiết tay đua cùng với thông tin đội và các trường khác
            const [driverInfo] = await connection.promise().query(`
                SELECT D.DriverID, D.DriverName, D.DriverBirth, D.PlaceOfBirth, D.DriverPic, 
                       D.DriverNumber, D.Nationality, D.FlagPic, D.Podium, D.Points, 
                       D.GrandsPrixEntered, D.DriverPicTwo,
                       T.TeamID, T.TeamName, T.TeamPic, T.FounderYear, T.Base, 
                       T.TeamChief, T.WorldChampionship
                FROM Drivers D
                LEFT JOIN Teams T ON D.TeamID = T.TeamID
                WHERE D.DriverID = ?
            `, [driverID]); // Thay ? bằng driverID từ URL

            // console.log('Thông tin tay đua nhận được:', driverInfo); // Log thông tin tay đua nhận được

            if (driverInfo.length === 0) {
                console.log('Không tìm thấy tay đua với DriverID:', driverID); // Log nếu không tìm thấy tay đua
                return res.status(404).send('Không tìm thấy tay đua');
            }

            // Tạo cấu trúc dữ liệu theo định dạng mong muốn
            const driver = {
                DriverID: driverInfo[0].DriverID,
                DriverName: driverInfo[0].DriverName,
                DriverBirth: driverInfo[0].DriverBirth,
                PlaceOfBirth: driverInfo[0].PlaceOfBirth,
                DriverPic: driverInfo[0].DriverPic,
                DriverNumber: driverInfo[0].DriverNumber,
                Nationality: driverInfo[0].Nationality,
                FlagPic: driverInfo[0].FlagPic,
                Podium: driverInfo[0].Podium,
                Points: driverInfo[0].Points,
                GrandsPrixEntered: driverInfo[0].GrandsPrixEntered,
                DriverPicTwo: driverInfo[0].DriverPicTwo,
                Team: {
                    TeamID: driverInfo[0].TeamID || null, // Nếu không có đội, trả về null
                    TeamName: driverInfo[0].TeamName || null,
                    TeamPic: driverInfo[0].TeamPic || null,
                    FounderYear: driverInfo[0].FounderYear || null,
                    Base: driverInfo[0].Base || null,
                    TeamChief: driverInfo[0].TeamChief || null,
                    WorldChampionship: driverInfo[0].WorldChampionship || null,
                }
            };

            // console.log('Dữ liệu tay đua inforr được trả về:', driver); // Log dữ liệu tay đua trước khi trả về

            // Trả dữ liệu chi tiết tay đua cùng với thông tin đội dưới dạng JSON
            res.json({ driver });
        } catch (err) {
            console.error('Lỗi khi lấy thông tin chi tiết tay đua: ', err);
            res.status(500).send('Lỗi khi lấy thông tin chi tiết tay đua');
        } finally {
            if (connection) {
                connection.release(); // Giải phóng kết nối
                console.log('Đã giải phóng kết nối tới cơ sở dữ liệu.'); // Log giải phóng kết nối
            }
        }
    }
}

module.exports = InforDriverController;
