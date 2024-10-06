export function renderDriverCard(driverList) {
    // Tạo một phần tử div để chứa driver card
    const driverCard = document.createElement('div');
    driverCard.className = 'driver-card'; // Gán class cho driver card
    // Thêm nội dung cho driver card
    driverCard.innerHTML = `
        <div class="part1">
            <div class="rank">1</div>
            <div class="points-wrapper">
                <span class="score">331</span>
                <span class="pts">PTS</span>
            </div>
        </div>
        <hr class="divider">
        <div class="part2">
            <div class="name">
                <h2>MAX</h2>
                <h2>VERSTAPPEN</h2>
            </div>
            <img class="flag" src="image/flag.gif" alt="Cờ Hà Lan">
        </div>
        <hr class="divider">
        <div class="part3">
            <div class="team-info">
                <p class="team-name">Red Bull Racing</p>
                <p class="driver-number">1</p>
            </div>
            <div class="driver-image">
                <img src="image/max.avif" alt="Max Verstappen">
            </div>
        </div>
    `;

    // Gắn driver card vào root
    driverList.appendChild(driverCard);

    // Thêm sự kiện click cho driver card
    driverCard.addEventListener('click', function () {
        alert('Driver card clicked!');
    });
}
