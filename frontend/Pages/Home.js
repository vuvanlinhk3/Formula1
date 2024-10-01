import { renderHeader } from '../components/Header.js';
import { renderFooter } from '../components/Footer.js';
import { renderNavBar } from '../components/NavBar.js';

export function renderHomePage(root) {
  renderHeader(root);
  renderNavBar(root);
  const homeContent = document.createElement('div');
  homeContent.innerHTML = `
    <div class="container">
        <div class="event-card">
            <img src="/frontend/imgs/co.png" alt="Netherlands" class="flag">
            <div class="date">25</div>
            <div class="month">AUG</div>
        </div>
        <div class="event-card">
            <img src="/frontend/imgs/co.png" alt="Italy" class="flag">
            <div class="date">1</div>
            <div class="month">SEP</div>
        </div>
        <div class="event-card">
            <img src="/frontend/imgs/co.png" alt="Azerbaijan" class="flag">
            <div class="date">15</div>
            <div class="month">SEP</div>
        </div>
        <div class="/frontend/imgs/co.png">
            <img src="singapore.png" alt="Singapore" class="flag">
            <div class="date">22</div>
            <div class="month">SEP</div>
        </div>
        <div class="event-card highlight">
            <img src="/frontend/imgs/co.png" alt="United States" class="flag">
            <h2>FORMULA 1 PIRELLI UNITED STATES GRAND PRIX 2024</h2>
            <div class="date">18 OCT - 20 OCT 2024</div>
            <button class="view-schedule">VIEW SCHEDULE</button>
            <div class="time-info">
                <div>Austin 09:01</div>
                <div>Your time 21:01</div>
            </div>
        </div>
        <div class="event-card">
            <img src="/frontend/imgs/co.png" alt="Mexico" class="flag">
            <div class="date">27</div>
            <div class="month">OCT</div>
        </div>
        <div class="event-card">
            <img src="/frontend/imgs/co.png" alt="Brazil" class="flag">
            <div class="date">3</div>
            <div class="month">NOV</div>
        </div>
        <div class="event-card">
            <img src="/frontend/imgs/co.png" alt="Las Vegas" class="flag">
            <div class="date">23</div>
            <div class="month">NOV</div>
        </div>
        <div class="event-card">
            <img src="/frontend/imgs/co.png" alt="Qatar" class="flag">
            <div class="date">1</div>
            <div class="month">DEC</div>
        </div>
        <div class="event-card">
            <img src="/frontend/imgs/co.png" alt="Abu Dhabi" class="flag">
            <div class="date">8</div>
            <div class="month">DEC</div>
        </div>
    </div>
  `;
  root.appendChild(homeContent);

  renderFooter(root);

  // Điều hướng đến trang About
  document.getElementById('goToAbout').addEventListener('click', function () {
    navigateTo('about');
  });
}
