import { renderHeader } from '../components/Header.js';
import { renderFooter } from '../components/Footer.js';
import { renderNavBar } from '../components/NavBar.js';

export function renderDriversPage(root) {
  renderHeader(root);
  renderNavBar(root);
  const aboutContent = document.createElement('div');
  aboutContent.innerHTML = `
    <div class="profile-container">
        <div class="left-section">
            <img src="https://placehold.co/300x400" alt="Max Verstappen" class="driver-img">
            <div class="driver-name">
                <span class="driver-rank">1</span>
                <img src="https://upload.wikimedia.org/wikipedia/commons/2/20/Flag_of_the_Netherlands.svg" alt="Netherlands flag" class="country-flag">
                <h1>Max Verstappen</h1>
            </div>
        </div>
        <div class="right-section">
            <img src="https://placehold.co/150x150" alt="Red Bull Helmet" class="helmet-img">
            <div class="merch-links">
                <a href="#">Official merchandise</a><br>
                <a href="#">Official memorabilia</a>
            </div>
            <div class="driver-details">
                <p><strong>Team:</strong> Red Bull Racing</p>
                <p><strong>Country:</strong> Netherlands</p>
                <p><strong>Podiums:</strong> 109</p>
                <p><strong>Points:</strong> 2917.5</p>
                <p><strong>Grands Prix entered:</strong> 203</p>
                <p><strong>World Championships:</strong> 3</p>
                <p><strong>Highest race finish:</strong> 1 (x61)</p>
                <p><strong>Highest grid position:</strong> 1</p>
                <p><strong>Date of birth:</strong> 30/09/1997</p>
                <p><strong>Place of birth:</strong> Hasselt, Belgium</p>
            </div>
        </div>
    </div>
  `;
  root.appendChild(aboutContent);

  renderFooter(root);

  // Điều hướng về trang Home
  document.getElementById('goToHome').addEventListener('click', function () {
    navigateTo('home');
  });
}
