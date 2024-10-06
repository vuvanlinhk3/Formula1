export function TeamCard(root) {
    const teamcard = document.createElement('div');
    teamcard.innerHTML = `
        <div class="teams-container">
          <div class="team-card">
            <!-- Hàng 1: ID của đội và tổng điểm -->
            <div class="team-id-score">
              <span class="team-id">ID: 01</span>
              <span class="team-score">Total Points: 500</span>
            </div>

            <!-- Hàng 2: Tên đội và logo -->
            <div class="team-name-logo">
              <span class="team-name">McLaren</span>
              <img src="/frontend/imgs/McLaren Logo.png" alt="Team Logo" class="team-logo" />
            </div>

            <!-- Hàng 3: Tên của 2 thành viên -->
            <div class="team-members">
              <span class="member-name">Lewis Hamilton</span>
              <span class="member-name">George Russell</span>
            </div>

            <!-- Hàng 4: Hình ảnh xe của team -->
            <div class="team-car">
              <img src="/frontend/imgs/McLaren.png" alt="Team Car" class="team-car-image" />
            </div>
          </div>

          <!-- Add more team cards as needed -->
        </div>

    `;
    root.appendChild(teamcard);
}
