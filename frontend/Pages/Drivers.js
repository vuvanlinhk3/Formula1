import { renderHeader } from '../components/Header.js';
import { renderFooter } from '../components/Footer.js';
// import {}

export function renderDriversPage(root) {
  renderHeader(root);

  const aboutContent = document.createElement('div');
  aboutContent.innerHTML = `
    <div class = "driver_body">
        <div class = "driver_top">
            <div class = "driver_title">
            
            </div>
            <div class = "driver_des">
            
            </div>
        </div>
        <div class = "driver_list"></div>
    </div>
  `;
  root.appendChild(aboutContent);

  renderFooter(root);

  // Điều hướng về trang Home
  document.getElementById('goToHome').addEventListener('click', function () {
    navigateTo('home');
  });
}
