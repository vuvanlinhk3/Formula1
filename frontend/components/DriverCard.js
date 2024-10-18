import { renderInfoDriversPage } from '../Pages/InforDriver.js';

async function fetchDriverData() {
    try {
        const response = await fetch('http://localhost:3000/drivers'); // Đường dẫn tới API để lấy dữ liệu
        if (!response.ok) {
            throw new Error('Mạng lỗi khi lấy dữ liệu');
        }
        const data = await response.json(); // Chuyển đổi phản hồi thành JSON
        return data.drivers; // Trả về mảng các tay đua
    } catch (error) {
        console.error('Lỗi: ', error);
        return []; // Trả về mảng rỗng nếu có lỗi
    }
}

export function DriverCard(root) {
    const driverContainer = document.createElement('div');
    driverContainer.classList.add('drivers-container'); // Thêm class để tạo style cho driver container

    async function renderDriverPage() {
        try {
            const driverData = await fetchDriverData(); // Lấy dữ liệu từ API
            // console.log("Dữ liệu tay đua:", driverData);
            
            // Kiểm tra xem driverData có phải là một mảng không
            if (Array.isArray(driverData) && driverData.length > 0) {
                // Xóa sạch dữ liệu hiện tại trước khi render mới
                driverContainer.innerHTML = '';

                driverData.forEach(driver => {
                    const driverCard = document.createElement('div');
                    driverCard.classList.add('driver-cardss');

                    // Tạo HTML cho từng thẻ tay đua
                    driverCard.innerHTML = `
                        <div class="part1">
                            <div class="rank">${driver.DriverID}</div>
                            <div class="points-wrapper">
                                <span class="score">${driver.TotalPoints}</span>
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

                    // Thêm thẻ driver vào container
                    driverContainer.appendChild(driverCard);
                    driverCard.addEventListener('click', () => {
                        const root = document.getElementById('root');
                        root.innerHTML = '';
                        renderInfoDriversPage(root, driver.DriverID); // Truyền DriverID để lấy chi tiết tay đua
                    });
                });
            } else {
                driverContainer.innerHTML = '<p>Không có dữ liệu tay đua.</p>';
            }
        } catch (error) {
            console.error('Lỗi khi render trang tay đua:', error);
            driverContainer.innerHTML = '<p>Đã xảy ra lỗi khi tải dữ liệu.</p>';
        }
    }

    // Gọi hàm renderDriverPage
    renderDriverPage();

    // Thêm driverContainer vào root
    root.appendChild(driverContainer);
}
