import { renderHeader } from '../components/Header.js';
import { renderFooter } from '../components/Footer.js';

export function renderAboutPage(root) {
  renderHeader(root);

  const aboutContent = document.createElement('div');
  aboutContent.innerHTML = `
    <h1>About Us</h1>
    <button id="goToHome">Go to Home Page</button>
  `;
  root.appendChild(aboutContent);

  renderFooter(root);

  // Điều hướng về trang Home
  document.getElementById('goToHome').addEventListener('click', function () {
    navigateTo('home');
  });
}
