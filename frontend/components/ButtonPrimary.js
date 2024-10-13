export function renderSignUp(root) {
    // Tạo một phần tử div để chứa nút Sign Up
    const signUpButton = document.createElement('div');

    // Thêm nút Sign Up vào phần tử
    signUpButton.innerHTML = `
        <button class="signup">
            <i class="fa-solid fa-user-plus icon"></i> Sign Up
        </button>
    `;

    // Gắn button vào root
    root.appendChild(signUpButton);

    // Thêm sự kiện cho nút Sign Up
    signUpButton.querySelector('.signup').addEventListener('click', function () {
        console.log('Sign Up button clicked');
        // Thực hiện hành động khi nút Sign Up được nhấn
    });
}
