import { renderHeader } from '../components/Header.js';
import { renderFooter } from '../components/Footer.js';
import { renderNavBar } from '../components/NavBar.js';
import { DriverCard } from '../components/DriverCard.js'; // Import DriverCard

export function renderDriversPage(root) {
    // Render header và navbar
    renderHeader(root);
    renderNavBar(root);

    // Tạo phần content chứa danh sách các tay đua
    const driverContent = document.createElement('div');
    driverContent.className = 'driver-content'; // Thêm class cho container chính
    root.appendChild(driverContent);
    
    driverContent.innerHTML = `
        <div class="driver-bruh">
            <div class="driver-title passion-one-regular">
                Danh sách tay đua
            </div>
            <div class="driver-description">
                Thông tin về các tay đua trong mùa giải F1 2024.
            </div>
        </div>
        <div class="blank">
        </div>
    `;

    const driverContentFill = driverContent.querySelector(".blank");

    // Gọi DriverCard và render nó vào trang
    DriverCard(driverContentFill);

    // Render footer
    renderFooter(root);
}
