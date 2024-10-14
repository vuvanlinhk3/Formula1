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
          <p>2024</p>
          <p>2023</p>
          <p>2022</p>
          <p>2021</p>
          <p>2020</p>
        </div>
      </div>
      <div class = "select-track">
        <div class = "selct-track-content">
          <p>All</p>
          <p>Bahrain</p>
          <p>Saudi Arabia</p>
          <p>Australia</p>
          <p>Japan</p>
          <p>China</p>
          <p>Miami</p>
          <p>Emilia-Romagna</p>
          <p>Monaco</p>
          <p>Canada</p>
          <p>Spain</p>
          <p>Australia</p>
          <p>Great Britain</p>
          <p>Hungary</p>
          <p>Belgium</p>
          <p>Netherlands</p>
          <p>Italy</p>
          <p>Azerbaijan</p>
          <p>Singapore</p>
          <p>United State</p>
          <p>Mexico</p>
          <p>Brazil</p>
          <p>Las Vegas</p>
          <p>Qatar</p>
          <p>Abu Dhabi</p>
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
