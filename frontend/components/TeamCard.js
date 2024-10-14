async function fetchTeamData() {
  try {
      const response = await fetch('http://localhost:3000/team'); // Đường dẫn tới API để lấy dữ liệu
      if (!response.ok) {
          throw new Error('Mạng lỗi khi lấy dữ liệu');
      }
      const data = await response.json(); // Chuyển đổi phản hồi thành JSON
      return data.teams; // Trả về mảng các team
  } catch (error) {
      console.error('Lỗi: ', error);
      return []; // Trả về mảng rỗng nếu có lỗi
  }
}

export function TeamCard(root) {
  const teamContainer = document.createElement('div');
  teamContainer.classList.add('teams-container'); // Thêm class để tạo style cho team container

  async function renderTeamPage() {
      try {
          const teamData = await fetchTeamData(); // Lấy dữ liệu từ API
          console.log("Dữ liệu đội đua:", teamData);
          
          // Kiểm tra xem teamData có phải là một mảng không
          if (Array.isArray(teamData) && teamData.length > 0) {
              // Xóa sạch dữ liệu hiện tại trước khi render mới
              teamContainer.innerHTML = '';

              teamData.forEach(team => {
                  const teamCard = document.createElement('div');
                  teamCard.classList.add('team-card');

                  // Tạo HTML cho từng thẻ team
                  teamCard.innerHTML = `
                      <!-- Hàng 1: ID của đội -->
                      <div class="team-id-score">
                          <span class="team-id">ID: ${team.TeamID}</span>
                      </div>

                      <!-- Hàng 2: Tên đội và logo -->
                      <div class="team-name-logo">
                          <span class="team-name">${team.TeamName}</span>
                          <img src="${team.TeamPic || '/default-logo.png'}" alt="Team Logo" class="team-logo" />
                      </div>

                      <!-- Hàng 3: Tên các thành viên -->
                      <div class="team-members">
                          ${team.Members.map(member => `<span class="member-name">${member}</span>`).join('')}
                      </div>
                       <!-- Hàng 4: Hình ảnh xe của team -->
                        <div class="team-car">
                            <img src="${team.TeamPic ||"/frontend/imgs/McLaren.png"}" alt="Team Car" class="team-car-image" />
                        </div>
                        
                  `;

                  // Thêm thẻ team vào container
                  teamContainer.appendChild(teamCard);
              });
          } else {
              teamContainer.innerHTML = '<p>Không có dữ liệu đội đua.</p>';
          }
      } catch (error) {
          console.error('Lỗi khi render trang team:', error);
          teamContainer.innerHTML = '<p>Đã xảy ra lỗi khi tải dữ liệu.</p>';
      }
  }

  // Gọi hàm renderTeamPage
  renderTeamPage();

  // Thêm teamContainer vào root
  root.appendChild(teamContainer);
}
