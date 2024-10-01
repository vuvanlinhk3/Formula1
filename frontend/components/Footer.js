export function renderFooter(root) {
    const footer = document.createElement('footer');
    footer.innerHTML = `
<footer class="site-footer">
    <!-- Row 1: App download and social media -->
    <div class="row1">
    <div class="footer-top">
        <div class="app-download">
            <a href="https://play.google.com/store/apps/details?id=com.softpauer.f1timingapp2014.basic&hl=en_GB"><img src="/frontend/FooterImages/google-play.png" alt="Google Play"></a>
            <a href="https://apps.apple.com/gb/app/formula-1/id835022598"><img src="/frontend/FooterImages/app-store.png" alt="App Store"></a>
        </div>
        <div class="social-media">
            <a href="https://www.facebook.com/Formula1"><img src="/frontend/FooterImages/facebook.png" alt="Facebook"></a>
            <a href="https://www.twitter.com/f1"><img src="/frontend/FooterImages/x.png" alt="X"></a>
            <a href="https://www.instagram.com/f1"><img src="/frontend/FooterImages/instagram.png" alt="Instagram"></a>
            <a href="https://www.youtube.com/f1"><img src="/frontend/FooterImages/youtube.png" alt="YouTube"></a>
        </div>
    </div>
    </div>

    <!-- Row 2: Our Partners -->
    <div class="partners-title">
        <p>Our Partners</p>
    </div>

    <!-- Row 3: Partner logos -->

    <div class="partner-logos">
        <div><a href="https://www.rolex.com/"><img src="/frontend/FooterImages/rolex.png" alt="Rolex"></a></div>
        <div><a href="https://www.pirelli.com/tyres/en-ww/motorsport/car/formula-1?utm_source=formula1.com&utm_medium=referral&utm_campaign=ww_motorsport_f1&utm_content=homepage"><img src="/frontend/FooterImages/pirelli.png" alt="Pirelli"></a></div>
        <div><a href="https://www.aramco.com/"><img src="/frontend/FooterImages/aramco.png" alt="Aramco"></a></div>
        <div><a href="https://www.heineken.com/vn/vi/agegateway?returnurl=%2f"><img src="/frontend/FooterImages/Heineken.png" alt="Heineken"></a></div>
        <div><a href="https://inmotion.dhl/en/formula-1?utm_content=DHL-F1&utm_source=f1&utm_medium=website&utm_campaign=DHL-F1"><img src="/frontend/FooterImages/DHL.png" alt="DHL"></a></div>
        <div><a href="https://www.qatarairways.com/en-us/homepage.html"><img src="/frontend/FooterImages/QatarAirways.png" alt="Qatar Airways"></a></div>
        <div><a href="https://aws.amazon.com/sports/f1/"><img src="/frontend/FooterImages/AWS.png" alt="AWS"></a></div>
        <div><a href="https://crypto.com/"><img src="/frontend/FooterImages/Cryptocom.png" alt="Crypto.com"></a></div>
        <div><a href="https://www.msccruisesusa.com/"><img src="/frontend/FooterImages/MSC.png" alt="MSC"></a></div>
        <div><a href="https://www.salesforce.com/campaign/formula1/?d=7013y000002RO1gAAG&utm_source=formula1&utm_medium=referral&utm_campaign=us_c360aw&utm_content=formula1-salesforce-logo_7013y000002RO1gAAG"><img src="/frontend/FooterImages/Salesforce.png" alt="Salesforce"></a></div>
    </div>
    <div class="partner-logos">
        <div><a href="#"><img src="/frontend/FooterImages/LasVegasConventionandVisitorsAuthority.png" alt="Las Vegas Convention and Visitors Authority"></a></div>
        <div><a href="#"><img src="/frontend/FooterImages/Paramount+.png" alt="Paramount+"></a></div>
        <div><a href="#"><img src="/frontend/FooterImages/Lenovo.png" alt="Lenovo"></a></div>
        <div><a href="#"><img src="/frontend/FooterImages/FerrariTrento.png" alt="Ferrari Trento"></a></div>
        <div><a href="#"><img src="/frontend/FooterImages/LiquiMoly.png" alt="LiquiMoly"></a></div>
        <div><a href="#"><img src="/frontend/FooterImages/Globant.png" alt="Globant"></a></div>
    </div>   
    <div class="partner-logos">
        <div><a href="#"><img src="/frontend/FooterImages/American Express.png" alt="American Express"></a></div>
        <div><a href="#"><img src="/frontend/FooterImages/Workday.png" alt="Workday"></a></div>
        <div><a href="#"><img src="/frontend/FooterImages/BBS.png" alt="BBS"></a></div>
        <div><a href="#"><img src="/frontend/FooterImages/TATA.png" alt="TATA"></a></div>
        <div><a href="#"><img src="/frontend/FooterImages/Aggreko.png" alt="Aggreko"></a></div>
        <div><a href="#"><img src="/frontend/FooterImages/188Bet.png" alt="188 Bet"></a></div>
        <div><a href="#"><img src="/frontend/FooterImages/Puma.png" alt="Puma"></a></div>
        <div><a href="#"><img src="/frontend/FooterImages/mcdonalds.png" alt="McDonalds"></a></div>
    </div>   

    <!-- Row 4: F1 logo and copyright -->
    <div class="footer-bottom">
        <div class="footer-logo">
            <img src="/frontend/FooterImages/f1_logo.png" alt="F1 Logo">
        </div>
        <div class="copyright">
            <p>&copy; 2003-2024 Formula One World Championship Limited. All Rights Reserved.</p>
        </div>
    </div>
</footer>

    `;
    root.appendChild(footer);
  }
  