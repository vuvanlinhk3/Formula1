# Formula1

# Hướng Dẫn Cơ Bản về HTML, CSS, và JavaScript

## HTML Cơ Bản

### Các Thẻ Cơ Bản

- `<html>`: Thẻ gốc của tài liệu HTML, chứa toàn bộ nội dung trang web.
- `<head>`: Chứa thông tin về tài liệu, bao gồm tiêu đề, meta, liên kết tới CSS, JavaScript.
- `<title>`: Xác định tiêu đề trang web, hiển thị trên tab của trình duyệt.
- `<meta>`: Cung cấp thông tin meta, chẳng hạn như mã hóa ký tự, mô tả trang, từ khóa.
- `<link>`: Dùng để liên kết đến các tài nguyên bên ngoài như tệp CSS.
- `<style>`: Chứa mã CSS để định dạng các thành phần HTML.
- `<body>`: Chứa nội dung chính của trang web, bao gồm văn bản, hình ảnh, liên kết, v.v.
- `<header>`: Định nghĩa phần đầu của một trang hoặc một phần của tài liệu, thường chứa tiêu đề, logo, hoặc điều hướng.
- `<nav>`: Chứa liên kết điều hướng của trang web.
- `<main>`: Đại diện cho nội dung chính của tài liệu.
- `<section>`: Định nghĩa một phần hoặc một đoạn của trang web.
- `<article>`: Đại diện cho một bài viết độc lập trong tài liệu.
- `<footer>`: Phần cuối của trang hoặc tài liệu, thường chứa thông tin liên hệ, bản quyền.
- `<div>`: Thẻ khối chung để chứa các nội dung khác, thường dùng để bố cục trang web.
- `<span>`: Thẻ nội tuyến chung để định dạng văn bản hoặc nội dung nhỏ.
- `<h1>` đến `<h6>`: Các thẻ tiêu đề từ lớn nhất (`<h1>`) đến nhỏ nhất (`<h6>`).
- `<p>`: Đại diện cho một đoạn văn bản.
- `<a>`: Tạo liên kết đến các trang web khác hoặc tài nguyên khác.
- `<img>`: Hiển thị hình ảnh trên trang web.
- `<ul>`: Tạo danh sách không thứ tự (bullet list).
- `<ol>`: Tạo danh sách có thứ tự (numbered list).
- `<li>`: Đại diện cho một mục trong danh sách.
- `<form>`: Tạo biểu mẫu để thu thập dữ liệu từ người dùng.
- `<input>`: Tạo các trường nhập liệu trong biểu mẫu.
- `<button>`: Tạo nút có thể nhấn được.
- `<table>`: Tạo bảng dữ liệu.
- `<th>`, `<tr>`, `<td>`: Tạo tiêu đề bảng (`<th>`), hàng bảng (`<tr>`), và ô dữ liệu (`<td>`).

## CSS Cơ Bản

### Bộ Chọn (Selectors)

- `*`: Chọn tất cả các phần tử.
- `element`: Chọn tất cả các phần tử cụ thể (e.g., `p`, `div`).
- `.class`: Chọn tất cả các phần tử có class cụ thể.
- `#id`: Chọn phần tử có ID cụ thể.
- `element, element`: Chọn nhiều phần tử cùng một lúc.
- `element element`: Chọn tất cả các phần tử con nằm trong một phần tử cha.

### Thuộc Tính CSS Cơ Bản

#### Màu Sắc và Nền

- `color`: Màu văn bản.
- `background-color`: Màu nền của phần tử.
- `background-image`: Đặt hình ảnh nền cho phần tử.

#### Văn Bản

- `font-family`: Xác định font chữ.
- `font-size`: Kích thước chữ.
- `font-weight`: Độ dày của chữ (e.g., `bold`, `normal`).
- `text-align`: Căn chỉnh văn bản (e.g., `left`, `right`, `center`).
- `text-decoration`: Trang trí văn bản (e.g., `underline`, `none`).
- `line-height`: Khoảng cách giữa các dòng văn bản.

#### Hộp (Box Model)

Box Model bao gồm các thành phần như: margin, border, padding, và content.

- `width`: Chiều rộng của phần tử.
- `height`: Chiều cao của phần tử.
- `padding`: Khoảng cách giữa nội dung và đường viền (border) của phần tử.
- `border`: Đường viền bao quanh phần tử.
- `margin`: Khoảng cách giữa phần tử và các phần tử khác.

#### Hiển Thị và Căn Chỉnh

- `display`: Xác định cách hiển thị của phần tử (e.g., `block`, `inline`, `inline-block`, `none`).
- `position`: Xác định cách định vị phần tử (e.g., `static`, `relative`, `absolute`, `fixed`).
- `top`, `bottom`, `left`, `right`: Định vị phần tử so với phần tử cha.
- `z-index`: Xác định thứ tự xếp chồng của phần tử (layer).

#### Flexbox (Hộp Linh Hoạt)

Flexbox giúp căn chỉnh và phân phối không gian giữa các mục trong một container.

- `display: flex`: Biến container thành flex container.
- `justify-content`: Căn chỉnh các mục trên trục chính (e.g., `flex-start`, `center`, `space-between`).
- `align-items`: Căn chỉnh các mục trên trục phụ (e.g., `flex-start`, `center`).
- `flex-direction`: Xác định hướng của các mục (e.g., `row`, `column`).

### Pseudo-classes và Pseudo-elements

- `:hover`: Áp dụng khi người dùng di chuột qua phần tử.
- `:focus`: Áp dụng khi phần tử đang được chọn (e.g., input đang nhập).
- `::before`, `::after`: Thêm nội dung trước hoặc sau nội dung của phần tử.

## JavaScript Cơ Bản

### Module

**Module** là một cách để tổ chức mã JavaScript thành các phần riêng biệt, giúp quản lý và bảo trì mã nguồn dễ hơn. Trong JavaScript, bạn có thể sử dụng `import` và `export` để làm việc với các module.

#### Export

- **Named Export**: Xuất nhiều đối tượng từ một module bằng cách đặt tên.
  ```javascript
  // file: math.js
  export const add = (a, b) => a + b;
  export const subtract = (a, b) => a - b;
  ```

- **Default Export**: Xuất một đối tượng mặc định từ một module. Một module chỉ có thể có một default export.
  ```javascript
  // file: math.js
  const multiply = (a, b) => a * b;
  export default multiply;
  ```

#### Import

- **Named Import**: Nhập các đối tượng đã được xuất dưới tên cụ thể.
  ```javascript
  // file: app.js
  import { add, subtract } from './math.js';
  ```

- **Default Import**: Nhập đối tượng mặc định từ một module.
  ```javascript
  // file: app.js
  import multiply from './math.js';
  ```

### Function (Hàm)

Hàm là một khối mã có thể được gọi nhiều lần để thực hiện một nhiệm vụ cụ thể.

- **Cú pháp khai báo hàm**:
  ```javascript
  function sayHello(name) {
    return `Hello, ${name}!`;
  }
  ```

- **Cú pháp hàm mũi tên (Arrow Function)**:
  ```javascript
  const sayHello = (name) => `Hello, ${name}!`;
  ```

### Template Strings (Chuỗi Mẫu)

**Template literals** (chuỗi mẫu) giúp bạn tạo chuỗi với đa dòng và chèn biến hoặc biểu thức vào chuỗi.

- **Cú pháp**:
  ```javascript
  const name = 'John';
  const greeting = `Hello, ${name}!`;  // Chèn biến vào chuỗi
  ```

### Events (Sự Kiện)

JavaScript hỗ trợ nhiều loại sự kiện để tương tác với người dùng.

- **`onclick`**: Xảy ra khi người dùng nhấp chuột vào một phần tử.
  ```html
  <button onclick="handleClick()">Click me</button>
  <script>
    function handleClick() {
      alert('Button clicked!');
    }
  </script>
  ```

- **`ondblclick`**: Xảy ra khi người dùng nhấp đúp chuột vào một phần tử.
  ```html
  <button ondblclick="handleDoubleClick()">Double click me</button>
  <script>
    function handleDoubleClick() {
      alert('Button double clicked!');
    }
  </script>
  ```

- **`onchange`**: Xảy ra khi giá trị của phần tử (như input) thay đổi.
  ```html
  <input type="text" onchange="handleChange(event)">
  <script>
    function handleChange(event) {
      console.log('Value changed to:', event.target.value);
    }
  </script>
  ```

- **`onblur`**: Xảy ra khi phần tử mất tiêu điểm.
  ```html
  <input type="text" onblur="handleBlur()">
  <script>
    function handleBlur() {
      alert('Input

 lost focus!');
    }
  </script>
  ```

- **`onfocus`**: Xảy ra khi phần tử nhận tiêu điểm.
  ```html
  <input type="text" onfocus="handleFocus()">
  <script>
    function handleFocus() {
      alert('Input gained focus!');
    }
  </script>
  ```

### Phương Thức Thao Tác Với DOM

**DOM (Document Object Model)** là cách để JavaScript tương tác với các phần tử của trang web.

- **`getElementById`**: Lấy phần tử bằng ID.
  ```javascript
  const element = document.getElementById('myElement');
  ```

- **`querySelector`**: Lấy phần tử bằng CSS selector.
  ```javascript
  const element = document.querySelector('.myClass');
  ```

- **`createElement`**: Tạo phần tử mới.
  ```javascript
  const newElement = document.createElement('div');
  ```

- **`appendChild`**: Thêm phần tử mới vào phần tử hiện tại.
  ```javascript
  document.body.appendChild(newElement);
  ```

- **`innerHTML`**: Lấy hoặc thiết lập nội dung HTML của phần tử.
  ```javascript
  element.innerHTML = 'Hello, world!';
  ```

### Thực Hành

Để củng cố kiến thức, hãy thử các ví dụ sau và xem cách mà các thành phần HTML, CSS và JavaScript tương tác với nhau.

- Tạo một trang HTML đơn giản với tiêu đề và đoạn văn.
- Sử dụng CSS để thay đổi màu nền và kiểu chữ của trang.
- Thêm một nút vào trang và viết mã JavaScript để hiển thị thông báo khi người dùng nhấp chuột vào nút.


### Hướng Dẫn DEV Dự Án

## Git và cách dùng
Bước 1: Cài đặt git trên PC
- tải cài đặt git và đăng nhập tài khoản github vào git để sử dụng 
Bước 2: tải dự án xuống
- gõ `git clone https://github.com/vuvanlinhk3/Formula1.git` trên terminal hoặc cmd


## Dưới đây là các lệnh Git cơ bản mà bạn có thể sử dụng trong công việc quản lý mã nguồn:

# **Lệnh Git Thường Dùng**

1. **Khởi Tạo Kho Lưu Trữ**
   - **`git init`**: Khởi tạo một kho lưu trữ Git mới trong thư mục hiện tại.
     ```bash
     git init
     ```

2. **Sao Chép Kho Lưu Trữ Về Máy**
   - **`git clone <url>`**: Sao chép một kho lưu trữ từ xa về máy tính của bạn.
     ```bash
     git clone https://github.com/username/repository.git
     ```

3. **Kiểm Tra Tình Trạng Kho Lưu Trữ**
   - **`git status`**: Xem trạng thái các tập tin trong kho lưu trữ.
     ```bash
     git status
     ```

4. **Thêm Tập Tin vào Stage**
   - **`git add .`**: Thêm tất cả các tập tin thay đổi trong thư mục hiện tại vào stage.
     ```bash
     git add .
     ```

5. **Commit Thay Đổi**
   - **`git commit -m "message"`**: Lưu các thay đổi trong khu vực stage vào kho lưu trữ với thông điệp mô tả.
     ```bash
     git commit -m "Add new feature"
     ```

6. **Đẩy Thay Đổi Lên Kho Lưu Trữ Từ Xa**
   - **`git push origin <branch>`**: Đẩy các thay đổi từ nhánh hiện tại lên kho lưu trữ từ xa.
     ```bash
     git push origin main
     ```

7. **Lấy Thay Đổi Từ Kho Lưu Trữ Từ Xa**
   - **`git pull origin <branch>`**: Lấy các thay đổi từ kho lưu trữ từ xa và hợp nhất chúng vào nhánh hiện tại.
     ```bash
     git pull origin main
     ```

8. **Xem Lịch Sử Commit**
   - **`git log`**: Xem lịch sử các commit trong kho lưu trữ.
     ```bash
     git log
     ```

9. **Tạo và Chuyển Đổi Sang Nhánh Mới**
   - **`git checkout -b <branch-name>`**: Tạo một nhánh mới và chuyển đổi sang nhánh đó.
     ```bash
     git checkout -b feature-branch
     ```

## **Lệnh Git Ít Dùng**

1. **Tạo Nhánh Mới**
   - **`git branch <branch-name>`**: Tạo một nhánh mới.
     ```bash
     git branch feature-branch
     ```

2. **Chuyển Đổi Nhánh**
   - **`git checkout <branch-name>`**: Chuyển đổi sang nhánh khác.
     ```bash
     git checkout feature-branch
     ```

3. **Gộp Nhánh**
   - **`git merge <branch-name>`**: Gộp các thay đổi từ nhánh được chỉ định vào nhánh hiện tại.
     ```bash
     git merge feature-branch
     ```

4. **Xóa Nhánh**
   - **`git branch -d <branch-name>`**: Xóa một nhánh cục bộ.
     ```bash
     git branch -d feature-branch
     ```

5. **Xem Các Thay Đổi**
   - **`git diff`**: Xem sự khác biệt giữa các thay đổi chưa được commit và phiên bản hiện tại.
     ```bash
     git diff
     ```

6. **Thay Đổi URL Remote**
   - **`git remote set-url origin <new-url>`**: Thay đổi URL của kho lưu trữ từ xa.
     ```bash
     git remote set-url origin https://github.com/newusername/newrepository.git
     ```

7. **Xem Thông Tin Remote**
   - **`git remote -v`**: Xem các URL của kho lưu trữ từ xa.
     ```bash
     git remote -v
     ```

8. **Xóa Tập Tin Trong Stage**
   - **`git reset <file>`**: Xóa một tập tin khỏi khu vực stage.
     ```bash
     git reset file.txt
     ```

9. **Xóa Thay Đổi Cục Bộ**
   - **`git checkout -- <file>`**: Xóa các thay đổi cục bộ và khôi phục tập tin từ phiên bản cuối cùng đã commit.
     ```bash
     git checkout -- file.txt
     ```
