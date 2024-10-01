import { renderHeader } from '../components/Header.js';
import { renderFooter } from '../components/Footer.js';

export function renderHomePage(root) {
  renderHeader(root);

  const homeContent = document.createElement('div');
  homeContent.innerHTML = `
    <h1>Welcome to the Home Page</h1>
    <button id="goToAbout">Go to About Page</button>
    <!-- Nút Sign In -->
    <button class="signin"> <i class="fa-solid fa-user icon"></i> Sign In </button>

    <!-- Nút Sign Up -->
    <button class="signup"> <i class="fa-solid fa-user-plus icon"></i> Sign Up </button>
  `;
  root.appendChild(homeContent);

  renderFooter(root);

  // Điều hướng đến trang About
  document.getElementById('goToAbout').addEventListener('click', function () {
    navigateTo('about');
  });
}
