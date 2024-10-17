async function fetchScheduleData() {
  try {
    const response = await fetch('http://localhost:3000/schedule'); // Đường dẫn tới API để lấy dữ liệu lịch trình
    if (!response.ok) {
      throw new Error('Mạng lỗi khi lấy dữ liệu');
    }
    const data = await response.json(); // Chuyển đổi phản hồi thành JSON
    return { racesCompleted: data.racesCompleted, racesUpcoming: data.racesUpcoming }; // Trả về mảng các trận đấu đã diễn ra và chưa diễn ra
  } catch (error) {
    console.error('Lỗi: ', error);
    return { racesCompleted: [], racesUpcoming: [] }; // Trả về mảng rỗng nếu có lỗi
  }
}

export function ScheduleCard(root) {
  const scheduleContainer = document.createElement('div');
  scheduleContainer.classList.add('schedule-container'); // Thêm class để tạo style cho container

  async function renderSchedulePage() {
    try {
      const { racesCompleted, racesUpcoming } = await fetchScheduleData(); // Lấy dữ liệu từ API
      console.log('Dữ liệu lịch trình:', { racesCompleted, racesUpcoming });

      // Xóa sạch dữ liệu hiện tại trước khi render mới
      scheduleContainer.innerHTML = '';

      // Phần hiển thị lịch trình chưa diễn ra
      if (Array.isArray(racesUpcoming) && racesUpcoming.length > 0) {
        const upcomingSection = document.createElement('div');
        upcomingSection.classList.add('upcoming-section');

        racesUpcoming.forEach(schedule => {
          const scheduleCard = document.createElement('div');
          scheduleCard.classList.add('schedule-card');

          // Tạo HTML cho từng thẻ lịch trình
          scheduleCard.innerHTML = `
            <div class="schedule-header">
              <div class="round-info">
                  <p>ROUND ${schedule.RaceID}</p>
                  <p>${new Date(schedule.Date).toLocaleDateString('en', { month: 'short' })}</p>
                  <p>${new Date(schedule.Date).toLocaleDateString('en-GB')}</p> <!-- Ngày tháng năm theo định dạng dd/mm/yyyy -->
              </div>
              <div class="date-flag">
                <img src="${schedule.FlagRacePic || 'imgs/flag-asset.e71627cf.png'}" alt="Flag">
              </div>
            </div>
            
            <div class="race-location">
              <h3>${schedule.Location}</h3>
              <p>${schedule.RaceName}</p>
            </div>
            
            <div class="map-image">
              <img src="${schedule.RaceTrackPic}" alt="${schedule.RaceName} Map"> <!-- Thay thế bằng đường dẫn thực tế đến ảnh bản đồ -->
            </div>
          `;

          // Thêm thẻ lịch trình vào container
          upcomingSection.appendChild(scheduleCard);
        });

        scheduleContainer.appendChild(upcomingSection);
      } else {
        scheduleContainer.innerHTML += '<p>Không có lịch trình chưa diễn ra.</p>';
      }

      // Thêm đường ngăn cách
      scheduleContainer.innerHTML += '<hr>';

      // Phần hiển thị lịch trình đã diễn ra
      if (Array.isArray(racesCompleted) && racesCompleted.length > 0) {
        const completedSection = document.createElement('div');
        completedSection.classList.add('completed-section');

        racesCompleted.forEach(schedule => {
          const scheduleCard = document.createElement('div');
          scheduleCard.classList.add('schedule-card');

          // Tạo HTML cho từng thẻ lịch trình
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
            
            <div class="map-image">
              <img src="${schedule.RaceTrackPic}" alt="${schedule.RaceName} Map"> <!-- Thay thế bằng đường dẫn thực tế đến ảnh bản đồ -->
            </div>
          `;

          // Thêm thẻ lịch trình vào container
          completedSection.appendChild(scheduleCard);
        });

        scheduleContainer.appendChild(completedSection);
      } else {
        scheduleContainer.innerHTML += '<p>Không có lịch trình đã diễn ra.</p>';
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
