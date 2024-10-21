# Hướng dẫn chạy web

## Bước 1: Mở Project
Mở dự án trong Visual Studio Code hoặc một trình duyệt hỗ trợ JavaScript.

## Bước 2: Cài đặt Node.js
1. Tải và cài đặt Node.js từ trang web chính thức: [https://nodejs.org/](https://nodejs.org/).
2. Sau khi cài đặt, mở terminal và gõ lệnh sau để kiểm tra phiên bản Node.js:
   ```bash
   node -v
   ```
   Nếu thấy phiên bản được hiển thị, Node.js đã được cài đặt thành công.

## Bước 3: Cài đặt XAMPP
Tải và cài đặt XAMPP từ trang web chính thức: [https://www.apachefriends.org/index.html](https://www.apachefriends.org/index.html)

## Bước 4: Tạo Database
1. Vào thư mục `formula1.sql` trong phần `backend` của dự án.
2. Mở XAMPP và khởi động dịch vụ Apache và MySQL.
3. Mở trình duyệt và truy cập vào `http://localhost/phpmyadmin`.
4. Trong phpMyAdmin, tạo một database mới.
5. Copy nội dung trong file `formula1.sql` và dán vào cửa sổ SQL trong phpMyAdmin.
6. Nhấn nút "Run" để chạy câu lệnh SQL và tạo database.

## Bước 5: Chạy Project
### Phần Backend
1. Mở terminal trong dự án.
2. Gõ lệnh sau để khởi động backend:
   ```bash
   npm start
   ```

### Phần Frontend
1. Chạy file `index.html` bằng Live Server trong Visual Studio Code hoặc một trình duyệt tương tự có hỗ trợ.
2. **Chú thích:** Nếu bạn chạy frontend trước, hãy load lại trang để dữ liệu được render chính xác.

## Hoàn tất
Sau khi thực hiện tất cả các bước trên, bạn sẽ có thể sử dụng ứng dụng web của mình. Chúc bạn thành công!