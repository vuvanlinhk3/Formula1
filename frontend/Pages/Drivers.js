import { renderHeader } from '../components/Header.js';
import { renderFooter } from '../components/Footer.js';
import { renderNavBar } from '../components/NavBar.js';
import {renderDriverCards} from '../components/DriverCard.js';
export function renderDriversPage(root) {
  renderHeader(root);
  renderNavBar(root);

  const aboutContent = document.createElement('div');
  aboutContent.innerHTML = `
      <div class="driver_body">
          <div class="driver_top">
              <div class="driver_title">
                  <h1>Danh sách tay đua</h1>
              </div>
              <div class="driver_des">
                  <p>Thông tin về các tay đua</p>
              </div>
          </div>
          <div class="driver_list">
              <!-- đây là chỗ để render driver card -->
          </div>
      </div>
  `;

  root.appendChild(aboutContent);

  // Gọi hàm để render danh sách tay đua sau khi phần tử đã được thêm vào DOM
  const driverList = aboutContent.querySelector('.driver_list'); // Lấy phần tử driver_list từ aboutContent
  renderDriverCards(driverList); // Chuyển driverList vào hàm renderDriverCards

  renderFooter(root);
}
