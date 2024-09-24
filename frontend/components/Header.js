export function renderHeader(root) {
    const header = document.createElement('header');
    header.innerHTML = `
      <div class="headerCSS">
        <a href="https://www.fia.com/" target="_blank">
          <img class="logoFia" src="imgs/fia_logo.png" alt="FIA Logo"/>
        </a>
        <div class="header-buttons">
          <button class="signInBtn">
            Sign In
          </button>
          <button class="subscribeBtn">
            Subscribe
          </button>
        </div>
      </div>
    `;
    root.appendChild(header);
  
    // Sự kiện điều hướng qua các link trong header
    document.getElementById('navHome').addEventListener('click', function () {
      navigateTo('home');
    });
    document.getElementById('navAbout').addEventListener('click', function () {
      navigateTo('about');
    });
  }
  