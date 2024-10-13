export function renderHeader(root) {
    const header = document.createElement('header');
    header.innerHTML = `
      <Header class= "headermain">
        <div class="headerCSS">
          <a href="https://www.fia.com/" target="_blank">
            <img class="logoFia" src="imgs/fia_logo.png" alt="FIA Logo"/>
          </a>
          <div class="header-buttons">
            <div class= "logomain">
              <a href="#" target="_blank">
                <img class="logof1" src="/frontend/imgs/f1-tv-logo.png" alt="FIA Logo"/>
              </a>
            </div>
            <button class="signInBtn" onclick="window.location.href='https://account.formula1.com/#/en/login?redirect=https%3A%2F%2Fwww.formula1.com%2F&lead_source=web_f1core'">
              Sign In
            </button>
            <button class="subscribeBtn" onclick="window.location.href='https://www.formula1.com/en/register-for-free-now.html#en'">
              Subscribe
            </button>
          </div>
        </div>
      </Header>
    `;
    root.appendChild(header);
  
    // // Sự kiện điều hướng qua các link trong header
    // document.getElementById('navHome').addEventListener('click', function () {
    //   navigateTo('home');
    // });
    // document.getElementById('navAbout').addEventListener('click', function () {
    //   navigateTo('about');
    // });
  }
  