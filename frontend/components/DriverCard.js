
export function renderDriverCard(root) {
    // Tạo một phần tử div để chứa driver card
    const driverCard = document.createElement('div');
    driverCard.className = 'driver-card'; // Gán class cho driver card
        // Tạo một thẻ <style> và thêm nó vào <head>
    const style = document.createElement('style');
    style.innerHTML = `


.driver-card {
    background-color: white;
    border-top: 2px solid black; 
    border-right: 2px solid black;/* Viền đen */
    border-radius: 8px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    width: 350px;
    transition: background-color 0.3s;
    margin: 20px auto; /* Căn giữa theo chiều ngang và thêm khoảng cách 20px trên và dưới */
    padding: 20px 10px 0 0;
}

.driver-card:hover {
    border-color: rgb(193, 19, 48); /* Đổi màu khi hover */
    transform: translateY(-10px); /* Nổi lên 10px */
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2); /* Tăng độ mờ của bóng */
    cursor: pointer;
}

.part1 {
    height: 30px;
    display: flex; /* Bố cục ngang (2 cột) */
    justify-content: space-between;
    padding: 2px 2px 5px 0px ;
    border-left: 0px;
    font-family:Georgia, 'Times New Roman', Times, serif ;
    box-sizing: unset;
}
.part2 {
    height: 50px;
    border-left: #2853b1 5px solid ;
    padding: 1px;
}

.rank {
    font-size: 70px;
    color: rgb(15, 15, 15);
    font-weight: bold;
    display: flex;
    align-items: center; /* Căn giữa theo chiều dọc */
    margin-left: 0px;
}

.points-wrapper {
    display: flex;
    flex-direction: column; /* Bố cục dọc (2 hàng) */
    justify-content: center;
    align-items: flex-end; /* Căn phải */
}

.score {
    font-size: 24px;
    font-weight: bold;
    color:black;
}

.pts {
    background-color: black;
    border-radius: 5px;
    color: white;
    padding: 2px 5px;
    display: inline-block;
    font-size: 12px;
    font-weight: bold;
    text-align: center;
    margin-top: 5px;
}

.divider {
    border: 1px solid #ceadad;
    margin: 10px 5px;
}

.divider1 {
    border: 1px solid #ceadad;
    margin: 10px 5px 0 5px;
}
.part2 {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.name h2 {
    margin: 0 3px;
    font-size: 25px ;
    color:black;
}

.flag {
    width: 40px; /* Kích thước cờ */
    height: auto;
    border: 1px solid black;
    border-radius: 7px;
}

.part3 {
    display: flex;
    justify-content: space-between;
    margin-top: 0px;
}
.team-info {
    display: flex;
    flex-direction: column;
    position: absolute;
    height: 300px;
    justify-content: space-between;
    margin-left: 0px;
    margin-top: -10px;
}

.team-name {
    border-left: 0px;
    padding: 0;
    font-size: 15px;
    color: #1a1616;
    margin: 1.5rem .5rem;
}

.driver-number {
    width: max-content;
    padding: 50px 20px 0 0;
    margin-bottom: -25px;
    margin-left: -10px;
    font-style: oblique;
    font-weight: bold;
    font-size: 90px;
    color: #d81010;
    font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
}

.driver-image{
    display: flex;
    justify-content: end;
    width: 350px;
   
}

.driver-image img {
    width: 300px; /* Kích thước ảnh người lái */
    height: auto; /* Giữ tỉ lệ ảnh */
}

    `;
    document.head.appendChild(style);

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
            <img class="flag" src="image/flag.gif" alt="Netherlands Flag">
        </div>
        <hr class="divider1">
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
    root.appendChild(driverCard);

    // Thêm sự kiện click cho driver card
    driverCard.addEventListener('click', function () {
        alert('Driver card clicked!');
    });
}
