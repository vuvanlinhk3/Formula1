const sql = require('mssql');

const config = {
  server: 'DESKTOP-P5DVACB',
  options: {
    database: 'Formula1', // Thay bằng tên database của bạn
    trustedConnection: true,
    encrypt: false
  }
};

sql.connect(config)
  .then(pool => {
    console.log('Kết nối thành công!');
    return pool.request().query('SELECT * FROM Drivers'); // Thay TenBang bằng tên bảng của bạn
  })
  .then(result => {
    console.log(result.recordset);
  })
  .catch(err => {
    console.error('Lỗi kết nối:', err);
  });
