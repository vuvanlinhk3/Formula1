// Hàm lấy dữ liệu từ API backend
async function fetchDriverData() {
    try {
        const response = await fetch('http://localhost:3000/driver'); // Gọi API backend
        if (!response.ok) {
            throw new Error('Mạng lỗi khi lấy dữ liệu');
        }
        const data = await response.json(); // Chuyển đổi phản hồi thành JSON
        return data.drivers; // Trả về danh sách tay đua
    } catch (error) {
        console.error('Lỗi: ', error);
        return []; // Trả về mảng rỗng nếu có lỗi
    }
}

// Hàm render từng driver card
function renderDriverCard(driver, driverList) {
    // Tạo một phần tử div để chứa driver card
    const driverCard = document.createElement('div');
    driverCard.className = 'driver-card'; // Gán class cho driver card

    // Thêm nội dung cho driver card từ dữ liệu backend
    driverCard.innerHTML = `
        <div class="part1">
            <div class="rank">${driver.DriverID}</div>
            <div class="points-wrapper">
                <span class="score">${driver.Points}</span>
                <span class="pts">PTS</span>
            </div>
        </div>
        <hr class="divider">
        <div class="part2">
            <div class="name">
                <h2>${driver.DriverName.split(' ')[0].toUpperCase()}</h2>
                <h2>${driver.DriverName.split(' ')[1].toUpperCase()}</h2>
            </div>
            <img class="flag" src="${driver.FlagPic}" alt="Cờ của ${driver.DriverName}">
        </div>
        <hr class="divider">
        <div class="part3">
            <div class="team-info">
                <p class="team-name">${driver.TeamName}</p>
                <p class="driver-number">${driver.DriverNumber}</p>
            </div>
            <div class="driver-image">
                <img src="${driver.DriverPicTwo}" alt="${driver.DriverName}">
            </div>
        </div>
    `;

    // Gắn driver card vào root (driverList)
    driverList.appendChild(driverCard);

    // Thêm sự kiện click cho driver card
    driverCard.addEventListener('click', function () {
        alert(`You clicked on ${driver.DriverName}!`);
    });
}

// Hàm để gọi API và hiển thị danh sách tay đua
export async function renderDriverCards() { // Xuất hàm renderDriverCards
    const driverList = document.querySelector('.driver_list'); 

    const drivers = await fetchDriverData(); // Lấy dữ liệu từ backend

    if (drivers.length === 0) {
        driverList.innerHTML = '<p>Không có dữ liệu tay đua.</p>';
        return;
    }

    // Duyệt qua danh sách tay đua và render từng driver card
    drivers.forEach((driver) => {
        renderDriverCard(driver, driverList); // Render từng driver card
    });
}

// Gọi hàm để hiển thị danh sách tay đua khi tải trang
document.addEventListener('DOMContentLoaded', renderDriverCards);
