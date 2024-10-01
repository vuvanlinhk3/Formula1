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
        <div class="event-card">
            <img src="/frontend/imgs/co.png" alt="Singapore" class="flag">
            <div class="date">22</div>
            <div class="month">SEP</div>
        </div>
        <div class="event-card highlight">
            <img src="/frontend/imgs/co.png" alt="United States" class="flag">
            <h2>FORMULA 1 PIRELLI UNITED STATES GRAND PRIX 2024</h2>
            <div class="date">18 OCT - 20 OCT 2024</div>
            <button class="view-schedule">VIEW SCHEDULE</button>
            <div class="time-info">
                <div class="outtime">Austin 09:01</div>
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


<!--Standing driver  -->

    <div class="driver-standings">
        <div class="back-standing">
            <span>Driver Standings</span>
        </div>
        <div class="standing-container">
            <div class="top-standing">

                <div class="top-driver">
                    <div class="T-driver">
                        <img class = "driver-img" src="/frontend/DriverImg/qmvhe81a.png" alt="Driver">
                    </div>
                    <div class="infor-diver">
                        <img src="/frontend/imgs/co.png" alt="quocky">
                        <div class="name-driver">
                            <p>Max Verstappen</p>
                        </div>
                        
                    </div>
                    <div class ="number-driver">2</div>
                </div>

                <div class="top-driver">
                    <div class="T-driver">
                        <img class = "driver-img" src="/frontend/DriverImg/qmvhe81a.png" alt="Driver">
                    </div>
                    <div class="infor-diver">
                        <img src="/frontend/imgs/co.png" alt="quocky">
                        <div class="name-driver">
                            <p>Max Verstappen</p>
                        </div>
                        
                    </div>
                    <div class ="number-driver">1</div>
                </div>

                <div class="top-driver">
                    <div class="T-driver">
                        <img class = "driver-img" src="/frontend/DriverImg/qmvhe81a.png" alt="Driver">
                    </div>
                    <div class="infor-diver">
                        <img src="/frontend/imgs/co.png" alt="quocky">
                        <div class="name-driver">
                            <p>Max Verstappen</p>
                        </div>
                        
                    </div>
                    <div class ="number-driver">3</div>
                </div>

            </div>
        </div>
    </div>

    <!-- danh sách driver-->
    <div class = "top-list">
        <div class = "top-item">
            <span>1</span>
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
