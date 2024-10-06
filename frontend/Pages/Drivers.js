import { renderHeader } from '../components/Header.js';
import { renderFooter } from '../components/Footer.js';
import { renderNavBar } from '../components/NavBar.js';
import {renderDriverCard} from '../components/DriverCard.js';

export function renderDriversPage(root) {
  renderHeader(root);
    renderNavBar(root)
  const aboutContent = document.createElement('div');
  aboutContent.innerHTML = `
    <div class = "driver_body">
        <div class = "driver_top">
            <div class = "driver_title">
            
            </div>
            <div class = "driver_des">
            
            </div>
        </div>
        <div class = "driver_list">
            <!-- đây là chỗ để renderdrivercard -->
        </div>
    </div>
  `;
  root.appendChild(aboutContent);
const driverList = document.querySelector('.driver_list')
console.log(driverList);
    renderDriverCard(driverList)
    renderDriverCard(driverList)
    renderDriverCard(driverList)
    renderDriverCard(driverList)
    renderDriverCard(driverList)
    renderDriverCard(driverList)


  renderFooter(root);

  // Điều hướng về trang Home
}
