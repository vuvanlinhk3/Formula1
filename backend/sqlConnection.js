const mysql = require('mysql2');

// Cấu hình kết nối đến MySQL trên XAMPP
const config = {
    host: 'localhost',    // Địa chỉ máy chủ, 'localhost' cho XAMPP
    user: 'root',         // Người dùng mặc định của XAMPP là 'root'
    password: '',         // Mật khẩu thường để trống trong XAMPP (nếu bạn chưa đặt mật khẩu)
    database: 'Formula1', // Tên cơ sở dữ liệu bạn muốn kết nối
};

const pool = mysql.createPool(config);

// Hàm kết nối tới cơ sở dữ liệu
function connectToDatabase() {
    return new Promise((resolve, reject) => {
        pool.getConnection((err, connection) => {
            if (err) {
                console.error('Không kết nối được database: ', err);
                reject(err);
            } else {
                console.log('Kết nối thành công!');
                resolve(connection);
            }
        });
    });
}

module.exports = {
    connectToDatabase,
    pool // Xuất pool để sử dụng ở nơi khác
};
