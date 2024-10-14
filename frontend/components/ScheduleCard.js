async function fetchScheduleData() {
  try {
    const response = await fetch('http://localhost:3000/schedule'); // Đường dẫn tới API để lấy dữ liệu lịch trình
    if (!response.ok) {
      throw new Error('Mạng lỗi khi lấy dữ liệu');
    }
    const data = await response.json(); // Chuyển đổi phản hồi thành JSON
    return data.races; // Trả về mảng các trận đấu
  } catch (error) {
    console.error('Lỗi: ', error);
    return []; // Trả về mảng rỗng nếu có lỗi
  }
}

export function ScheduleCard(root) {
  const scheduleContainer = document.createElement('div');
  scheduleContainer.classList.add('schedule-container'); // Thêm class để tạo style cho container

  async function renderSchedulePage() {
    try {
      const scheduleData = await fetchScheduleData(); // Lấy dữ liệu từ API
      console.log('Dữ liệu lịch trình:', scheduleData);
      
      // Kiểm tra xem scheduleData có phải là một mảng không
      if (Array.isArray(scheduleData) && scheduleData.length > 0) {
        // Xóa sạch dữ liệu hiện tại trước khi render mới
        scheduleContainer.innerHTML = '';

        scheduleData.forEach(schedule => {
          const scheduleCard = document.createElement('div');
          scheduleCard.classList.add('schedule-card');

          // Tạo HTML cho từng thẻ lịch trình, theo format bạn yêu cầu
          scheduleCard.innerHTML = `
            <div class="schedule-header">
              <div class="round-info">
                <p>ROUND ${schedule.RaceID}</p>
                <p>${new Date(schedule.Date).toLocaleDateString('en', { month: 'short' })}</p>
              </div>
              <div class="date-flag">
                <img src="${schedule.FlagRacePic || 'imgs/flag-asset.e71627cf.png'}" alt="Flag">
              </div>
            </div>
            
            <div class="race-location">
              <h3>${schedule.Location}</h3>
                <p>${schedule.RaceName}</p>
            </div>
            
            <div class="drivers">
              <div class="driver">
                <img src="${schedule.TopDrivers[0]?.DriverPic || ''}" alt="${schedule.TopDrivers[0]?.DriverName || 'PER'}">
                <p>${schedule.TopDrivers[0]?.DriverName || 'PER'}</p>
              </div>
              <div class="driver">
                <img src="${schedule.TopDrivers[1]?.DriverPic || ''}" alt="${schedule.TopDrivers[1]?.DriverName || 'VER'}">
                <p>${schedule.TopDrivers[1]?.DriverName || 'VER'}</p>
              </div>
              <div class="driver">
                <img src="${schedule.TopDrivers[2]?.DriverPic || ''}" alt="${schedule.TopDrivers[2]?.DriverName || 'SAI'}">
                <p>${schedule.TopDrivers[2]?.DriverName || 'SAI'}</p>
              </div>
            </div>

          `;

          // Thêm thẻ lịch trình vào container
          scheduleContainer.appendChild(scheduleCard);
        });
      } else {
        scheduleContainer.innerHTML = '<p>Không có dữ liệu lịch trình.</p>';
      }
    } catch (error) {
      console.error('Lỗi khi render trang lịch trình:', error);
      scheduleContainer.innerHTML = '<p>Đã xảy ra lỗi khi tải dữ liệu.</p>';
    }
  }

  // Gọi hàm renderSchedulePage
  renderSchedulePage();

  // Thêm scheduleContainer vào root
  root.appendChild(scheduleContainer);
}
