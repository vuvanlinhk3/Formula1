// Import các trang từ thư mục pages
import { renderHomePage } from './Pages/Home.js';
import { renderDriversPage } from './Pages/Drivers.js';
import { renderTeamsPage } from './Pages/Teams.js';

// Import các trang khác nếu có
// import { renderSchedulePage } from './Pages/Schedule.js';
// import { renderTeamsPage } from './Pages/Teams.js';
// import { renderStandingPage } from './Pages/Standing.js';

// Hàm để điều hướng giữa các trang và cập nhật tiêu đề trang
function navigateTo(page) {
  const root = document.getElementById('root');
  root.innerHTML = ''; // Xóa nội dung cũ

  // Cập nhật nội dung dựa trên trang
  if (page === 'home') {
    renderHomePage(root);
    document.title = 'Home'; // Thay đổi tiêu đề trang
  } else if (page === 'drivers') {
    renderDriversPage(root);
    document.title = 'Drivers'; // Thay đổi tiêu đề trang
  } else if (page === 'schedule') {
    // renderSchedulePage(root);
    document.title = 'Schedule'; // Thay đổi tiêu đề trang
  } else if (page === 'teams') {
    renderTeamsPage(root);
    document.title = 'Teams'; // Thay đổi tiêu đề trang
  } else if (page === 'standing') {
    // renderStandingPage(root);
    document.title = 'Standing'; // Thay đổi tiêu đề trang
  } else if (page === 'result') {
    // renderResultPage(root);
    document.title = 'Result'; // Thay đổi tiêu đề trang
  }else if (page === 'inforteam') {
    // renderResultPage(root);
    document.title = 'InforTeam'; // Thay đổi tiêu đề trang
  }else if (page === 'infordriver') {
    // renderResultPage(root);
    document.title = 'InforDriver'; // Thay đổi tiêu đề trang
  }else if (page === 'inforschedule') {
    // renderResultPage(root);
    document.title = 'InforSchedule'; // Thay đổi tiêu đề trang
  }else {
    renderHomePage(root); // Trang mặc định
    document.title = 'Home';
  }
}

// Hàm để lấy hash từ URL và chuyển đổi hash thành page
function getPageFromHash() {
  const hash = window.location.hash || '#home'; // Mặc định là #home nếu không có hash
  return hash.substring(1); // Bỏ ký tự '#' và trả về tên page
}

// Lắng nghe sự kiện hashchange để điều hướng khi URL thay đổi
window.addEventListener('hashchange', function () {
  const page = getPageFromHash();
  navigateTo(page);
});

// Khởi động trang mặc định (ví dụ: trang home)
document.addEventListener('DOMContentLoaded', function () {
  const page = getPageFromHash();
  navigateTo(page);
});

// Gắn hàm điều hướng cho window để có thể gọi từ HTML (thay đổi hash trong URL)
window.navigateTo = function (page) {
  window.location.hash = page; // Thay đổi hash trong URL
};
