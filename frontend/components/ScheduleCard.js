export function ScheduleCard(root) {
  const scheduleCard = document.createElement('div');
  scheduleCard.innerHTML = `
    <div class="schedule-card">
    <div class="schedule-header">
      <div class="round-info">
        <p>ROUND 1</p>
        <p>29-02</p>
      </div>
      <div class="date-flag">
        <p>FEB-MAR</p>
        <img src="imgs/flag-asset.e71627cf.png" alt="Flag">
      </div>
    </div>
    
    <div class="race-location">
      <h3>Bahrain</h3>
      <p>FORMULA 1 GULF AIR BAHRAIN GRAND PRIX 2024</p>
    </div>
    
    <div class="drivers">
      <div class="driver">
        <img src="imgs/1stracer.avif" alt="PER">
        <p>PER</p>
      </div>
      <div class="driver">
        <img src="imgs/middleracer.avif" alt="VER" class="middleRacerImg">
        <p>VER</p>
      </div>
      <div class="driver">
        <img src="imgs/3rdracer.avif" alt="SAI">
        <p>SAI</p>
      </div>
    </div>
  </div>  
  `;
  root.appendChild(scheduleCard);
}