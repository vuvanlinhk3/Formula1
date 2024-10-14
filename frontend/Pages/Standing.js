import { renderHeader } from '../components/Header.js';
import { renderFooter } from '../components/Footer.js';
import { renderNavBar } from '../components/NavBar.js';

export function renderStandingPage(root) {
  renderHeader(root);
  renderNavBar(root);
  const standingContent = document.createElement('div');
  standingContent.className = 'standing-body';
  standingContent.innerHTML = `
  <div class="standing-page-container">
    <div class = "title">
        <h1>2024 Driver Standing</h1>
    </div>
    <table class="driver-standing">
        <thead>
            <tr>
                <th>Position</th>
                <th>Driver</th>
                <th>Nationality</th>
                <th>Car</th>
                <th>Points</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>1</td>
                <td>Max Verstappen</td>
                <td>Netherlands</td>
                <td>Red Bull Racing Honda RBPT</td>
                <td>331</td>
            </tr>
                <td>1</td>
                <td>Max Verstappen</td>
                <td>Netherlands</td>
                <td>Red Bull Racing Honda RBPT</td>
                <td>331</td>
            </tr>
            <tr>
                <td>1</td>
                <td>Max Verstappen</td>
                <td>Netherlands</td>
                <td>Red Bull Racing Honda RBPT</td>
                <td>331</td>
            </tr>
            <tr>
                <td>1</td>
                <td>Max Verstappen</td>
                <td>Netherlands</td>
                <td>Red Bull Racing Honda RBPT</td>
                <td>331</td>
            </tr>
            <tr>
                <td>1</td>
                <td>Max Verstappen</td>
                <td>Netherlands</td>
                <td>Red Bull Racing Honda RBPT</td>
                <td>331</td>
            </tr>
            <tr>
                <td>1</td>
                <td>Max Verstappen</td>
                <td>Netherlands</td>
                <td>Red Bull Racing Honda RBPT</td>
                <td>331</td>
            </tr>
            <tr>
                <td>1</td>
                <td>Max Verstappen</td>
                <td>Netherlands</td>
                <td>Red Bull Racing Honda RBPT</td>
                <td>331</td>
            </tr>
        </tbody>
    </table>  
  </div>
  `;
  root.appendChild(standingContent);

  renderFooter(root);
}
