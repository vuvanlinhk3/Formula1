import { renderHeader } from '../components/Header.js';
import { renderFooter } from '../components/Footer.js';

export function renderHomePage(root) {
  renderHeader(root);

  const homeContent = document.createElement('div');
  homeContent.innerHTML = `
   
  `;
  root.appendChild(homeContent);

  renderFooter(root);

  // Điều hướng đến trang About
  document.getElementById('goToAbout').addEventListener('click', function () {
    navigateTo('about');
  });
}
