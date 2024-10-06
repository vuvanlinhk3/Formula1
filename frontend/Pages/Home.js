import { renderHeader } from '../components/Header.js';
import { renderFooter } from '../components/Footer.js';
import { renderNavBar } from '../components/NavBar.js';

async function fetchHomeData() {
    try {
        const response = await fetch('http://localhost:3000/home');
        if (!response.ok) {
            throw new Error('Mạng lỗi khi lấy dữ liệu');
        }
        const data = await response.json(); // Chuyển đổi phản hồi thành JSON
        return data; // Trả về dữ liệu
    } catch (error) {
        console.error('Lỗi: ', error);
        return []; // Trả về mảng rỗng nếu có lỗi
    }
}


export async function renderHomePage(root) {
    renderHeader(root);
    renderNavBar(root);
  
    const homeContent = document.createElement('div');
    homeContent.innerHTML = `
      <div class="cangiua">
          <div class="border-big">
              <div class="ticket-section passion-one-regular">
                  <div class="ticket-bg">
                      <img src="/frontend/imgs/ofc20j9r.png" alt="Formula 1 cars racing" class="ticket-img" />
                  </div>
                  <div class="ticket-content">
                      <h2>WELCOME TO F1</h2>
                      <p>Don't miss your chance to experience the amazing Circuit of The Americas...</p>
                      <a href="#schedule" class="ticket-btn">VIEW SCHEDULE NOW</a>
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
  
      <!-- Standing driver -->
      <div class="driver-standings passion-one-regular">
          <div class="back-standing">
              <span>Driver Standings</span>
          </div>
          <div class="standing-container">
              <div class="top-standing">
                  <!-- Thêm top-driver ở đây -->
              </div>
          </div>
      </div>
  
      <!-- Danh sách driver -->
      <div class="top-list-container passion-one-regular">
          <div class="top-list">
              <!-- Thêm itemDiv ở đây -->
          </div>
          <div class="btn">
              <span class="passion-one-regular">VIEW FULL STANDING</span>
              <i class="fa-solid fa-arrow-right"></i>
          </div>
      </div>
    `;
    
    async function renderHomePage() {
        try {
            const homeData = await fetchHomeData(); // Lấy dữ liệu từ API
            const topList = homeContent.querySelector('.top-list'); // Lấy thẻ <div class="top-list"> từ homeContent
            const topDriver = homeContent.querySelector(".top-standing");
            // Kiểm tra xem homeData có phải là một mảng hay không
            if (Array.isArray(homeData.top3Drivers)) {
                homeData.top3Drivers.forEach(item => {
                    const item1 = document.createElement('div');
                    item1.className = 'top-driver';
                    item1.innerHTML = `
                        <div class="T-driver">
                            <img class="home_driver-img" src="${item.driverImage}" alt="Driver">
                        </div>
                        <div class="infor-diver">
                            <img src="${item.flagImage}" alt="quocky">
                            <div class="name-driver">
                                <p>${item.name}</p>
                            </div>
                        </div>
                        <div class="number-driver passion-one-black">${item.position}</div>
                    `;
                    topDriver.appendChild(item1); // Thêm itemDiv vào topList
                });
            } 
            if (Array.isArray(homeData.topDrivers)) {
                homeData.topDrivers.forEach(item => {
                    const itemDiv = document.createElement('div');
                    itemDiv.className = 'top-item';
                    itemDiv.innerHTML = `
                        <div class="left-item">
                            <div>${item.position}</div> <!-- Vị trí -->
                            <div>${item.name}</div>    <!-- Tên tay đua -->
                            <div>${item.team}</div>    <!-- Đội tay đua -->
                        </div>
                        <div class="right-item">
                            <div class="pts">
                                <span>${item.points}</span> <!-- Điểm -->
                                <span>PTF</span>
                            </div>
                            <div class="row-right">
                                <i class="fa-solid fa-arrow-right"></i>
                            </div>
                        </div>
                    `;
                    topList.appendChild(itemDiv); // Thêm itemDiv vào topList
                });
            }
            else {
                console.error('Dữ liệu từ API không phải là mảng:', homeData);
                // Bạn có thể hiển thị thông báo lỗi cho người dùng
                topList.innerHTML = '<p>Không có dữ liệu để hiển thị.</p>';
            }



        } catch (error) {
            console.error('Lỗi khi render trang home:', error);
            // Hiển thị thông báo lỗi khi có sự cố
            topList.innerHTML = '<p>Đã xảy ra lỗi khi tải dữ liệu.</p>';
        }
    }
    
    // Gọi hàm renderHomePage
    renderHomePage();
    
    
  
    root.appendChild(homeContent);
    renderFooter(root);
  }
  