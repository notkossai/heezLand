import { Link } from 'react-router-dom';
import './Footer.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__section">
          <h4 className="footer__title">🌿 Heez Land</h4>
          <p className="footer__description">
            Teaching kids to recycle and keep our planet clean!
          </p>
        </div>

        <div className="footer__section">
          <h4 className="footer__title">Quick Links</h4>
          <ul className="footer__links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/learn">Learn</Link></li>
            <li><Link to="/games">Games</Link></li>
            <li><Link to="/quiz">Quiz</Link></li>
          </ul>
        </div>

        <div className="footer__section">
          <h4 className="footer__title">Resources</h4>
          <ul className="footer__links">
            <li><Link to="/blog">Educational Blogs</Link></li>
            <li><a href="/socials">Follow Us</a></li>
            <li><Link to="/support">Get Help</Link></li>
            <li><Link to="/faq">FAQ</Link></li>
          </ul>
        </div>

          <div className="footer__section">
          <h4 className="footer__title">Discover more</h4>
          <ul className="footer__links">
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/other">Other</Link></li>
          </ul>
        </div>
      </div>

      <div className="footer__bottom">
        <p>&copy; {currentYear} Heez Land. Teaching kids to save the planet! 🌍💚</p>
      </div>
    </footer>
  );
}
