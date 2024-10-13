// backend/Controller/SumPoint.js
const sql = require('../sqlConnection'); // Nhập kết nối SQL

class SumPoint {
    static async calculateTotalPoints() {
        let connection;
        try {
            // Kết nối đến cơ sở dữ liệu
            connection = await sql.connectToDatabase();
            const [rows] = await connection.promise().query(`
                SELECT 
                    DriverID,
                    SUM(CASE
                        WHEN Position = 1 THEN 25
                        WHEN Position = 2 THEN 18
                        WHEN Position = 3 THEN 15
                        WHEN Position = 4 THEN 12
                        WHEN Position = 5 THEN 10
                        WHEN Position = 6 THEN 8
                        WHEN Position = 7 THEN 6
                        WHEN Position = 8 THEN 4
                        WHEN Position = 9 THEN 2
                        WHEN Position = 10 THEN 1
                        ELSE 0
                    END) AS total_points
                FROM DetailResult
                GROUP BY DriverID
            `);
            return rows; // Trả về danh sách tay đua với điểm số
        } catch (err) {
            console.error('Lỗi khi tính tổng điểm: ', err);
            throw new Error('Không thể tính tổng điểm');
        } finally {
            if (connection) {
                connection.release(); // Giải phóng kết nối
            }
        }
    }
}

module.exports = SumPoint;
