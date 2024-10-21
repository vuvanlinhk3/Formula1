import { renderHeader } from '../components/Header.js';
import { renderFooter } from '../components/Footer.js';
import { renderNavBar } from '../components/NavBar.js';
import { ScheduleCard } from '../components/ScheduleCard.js';

export function renderSchedulePage(root) {
  renderHeader(root);
  renderNavBar(root);

  const content = document.createElement('div');
  content.className = 'content';
  root.appendChild(content);
  content.innerHTML = `
    <div class="header-container">
      <div class="header-title">
        <h1>F1 Schedule 2024</h1>
        <p>2024 FIA Formula One World Championship™ Race Calendar</p>
      </div>
      <div class="action-buttons">
        <div class="next-round">
          <p class="round-text">ROUND F1</p>
          <p class="location">SCHEDULE 2024</p>
        </div>
      </div>
    </div>
    <div class="schedule-containers">    
    </div>
  `
  const fillInContent = document.querySelector(".schedule-containers")

  ScheduleCard(fillInContent);
  
  renderFooter(root);
}