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
  
  homeContent.innerHTML = `
  <div class = "team-bruh">
    <div class = "team-title passion-one-regular">
      F1 Teams 2024
    </div>
    <div class = "team-description">
      Discover everything you need to know about this year's Formula 1 teams - drivers, podium finishes, points earned and championship titles.
    </div>
  </div>
  <div class = "blank">
  </div>
  `
  const homeContentFill = document.querySelector(".blank")

  // Gọi TeamCard và render nó vào trang
  TeamCard(homeContentFill);
  TeamCard(homeContentFill);
  TeamCard(homeContentFill);
  TeamCard(homeContentFill);
  TeamCard(homeContentFill);
  TeamCard(homeContentFill);


  renderFooter(root);
}
