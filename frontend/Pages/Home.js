import { renderHeader } from '../components/Header.js';
import { renderFooter } from '../components/Footer.js';
import { renderNavBar } from '../components/NavBar.js';

export function renderHomePage(root) {
  renderHeader(root);
  renderNavBar(root)
  const homeContent = document.createElement('div');
  homeContent.innerHTML = `
    <h1>Welcome to the Home Page</h1>
    <button id="goToAbout">Go to About Page</button>
  `;
  root.appendChild(homeContent);

  renderFooter(root);

  // Điều hướng đến trang About
  document.getElementById('goToAbout').addEventListener('click', function () {
    navigateTo('about');
  });
}
