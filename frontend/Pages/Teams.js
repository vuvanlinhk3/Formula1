import { renderHeader } from '../components/Header.js';
import { renderFooter } from '../components/Footer.js';
import { renderNavBar } from '../components/NavBar.js';
import { TeamCard } from '../components/TeamCard.js'; // Import TeamCard

export function renderTeamsPage(root) {
  renderHeader(root);
  renderNavBar(root);

  const homeContent = document.createElement('div');
  homeContent.className = 'home-content'; // Thêm class cho container chính
  root.appendChild(homeContent);

  // Gọi TeamCard và render nó vào trang
  TeamCard(homeContent);

  renderFooter(root);
}
