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
    renderNavBar(root)
  
    const homeContent = document.createElement('div');
    homeContent.className = 'app_container_home';
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
            <!-- ĐÂY LÀ LỊCH TRÌNH-->
            
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
            const schedulesContainer = homeContent.querySelector('.container'); // Lấy thẻ chứa lịch trình
            // Bổ sung thêm dữ liệu lịch trình vào phần lịch trình
            if (Array.isArray(homeData.schedules) && homeData.schedules.length > 0) {
                const today = new Date(); // Lấy ngày hôm nay
                let closestSchedule = null; // Khởi tạo biến lưu lịch trình gần nhất

                // Tìm lịch trình gần nhất trong tương lai
                homeData.schedules.forEach(schedule => {
                    const scheduleDate = new Date(schedule.Date); // Chuyển đổi ngày thành đối tượng Date
                    if (scheduleDate > today) {
                        if (!closestSchedule || scheduleDate < new Date(closestSchedule.Date)) {
                            closestSchedule = schedule; // Cập nhật lịch trình gần nhất
                        }
                    }
                });

                // Hiển thị lịch trình gần nhất
                // Thêm dữ liệu về múi giờ theo địa điểm
                const locationTimeZones = {
                    'austin': 'America/Chicago',
                    'tokyo': 'Asia/Tokyo',
                    'paris': 'Europe/Paris',
                    'melbourne': 'Australia/Melbourne',
                    // Thêm các địa điểm khác theo tên và múi giờ tương ứng
                };

                if (closestSchedule) {
                    const highlightItem = document.createElement('div');
                    highlightItem.className = 'event-card highlight'; // Thêm class highlight
                    const highlightDate = new Date(closestSchedule.Date);
                    const day = highlightDate.getDate(); // Lấy ngày
                    const month = highlightDate.toLocaleString('default', { month: 'short' }).toUpperCase(); // Lấy tháng viết tắt và chuyển thành chữ hoa

                    // Lấy múi giờ dựa theo tên địa điểm tổ chức
                    const eventTimeZone = locationTimeZones[closestSchedule.Location] || 'UTC'; // Lấy múi giờ, mặc định là UTC nếu không tìm thấy

                    highlightItem.innerHTML = `
                        <img src="${closestSchedule.FlagRacePic}" alt="${closestSchedule.RaceName}" class="flag">
                        <h2>${closestSchedule.RaceNameNational} ${closestSchedule.RaceName}</h2>
                        <div class="date-highlight date">${day} ${month} - ${highlightDate.getDate()} ${month} ${highlightDate.getFullYear()}</div>
                        <button class="view-schedule passion-one-regular">VIEW SCHEDULE</button>
                        <div class="time-info">
                            <div class="outtime">${closestSchedule.Location} <span id="event-time"></span></div> <!-- Hiển thị giờ địa điểm tổ chức -->
                            <div>Your time <span id="user-time"></span></div> <!-- Hiển thị giờ theo múi giờ của người dùng -->
                        </div>
                    `;
                    schedulesContainer.appendChild(highlightItem); // Thêm lịch trình gần nhất vào phần hiển thị

                    // Hàm cập nhật giờ liên tục
                    function updateTimes() {
                        const now = new Date(); // Lấy thời gian hiện tại

                        // Lấy giờ theo múi giờ của người dùng
                        const userTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
                        const userTime = now.toLocaleString('en-US', { timeZone: userTimeZone, hour: '2-digit', minute: '2-digit' });

                        // Lấy giờ theo múi giờ của địa điểm tổ chức
                        const eventTime = now.toLocaleString('en-US', { timeZone: eventTimeZone, hour: '2-digit', minute: '2-digit' });

                        // Cập nhật nội dung HTML
                        document.getElementById('event-time').textContent = eventTime;
                        document.getElementById('user-time').textContent = userTime;
                    }

                    // Gọi hàm cập nhật giờ mỗi giây
                    updateTimes(); // Cập nhật ngay khi load
                    setInterval(updateTimes, 1000); // Cập nhật mỗi giây
                }



                

                // Hiển thị các lịch trình còn lại
                homeData.schedules.forEach(schedule => {
                    const scheduleDate = new Date(schedule.Date); // Chuyển đổi ngày thành đối tượng Date
                    const day = scheduleDate.getDate(); // Lấy ngày
                    const month = scheduleDate.toLocaleString('default', { month: 'short' }).toUpperCase(); // Lấy tháng viết tắt và chuyển thành chữ hoa

                    // Nếu lịch trình không phải là lịch trình gần nhất thì hiển thị bình thường
                    if (schedule !== closestSchedule) {
                        const scheduleItem = document.createElement('div');
                        scheduleItem.className = 'event-card'; // Thêm class để có thể định dạng
                        
                        scheduleItem.innerHTML = `
                            <img src="${schedule.FlagRacePic}" alt="${schedule.RaceName}" class="flag">
                            <div class="date">${day}</div>
                            <div class="month">${month}</div>
                        `;
                        schedulesContainer.appendChild(scheduleItem); // Thêm lịch trình vào phần hiển thị
                    }
                });
            } else {
                console.error('Không có dữ liệu lịch trình:', homeData);
                schedulesContainer.innerHTML = '<p>Không có lịch trình để hiển thị.</p>'; // Thông báo nếu không có dữ liệu
            }





            

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
            } else {
                console.error('Dữ liệu từ API không phải là mảng:', homeData);
                // Bạn có thể hiển thị thông báo lỗi cho người dùng
                topList.innerHTML = '<p>Không có dữ liệu để hiển thị.</p>';
            }
    
            
    
            // Thêm schedulesContainer vào homeContent
            homeContent.appendChild(schedulesContainer);
    
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
  