// Import các trang từ thư mục pages
import { renderHomePage } from './Pages/Home.js';
import { renderDriversPage } from './Pages/Drivers.js';
import { renderDriverCard } from './components/DriverCard.js';

// Hàm để điều hướng giữa các trang
function navigateTo(page) {
  const root = document.getElementById('root');
  root.innerHTML = ''; // Xóa nội dung cũ

  // if (page === 'home') {
  //   renderHomePage(root);
  // } else if (page === 'about') {
    // renderDriversPage(root);
  // } 
// renderDriverCard(root)
renderDriversPage(root)
}
window.navigateTo = navigateTo;
// Khởi động trang mặc định (ví dụ: trang home)
document.addEventListener('DOMContentLoaded', function () {
  navigateTo('home');
});
