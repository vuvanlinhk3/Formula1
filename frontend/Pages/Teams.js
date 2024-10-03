import { renderHeader } from '../components/Header.js';
import { renderFooter } from '../components/Footer.js';
import { renderNavBar } from '../components/NavBar.js';

export function renderTeamsPage(root) {
  renderHeader(root);
  renderNavBar(root);
  const homeContent = document.createElement('div');
  homeContent.innerHTML = `
<div class="teams-container">
  <div class="team-card">
    <img src="team-logo-url.jpg" alt="Team Logo" class="team-logo" />
    <div class="team-info">
      <h2 class="team-name">Mercedes-AMG Petronas Formula One Team</h2>
      <p class="team-country">United Kingdom</p>
    </div>
  </div>

  <div class="team-card">
    <img src="team-logo-url.jpg" alt="Team Logo" class="team-logo" />
    <div class="team-info">
      <h2 class="team-name">Scuderia Ferrari</h2>
      <p class="team-country">Italy</p>
    </div>
  </div>

  <!-- Add more teams as needed -->
</div>

  `;
  root.appendChild(homeContent);

  renderFooter(root);
}
