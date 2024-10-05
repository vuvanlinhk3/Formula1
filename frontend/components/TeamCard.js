export function TeamCard(root) {
    const teamcard = document.createElement('TeamCard');
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
      <span class="team-name">Mercedes-AMG Petronas</span>
      <img src="team-logo-url.jpg" alt="Team Logo" class="team-logo" />
    </div>

    <!-- Hàng 3: Tên của 2 thành viên -->
    <div class="team-members">
      <span class="member-name">Lewis Hamilton</span>
      <span class="member-name">George Russell</span>
    </div>

    <!-- Hàng 4: Hình ảnh xe của team -->
    <div class="team-car">
      <img src="team-car-url.jpg" alt="Team Car" class="team-car-image" />
    </div>
  </div>

  <!-- Add more team cards as needed -->
</div>

    `;
    root.appendChild(teamcard);
}
