export function renderSignIn(root) {
    // Tạo một phần tử div để chứa nút Sign In
    const signInButton = document.createElement('div');

    // Thêm nút Sign In vào phần tử
    signInButton.innerHTML = `
      <button class="signin">
            <i class="fa-solid fa-user icon"></i> Sign In
        </button>
    `;

    // Gắn button vào root
    root.appendChild(signInButton);

    // Thêm sự kiện cho nút Sign In
    signInButton.querySelector('.signin').addEventListener('click', function () {
        console.log('Sign In button clicked');
        // Thực hiện hành động khi nút Sign In được nhấn
    });
}
