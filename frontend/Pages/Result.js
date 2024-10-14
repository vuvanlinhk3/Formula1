import { renderHeader } from '../components/Header.js';
import { renderFooter } from '../components/Footer.js';
import { renderNavBar } from '../components/NavBar.js';

export function renderResultPage(root) {
  renderHeader(root);
  renderNavBar(root);
  const resultContent = document.createElement('div');
  resultContent.innerHTML = `
  <div class= "result-container">
    <div class="select">
      <div class = "select-year">
        <div class = "selct-year-content">
          <p><a>2024</a></p>
          <p><a>2023</a></p>
          <p><a>2022</a></p>
          <p><a>2021</a></p>
          <p><a>2020</a></p>
        </div>
      </div>
      <div class = "select-track">
        <div class = "selct-track-content">
          <p><a>All</a></p>
          <p><a>Bahrain</a></p>
          <p><a>Saudi Arabia</a></p>
          <p><a>Australia</a></p>
          <p><a>Japan</a></p>
          <p><a>China</a></p>
          <p><a>Miami</a></p>
          <p><a>Emilia-Romagna</a></p>
          <p><a>Monaco</a></p>
          <p><a>Canada</a></p>
          <p><a>Spain</a></p>
          <p><a>Australia</a></p>
          <p><a>Great Britain</a></p>
          <p><a>Hungary</a></p>
          <p><a>Belgium</a></p>
          <p><a>Netherlands</a></p>
          <p><a>Italy</a></p>
          <p><a>Azerbaijan</a></p>
          <p><a>Singapore</a></p>
          <p><a>United State</a></p>
          <p><a>Mexico</a></p>
          <p><a>Brazil</a></p>
          <p><a>Las Vegas</a></p>
          <p><a>Qatar</a></p>
          <p><a>Abu Dhabi</a></p>
        </div>
      </div>
    </div>
    <div class = "title">
    <h1>2024 Race Result</h1>
    </div>
    <table class="detail-result">
      <thead>
        <tr>
            <th>Grand Prix</th>
            <th>Date</th>
            <th>Winner</th>
            <th>Car</th>
            <th>Laps Completed</th>
            <th>Time</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Barrain</td>
          <td>02 Mar 2024</td>
          <td>Max Verstappen</td>
          <td>Red Bull Racing Honda RBPT</td>
          <td>57</td>
          <td>1:31:44.742</td>
        </tr>
        <tr>
          <td>Barrain</td>
          <td>02 Mar 2024</td>
          <td>Max Verstappen</td>
          <td>Red Bull Racing Honda RBPT</td>
          <td>57</td>
          <td>1:31:44.742</td>
        </tr>
        <tr>
          <td>Barrain</td>
          <td>02 Mar 2024</td>
          <td>Max Verstappen</td>
          <td>Red Bull Racing Honda RBPT</td>
          <td>57</td>
          <td>1:31:44.742</td>
        </tr>
        <tr>
          <td>Barrain</td>
          <td>02 Mar 2024</td>
          <td>Max Verstappen</td>
          <td>Red Bull Racing Honda RBPT</td>
          <td>57</td>
          <td>1:31:44.742</td>
        </tr>
        <tr>
          <td>Barrain</td>
          <td>02 Mar 2024</td>
          <td>Max Verstappen</td>
          <td>Red Bull Racing Honda RBPT</td>
          <td>57</td>
          <td>1:31:44.742</td>
        </tr>
        <tr>
          <td>Barrain</td>
          <td>02 Mar 2024</td>
          <td>Max Verstappen</td>
          <td>Red Bull Racing Honda RBPT</td>
          <td>57</td>
          <td>1:31:44.742</td>
        </tr>
        <tr>
          <td>Barrain</td>
          <td>02 Mar 2024</td>
          <td>Max Verstappen</td>
          <td>Red Bull Racing Honda RBPT</td>
          <td>57</td>
          <td>1:31:44.742</td>
        </tr>
        <tr>
          <td>Barrain</td>
          <td>02 Mar 2024</td>
          <td>Max Verstappen</td>
          <td>Red Bull Racing Honda RBPT</td>
          <td>57</td>
          <td>1:31:44.742</td>
        </tr>
      </tbody>
    <table>
  <div>
  `;
  root.appendChild(resultContent);

  renderFooter(root);


}
