import { renderHeader } from '../components/Header.js';
import { renderFooter } from '../components/Footer.js';
import { renderNavBar } from '../components/NavBar.js';

// Hàm để lấy dữ liệu từ API
async function fetchDriverInfo(driverID) {
  try {
    // Gọi API lấy thông tin tay đua
    const response = await fetch(`http://localhost:3000/driver/${driverID}`);
    // console.log(`Fetching driver info from: http://localhost:3000/api/driver/${driverID}`);

    if (!response.ok) {
      throw new Error('Không thể lấy thông tin tay đua');
    }
    const data = await response.json();
    return data.driver; // Trả về dữ liệu tay đua từ backend
  } catch (error) {
    console.error('Lỗi khi lấy dữ liệu tay đua:', error);
    return null; // Trả về null nếu có lỗi
  }
}

export async function renderInfoDriversPage(root, driverID) {
  // Gọi các hàm để render header và navbar
  renderHeader(root);
  renderNavBar(root);

  // Lấy thông tin tay đua từ API thông qua hàm fetchDriverInfo
  const driver = await fetchDriverInfo(driverID);

  if (!driver) {
    // Hiển thị thông báo nếu không tìm thấy tay đua
    root.innerHTML = '<p>Không tìm thấy tay đua.</p>';
    return;
  }

  // Kiểm tra và gán các giá trị mặc định nếu dữ liệu bị thiếu
  const driverPic = driver.DriverPicTwo || 'default-driver-pic.jpg';
  const driverFlagPic = driver.FlagPic || 'default-flag.jpg';
  const driverTeamName = driver.Team?.TeamName || 'Không có đội';
  const driverAchievements = driver.Podium || 'Chưa có thông tin về podium.';
  const driverPoints = driver.Points || 'Chưa có thông tin về điểm.';
  const driverBio = driver.Bio || 'Chưa có thông tin về tiểu sử.';

  // Tạo nội dung để hiển thị thông tin tay đua
  const aboutContent = document.createElement('div');
  aboutContent.innerHTML = `
    <div class="dfs passion-one-regular">
      <div class="profile-container">
        <div class="left-section">
          <img src="${driverPic}" alt="${driver.DriverName}" class="driver-img">
          <div class="driver-name">
            <span class="driver-rank">${driver.DriverID}</span>
            <img src="${driverFlagPic}" alt="Cờ ${driver.DriverName}" class="country-flag">
            <h1>${driver.DriverName}</h1>
          </div>
        </div>
        <div class="right-section">
          <div class="driver-details passion-one-regular">
            <p><strong>Team:</strong> ${driverTeamName}</p>
            <p><strong>Points:</strong> ${driverPoints}</p>
            <p><strong>Podium:</strong> ${driverAchievements}</p>
          </div>
        </div>
      </div>
      <div class="biography-container">
        <hr class="biography-separator"/>
        <div class="biography-title">
          <p>Biography</p>
        </div>
        <div class="biography-content">
          <p>${driverBio}</p>
        </div>
      </div>
    </div>
  `;

  // Thêm nội dung vào root
  root.appendChild(aboutContent);

  // Gọi hàm để render footer
  renderFooter(root);
}
