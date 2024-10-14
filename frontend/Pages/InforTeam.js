import { renderHeader } from '../components/Header.js';
import { renderFooter } from '../components/Footer.js';
import { renderNavBar } from '../components/NavBar.js';

export function renderInfoTeamsPage(root) {
  renderHeader(root);
  renderNavBar(root);
  const aboutContent = document.createElement('div');
  aboutContent.innerHTML = `
    <div class="maininfotem passion-one-regular">
            <div class="team-info-container ">
                <div class="team-info-left">
                    <div class="team-details passion-one-regular">
                        <p class = "passion-one-regular"><strong>Full Team Name:</strong> McLaren Formula 1 Team</p>
                        <p class = "passion-one-regular"><strong>Base:</strong> Woking, United Kingdom</p>
                        <p class = "passion-one-regular"><strong>Team Chief:</strong> Andrea Stella</p>
                        <p class = "passion-one-regular"><strong>Technical Chief:</strong> Peter Prodromou / Neil Houldey</p>
                        <p class = "passion-one-regular"><strong>Chassis:</strong> MCL38</p>
                        <p class = "passion-one-regular"><strong>Power Unit:</strong> Mercedes</p>
                        <p class = "passion-one-regular"><strong>First Team Entry:</strong> 1966</p>
                        <p class = "passion-one-regular"><strong>World Championships:</strong> 8</p>
                        <p class = "passion-one-regular"><strong>Highest Race Finish:</strong> 1 (x188)</p>
                        <p class = "passion-one-regular"><strong>Pole Positions:</strong> 162</p>
                        <p class = "passion-one-regular"><strong>Fastest Laps:</strong> 170</p>
                    </div>
                </div>
                <div class="team-info-right">
                    <div class="driver-card">
                        <img src="/frontend/DriverImg/x2tsmqm9.png" alt="Lando Norris" class="driver-img">
                        <div class="driver-info">
                            <h1>4</h1>
                            <p>Lando Norris</p>
                            <p>McLaren</p>
                        </div>
                    </div>
                    <div class="driver-card">
                        <img src="/frontend/DriverImg/x2tsmqm9.png" alt="Oscar Piastri" class="driver-img">
                        <div class="driver-info">
                            <h1>81</h1>
                            <p>Oscar Piastri</p>
                            <p>McLaren</p>
                        </div>
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
