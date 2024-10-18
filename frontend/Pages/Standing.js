import { renderHeader } from '../components/Header.js';
import { renderFooter } from '../components/Footer.js';
import { renderNavBar } from '../components/NavBar.js';

// Hàm để lấy dữ liệu standings từ API
async function fetchStandingsData() {
    try {
        const response = await fetch('http://localhost:3000/standings'); // Đường dẫn tới API để lấy dữ liệu standings
        if (!response.ok) {
            throw new Error('Mạng lỗi khi lấy dữ liệu');
        }
        const data = await response.json(); // Chuyển đổi phản hồi thành JSON
        return data.standings; // Trả về mảng standings
    } catch (error) {
        console.error('Lỗi: ', error);
        return []; // Trả về mảng rỗng nếu có lỗi
    }
}

export function renderStandingPage(root) {
    renderHeader(root);
    renderNavBar(root);
    
    const standingContent = document.createElement('div');
    standingContent.className = 'standing-body';
    standingContent.innerHTML = `
        <div class="standing-page-container">
            <div class="title">
                <h1>2024 Driver Standing</h1>
            </div>
            <table class="driver-standing">
                <thead>
                    <tr>
                        <th>Position</th>
                        <th>Driver</th>
                        <th>Nationality</th>
                        <th>Team</th>
                        <th>Points</th>
                    </tr>
                </thead>
                <tbody id="standing-table-body">
                    <tr>
                        <td colspan="5">Loading data...</td> <!-- Hiển thị khi đang tải dữ liệu -->
                    </tr>
                </tbody>
            </table>  
        </div>
    `;
    
    root.appendChild(standingContent);
    renderFooter(root);
    
    // Hàm để render dữ liệu standings từ API vào bảng
    async function renderStandings() {
        try {
            const standingsData = await fetchStandingsData(); // Lấy dữ liệu từ API
            const tableBody = document.getElementById('standing-table-body');
            
            // Xóa nội dung cũ trước khi render mới
            tableBody.innerHTML = '';
            
            if (Array.isArray(standingsData) && standingsData.length > 0) {
                // Lặp qua dữ liệu standings và render ra bảng
                standingsData.forEach(driver => {
                    const row = document.createElement('tr');
                    row.innerHTML = `
                        <td>${driver.Position}</td>
                        <td>${driver.DriverName}</td>
                        <td>${driver.Nationality}</td>
                        <td>${driver.TeamName}</td>
                        <td>${driver.Points}</td>
                    `;
                    tableBody.appendChild(row);
                });
            } else {
                tableBody.innerHTML = '<tr><td colspan="5">Không có dữ liệu.</td></tr>';
            }
        } catch (error) {
            console.error('Lỗi khi render standings:', error);
            const tableBody = document.getElementById('standing-table-body');
            tableBody.innerHTML = '<tr><td colspan="5">Đã xảy ra lỗi khi tải dữ liệu.</td></tr>';
        }
    }

    // Gọi hàm để render standings sau khi trang được tải
    renderStandings();
}
