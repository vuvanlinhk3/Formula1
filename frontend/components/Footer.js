export function renderFooter(root) {
    const footer = document.createElement('footer');
    footer.innerHTML = `
      <footer style="background-color: #0019; color: #fff; padding: 20px 0; text-align: center;">
    <div class="footer-container" style="max-width: 1200px; margin: 0 auto; display: flex; flex-wrap: wrap; justify-content: space-between; align-items: center;">
        <!-- Logo Section -->
        <div class="footer-logo" style="flex: 1;">
            <a href="#" style="text-decoration: none; color: #fff;">
                <img src="/frontend/FooterImages/f1_logo.png" alt="F1 Logo" style="height: 60px;">
            </a>
        </div>

        <!-- Links Section -->
        <div class="footer-links" style="flex: 2; display: flex; justify-content: center;">
            <ul style="list-style-type: none; padding: 0;">
                <li style="display: inline; margin-right: 20px;"><a href="/about" style="color: #fff; text-decoration: none;">About</a></li>
                <li style="display: inline; margin-right: 20px;"><a href="/terms" style="color: #fff; text-decoration: none;">Terms & Conditions</a></li>
                <li style="display: inline; margin-right: 20px;"><a href="/privacy" style="color: #fff; text-decoration: none;">Privacy Policy</a></li>
                <li style="display: inline; margin-right: 20px;"><a href="/contact" style="color: #fff; text-decoration: none;">Contact Us</a></li>
            </ul>
        </div>

        <!-- Social Media Section -->
        <div class="footer-social" style="flex: 1; text-align: right;">
            <a href="https://www.facebook.com/Formula1" style="margin-right: 10px;"><img src="/frontend/FooterImages/facebook.png" alt="Facebook" style="height: 30px;"></a>
            <a href="https://www.twitter.com/f1" style="margin-right: 10px;"><img src="/frontend/FooterImages/x.png" alt="Twitter" style="height: 30px;"></a>
            <a href="https://www.instagram.com/f1" style="margin-right: 10px;"><img src="/frontend/FooterImages/instagram.png" alt="Instagram" style="height: 30px;"></a>
            <a href="https://www.youtube.com/f1"><img src="/frontend/FooterImages/youtube.png" alt="YouTube" style="height: 30px;"></a>
        </div>
    </div>
    
    <!-- Copyright -->
    <div class="footer-bottom" style="margin-top: 20px; font-size: 14px;">
        <p>&copy; 2024 Formula 1. All Rights Reserved.</p>
    </div>
</footer>

    `;
    root.appendChild(footer);
  }
  