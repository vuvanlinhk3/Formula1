const sql = require('../sqlConnection'); // Nhập kết nối SQL

class TeamCardController {
    static async getTeamData(req, res) {
        let connection; // Biến để giữ kết nối cơ sở dữ liệu
        try {
            connection = await sql.connectToDatabase(); // Kết nối tới cơ sở dữ liệu

            // Truy vấn để lấy thông tin các đội và thành viên của họ
            const [teamData] = await connection.promise().query(`
                SELECT T.TeamID, T.TeamName, T.TeamPic, D.DriverName
                FROM Teams T
                LEFT JOIN Drivers D ON T.TeamID = D.TeamID
            `);

            // In ra teamData để kiểm tra dữ liệu lấy từ DB
            console.log('Dữ liệu các đội:', teamData);

            // Gom dữ liệu thành từng nhóm dựa trên TeamID
            const teams = [];
            teamData.forEach(row => {
                let team = teams.find(t => t.TeamID === row.TeamID);
                if (!team) {
                    team = {
                        TeamID: row.TeamID, // ID đội
                        TeamName: row.TeamName, // Tên đội
                        TeamPic: row.TeamPic, // Ảnh đội
                        Members: [] // Danh sách các thành viên trong đội
                    };
                    teams.push(team);
                }

                // Nếu có thành viên (tay đua), thêm vào danh sách thành viên
                if (row.DriverName) {
                    team.Members.push(row.DriverName);
                }
            });

            // In ra danh sách các đội để kiểm tra
            console.log('Danh sách đội và thành viên:', teams);

            // Trả dữ liệu dưới dạng JSON
            res.json({ teams });
        } catch (err) {
            console.error('Lỗi khi lấy dữ liệu đội đua: ', err);
            res.status(500).send('Lỗi khi lấy dữ liệu đội đua');
        } finally {
            if (connection) {
                connection.release(); // Giải phóng kết nối
            }
        }
    }
}

module.exports = TeamCardController;
