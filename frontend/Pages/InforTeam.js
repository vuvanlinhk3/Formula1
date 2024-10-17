import { renderHeader } from '../components/Header.js';
import { renderFooter } from '../components/Footer.js';
import { renderNavBar } from '../components/NavBar.js';
import {renderInfoDriversPageScript} from "../Scripts.js"
// Hàm để lấy dữ liệu từ API
async function fetchTeamInfo(teamID) {
    try {
        // Gọi API để lấy thông tin đội đua
        const response = await fetch(`http://localhost:3000/teams/${teamID}`);

        if (!response.ok) {
            throw new Error('Không thể lấy thông tin đội đua');
        }
        const data = await response.json();
        return data.team; // Trả về dữ liệu đội đua từ backend
    } catch (error) {
        console.error('Lỗi khi lấy dữ liệu đội đua:', error);
        return null; // Trả về null nếu có lỗi
    }
}

export async function renderInfoTeamsPage(root, teamID) {
    // Gọi các hàm để render header và navbar
    renderHeader(root);
    renderNavBar(root);

    // Lấy thông tin đội đua từ API thông qua hàm fetchTeamInfo
    const team = await fetchTeamInfo(teamID);

    if (!team) {
        // Hiển thị thông báo nếu không tìm thấy đội
        root.innerHTML = '<p>Không tìm thấy đội đua.</p>';
        return;
    }

    // Kiểm tra và gán các giá trị mặc định nếu dữ liệu bị thiếu
    const teamPic = team.TeamPic || 'default-team-pic.jpg';
    const teamBase = team.Base || 'Không có thông tin về nơi đóng quân.';
    const teamChief = team.TeamChief || 'Không có thông tin về trưởng đội.';
    const teamFounderYear = team.FounderYear || 'Không có thông tin về năm thành lập.';
    const teamWorldChampionship = team.WorldChampionship || 'Không có thông tin về vô địch thế giới.';
    const teamBio = team.Biography || 'Chưa có thông tin về tiểu sử.';

    // Tạo nội dung để hiển thị thông tin đội
    const aboutContent = document.createElement('div');
    aboutContent.innerHTML = `
        <div class="team-info-container">
            <div class="team-info-left">
                <div class="team-details passion-one-regular">
                    <p class="passion-one-regular"><strong>Full Team Name:</strong> ${team.TeamName}</p>
                    <p class="passion-one-regular"><strong>Base:</strong> ${teamBase}</p>
                    <p class="passion-one-regular"><strong>Team Chief:</strong> ${teamChief}</p>
                    <p class="passion-one-regular"><strong>First Team Entry:</strong> ${teamFounderYear}</p>
                    <p class="passion-one-regular"><strong>World Championships:</strong> ${teamWorldChampionship}</p>


                </div>
            </div>
            <div class="team-info-right drivers-container">
            ${team.Drivers.map(driver => `
                <div class="driver-card" data-driver-id="${driver.DriverID}">
                    <img src="${driver.DriverPic}" alt="${driver.DriverName}" class="driver-img">
                    <div class="driver-info">
                        <h2>${driver.DriverName}</h2>
                        <p>${team.TeamName}</p>
                    </div>
                </div>
            `).join('')}
            </div>
        </div>
        <div class="biography-container">
            <hr class="biography-separator"/>
            <div class="biography-title">
                <p>Tiểu sử</p>
            </div>
            <div class="biography-content">
                <p>${teamBio || "Không có bio"}</p>
            </div>
        </div>
    `;
    // Thêm nội dung vào root
    root.appendChild(aboutContent);
    
    // Thêm sự kiện click cho toàn bộ phần tử chứa driver-card
    const driversContainer = aboutContent.querySelector('.drivers-container');
    driversContainer.addEventListener('click', (event) => {
        const driverCard = event.target.closest('.driver-card');
        if (driverCard) {
            const driverID = driverCard.getAttribute('data-driver-id');
            renderInfoDriversPageScript(driverID);
        }
    });
    // Gọi hàm để render footer
    renderFooter(root);
}
