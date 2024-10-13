import { renderHeader } from '../components/Header.js';
import { renderFooter } from '../components/Footer.js';
import { renderNavBar } from '../components/NavBar.js';

export function renderInfoDriversPage(root) {
  renderHeader(root);
  renderNavBar(root);
  const aboutContent = document.createElement('div');
  aboutContent.innerHTML = `
    <div class="dfs passion-one-regular">
        <div class = "profile-container">
            <div class="left-section">
            <img src="/frontend/DriverImg/x2tsmqm9.png" alt="Max Verstappen" class="driver-img">
            <div class="driver-name">
                <span class="driver-rank">1</span>
                <img src="https://upload.wikimedia.org/wikipedia/commons/2/20/Flag_of_the_Netherlands.svg" alt="Netherlands flag" class="country-flag">
                <h1>Max Verstappen</h1>
            </div>
        </div>
        <div class="right-section">
            <div class="driver-details passion-one-regular">
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
        <div class="biography-container">
            <hr class="biography-separator"/>
            <div class="biography-title">
                <p>Biography</p>
            </div>
            <div class="biography-content">
                <p>He’s Max by name, and max by nature.</p>
            </div>
        </div>

    </div>
  `;
  root.appendChild(aboutContent);

  renderFooter(root);
}
