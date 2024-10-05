import { renderHeader } from '../components/Header.js';
import { renderFooter } from '../components/Footer.js';
import { renderNavBar } from '../components/NavBar.js';

export function renderHomePage(root) {
  renderHeader(root);
  renderNavBar(root);
  const homeContent = document.createElement('div');
  homeContent.innerHTML = `

    <div class = "cangiua">
        <div class= "border-big">
        <div class="ticket-section passion-one-regular">
            <div class="ticket-bg">
                <img src="/frontend/imgs/ofc20j9r.png" alt="Formula 1 cars racing" class="ticket-img" />
            </div>
            <div class="ticket-content">
                <h2>WELL COME TO F1</h2>
                <p>Don't miss your chance to experience the amazing Circuit of The Americas...</p>
                <a href="#" class="ticket-btn">VIEW SCHEDULE NOW</a>
            </div>
        </div>
    </div>
    </div>



    <div class="container passion-one-regular">
        <div class="event-card">
            <img src="/frontend/imgs/co.png" alt="Netherlands" class="flag">
            <div class="date">25</div>
            <div class="month">AUG</div>
        </div>
        <div class="event-card passion-one-regular">
            <img src="/frontend/imgs/co.png" alt="Italy" class="flag">
            <div class="date">1</div>
            <div class="month">SEP</div>
        </div>
        <div class="event-card passion-one-regular">
            <img src="/frontend/imgs/co.png" alt="Azerbaijan" class="flag">
            <div class="date">15</div>
            <div class="month">SEP</div>
        </div>
        <div class="event-card passion-one-black">
            <img src="/frontend/imgs/co.png" alt="Singapore" class="flag">
            <div class="date">22</div>
            <div class="month">SEP</div>
        </div>
        <div class="event-card highlight">
            <img src="/frontend/imgs/co.png" alt="United States" class="flag">
            <h2>FORMULA 1 PIRELLI UNITED STATES GRAND PRIX 2024</h2>
            <div class="date-hightlight date">18 OCT - 20 OCT 2024</div>
            <button class="view-schedule passion-one-regular">VIEW SCHEDULE</button>
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

    <div class="driver-standings passion-one-regular">
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
                    <div class ="number-driver passion-one-black">2</div>
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
                    <div class ="number-driver passion-one-bold">1</div>
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
                    <div class ="number-driver passion-one-black">3</div>
                </div>

            </div>
        </div>
    </div>

    <!-- danh sách driver-->
    <div class="top-list-container passion-one-regular">
        <div class = "top-list">



            <div class = "top-item">
                <div class= "left-item">
                    <div>1</div>
                    <div>Max Verstapeen</div>
                    <div>Red bull</div>
                </div>

                <div class= "right-item">
                    <div class="pts">
                    <span>331</span>
                    <span>PTF</span>
                    </div>
                    
                    <div class = "row-right">
                        <i class="fa-solid fa-arrow-right"></i>
                    </div>
                </div>
                
            </div>

            <div class = "top-item">
                <div class= "left-item">
                    <div>1</div>
                    <div>Max Verstapeen</div>
                    <div>Red bull</div>
                </div>

                <div class= "right-item">
                    <div class="pts">
                    <span>331</span>
                    <span>PTF</span>
                    </div>
                    
                    <div class = "row-right">
                        <i class="fa-solid fa-arrow-right"></i>
                    </div>
                </div>
                
            </div>

            <div class = "top-item">
                <div class= "left-item">
                    <div>1</div>
                    <div>Max Verstapeen</div>
                    <div>Red bull</div>
                </div>

                <div class= "right-item">
                    <div class="pts">
                    <span>331</span>
                    <span>PTF</span>
                    </div>
                    
                    <div class = "row-right">
                        <i class="fa-solid fa-arrow-right"></i>
                    </div>
                </div>
                
            </div>

            <div class = "top-item">
                <div class= "left-item">
                    <div>1</div>
                    <div>Max Verstapeen</div>
                    <div>Red bull</div>
                </div>

                <div class= "right-item">
                    <div class="pts">
                    <span>331</span>
                    <span>PTF</span>
                    </div>
                    
                    <div class = "row-right">
                        <i class="fa-solid fa-arrow-right"></i>
                    </div>
                </div>
                
            </div>

            <div class = "top-item">
                <div class= "left-item">
                    <div>1</div>
                    <div>Max Verstapeen</div>
                    <div>Red bull</div>
                </div>

                <div class= "right-item">
                    <div class="pts">
                    <span>331</span>
                    <span>PTF</span>
                    </div>
                    
                    <div class = "row-right">
                        <i class="fa-solid fa-arrow-right"></i>
                    </div>
                </div>
                
            </div>


                    <div class ="btn">
                        <span class ="passion-one-regular">VIEW FULL STANDING</span>
                        <i class="fa-solid fa-arrow-right"></i>
                    </div>
        </div> 

       
    </div>




  `;
  root.appendChild(homeContent);

  renderFooter(root);
}
