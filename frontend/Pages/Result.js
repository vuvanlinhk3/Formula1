import { renderHeader } from '../components/Header.js';
import { renderFooter } from '../components/Footer.js';
import { renderNavBar } from '../components/NavBar.js';

// Hàm để lấy dữ liệu kết quả từ API
async function fetchResultData() {
    try {
        const response = await fetch(`http://localhost:3000/results`); // Đường dẫn tới API để lấy dữ liệu kết quả
        if (!response.ok) {
            throw new Error('Mạng lỗi khi lấy dữ liệu');
        }
        const data = await response.json(); // Chuyển đổi phản hồi thành JSON
        return data.topResults; // Trả về mảng kết quả
    } catch (error) {
        console.error('Lỗi: ', error);
        return []; // Trả về mảng rỗng nếu có lỗi
    }
}

export function renderResultPage(root) {
    renderHeader(root);
    renderNavBar(root);
    
    const resultContent = document.createElement('div');
    resultContent.innerHTML = `
        <div class="result-container">
            <div class="select">
                <div class="select-track">
                    <label for="track">Select Racetrack:</label>
                    <select id="track" class="select-box" name="track">
                        <option value="all">All</option>
                        <option value="1">Bahrain</option>
                        <option value="2">Saudi Arabia</option>
                        <option value="3">Australia</option>
                        <option value="4">Japan</option>
                        <option value="5">China</option>
                        <option value="6">Miami</option>
                        <option value="7">Emilia-Romagna</option>
                        <option value="8">Monaco</option>
                        <option value="9">Canada</option>
                        <option value="10">Spain</option>
                        <option value="11">Australia</option>
                        <option value="12">Great Britain</option>
                        <option value="13">Hungary</option>
                        <option value="14">Belgium</option>
                        <option value="15">Netherlands</option>
                        <option value="16">Italy</option>
                        <option value="17">Azerbaijan</option>
                        <option value="18">Singapore</option>
                        <option value="19">United States</option>
                        <option value="20">Mexico</option>
                        <option value="21">Brazil</option>
                        <option value="22">Las Vegas</option>
                        <option value="23">Qatar</option>
                        <option value="24">Abu Dhabi</option>
                    </select>
                </div>
            </div>
            <div class="title">
                <h1>2024 Race Result</h1>
            </div>
            <table class="detail-result">
                <thead>
                    <tr>
                        <th>Grand Prix</th>
                        <th>Date</th>
                        <th>Winner</th>
                        <th>Team</th>
                        <th>Laps Completed</th>
                        <th>Time</th>
                    </tr>
                </thead>
                <tbody id="result-table-body">
                    <tr>
                        <td colspan="6">Loading data...</td> <!-- Hiển thị khi đang tải dữ liệu -->
                    </tr>
                </tbody>
            </table>
        </div>
    `;
    
    root.appendChild(resultContent);
    renderFooter(root);

    // Lắng nghe sự kiện change trên select box
    const trackSelect = document.getElementById('track');
    trackSelect.addEventListener('change', (event) => {
        const selectedValue = event.target.value; // Lấy giá trị đã chọn
        //fetchResultData(selectedValue); // Gửi giá trị đến backend
        console.log(selectedValue)
    });

    // Hàm để render dữ liệu kết quả từ API vào bảng
    async function renderResults() {
        try {
            const resultsData = await fetchResultData(); // Lấy dữ liệu từ API
            const tableBody = document.getElementById('result-table-body');
            
            // Xóa nội dung cũ trước khi render mới
            tableBody.innerHTML = '';
            
            if (Array.isArray(resultsData) && resultsData.length > 0) {
                // Lặp qua dữ liệu kết quả và render ra bảng
                resultsData.forEach(result => {
                    const row = document.createElement('tr');
                    row.innerHTML = `
                        <td>${result.RaceName}</td>
                        <td>${new Date(result.Date).toLocaleDateString()}</td>
                        <td>${result.DriverName}</td>
                        <td>${result.TeamName}</td>
                        <td>${result.LapsCompleted}</td>
                        <td>${result.TimeOrRetired}</td>
                    `;
                    tableBody.appendChild(row);
                });
            } else {
                tableBody.innerHTML = '<tr><td colspan="6">Không có dữ liệu.</td></tr>';
            }
        } catch (error) {
            console.error('Lỗi khi render kết quả:', error);
            const tableBody = document.getElementById('result-table-body');
            tableBody.innerHTML = '<tr><td colspan="6">Đã xảy ra lỗi khi tải dữ liệu.</td></tr>';
        }
    }

    // Gọi hàm để render kết quả sau khi trang được tải
    renderResults();
}
