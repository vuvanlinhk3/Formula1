import { renderHeader } from '../components/Header.js';
import { renderFooter } from '../components/Footer.js';

export function renderHomePage(root) {
  renderHeader(root);

  const homeContent = document.createElement('div');
  homeContent.innerHTML = `
    <div class="driver-card">
        <!-- Phần 1: Rank và Điểm -->
        <div class="part1">
            <div class="rank">1</div>
            <div class="points-wrapper">
                <span class="score">331</span> <!-- Điểm số -->
                <span class="pts">PTS</span>   <!-- Chữ PTS -->
            </div>
        </div>

        <!-- Đường kẻ ngang -->
        <hr class="divider">

        <!-- Phần 2: Tên và Quốc kỳ -->
        <div class="part2">
            <div class="name">
                <h2>MAX</h2>
                <h2>VERSTAPPEN</h2>
            </div>
            <img class="flag" src="image/flag.gif" alt="Netherlands Flag">
        </div>

        <!-- Đường kẻ ngang -->
        <hr class="divider1">

        <!-- Phần 3: Thông tin đội và hình ảnh người lái -->
        <div class="part3">
            <div class="team-info">
                <p class="team-name">Red Bull Racing</p>
                <p class="driver-number">1</p>
            </div>
            <div class="driver-image">
                <img src="image/max.avif" alt="Max Verstappen">
            </div>
        </div>
    </div>
    <script>
        // Thêm sự kiện click vào phần tử driver-card
        document.getElementById('driverCard').addEventListener('click', function() {
            alert('Driver card clicked!');
        });
    </script>
  `;
  root.appendChild(homeContent);

  renderFooter(root);

  // Điều hướng đến trang About
  document.getElementById('goToAbout').addEventListener('click', function () {
    navigateTo('about');
  });
}
