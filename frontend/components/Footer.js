export function renderFooter(root) {
    const footer = document.createElement('footer');
    footer.innerHTML = `
<footer class="site-footer">
    <div class="footer-container">
        <!-- Logo Section -->
        <div class="footer-logo">
            <a href="">
                <img src="/frontend/FooterImages/f1_logo.png" alt="F1 Logo">
            </a>
        </div>

        <!-- Links Section -->
        <div class="footer-links">
            <ul>
                <li><a href="/about">About</a></li>
                <li><a href="/terms">Terms & Conditions</a></li>
                <li><a href="/privacy">Privacy Policy</a></li>
                <li><a href="/contact">Contact Us</a></li>
            </ul>
        </div>

        <!-- Social Media Section -->
        <div class="footer-social">
            <a href="https://www.facebook.com/Formula1"><img src="/frontend/FooterImages/facebook.png" alt="Facebook"></a>
            <a href="https://www.twitter.com/f1"><img src="/frontend/FooterImages/x.png" alt="Twitter"></a>
            <a href="https://www.instagram.com/f1"><img src="/frontend/FooterImages/instagram.png" alt="Instagram"></a>
            <a href="https://www.youtube.com/f1"><img src="/frontend/FooterImages/youtube.png" alt="YouTube"></a>
        </div>
    </div>
    
    <!-- Copyright -->
    <div class="footer-bottom">
        <p>&copy; 2024 Formula 1. All Rights Reserved.</p>
    </div>
</footer>

    `;
    root.appendChild(footer);
  }