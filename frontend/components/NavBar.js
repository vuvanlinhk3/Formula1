export function renderNavBar(root) {
    const navbar = document.createElement('Navbar');
    navbar.innerHTML = `
        <nav class="navbar">
            <div class = "navmain">
                <div class="logo">
                    <img src="/frontend/Assets/logo/f1_logo.png" alt="Logo">
                </div>
                <div class="nav-items">
                    <ul>
                        <li><a href="#schedule">Schedule</a></li>
                        <li><a href="#result">Result</a></li>
                        <li><a href="#teams">Teams</a></li>
                        <li><a href="#drivers">Drivers</a></li>
                        <li><a href="#standing">Standing</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    `;
    root.appendChild(navbar);
}
