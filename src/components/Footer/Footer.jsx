import { Link } from 'react-router-dom';
import './footer.css';

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
            <li><Link to="/blog">Learn</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/faq">FAQ</Link></li>
          </ul>
        </div>

        <div className="footer__section">
          <h4 className="footer__title">Resources</h4>
          <ul className="footer__links">
            <li><Link to="/blog">Educational Blogs</Link></li>
            <li><Link to="/support">Get Help</Link></li>
            <li><Link to="/socials">Follow Us</Link></li>
            <li><a href="#contact">Contact Us</a></li>
          </ul>
        </div>

        <div className="footer__section">
          <h4 className="footer__title">Follow Us</h4>
          <div className="footer__socials">
            <a href="#" className="footer__social" aria-label="Facebook">f</a>
            <a href="#" className="footer__social" aria-label="Twitter">𝕏</a>
            <a href="#" className="footer__social" aria-label="Instagram">📷</a>
            <a href="#" className="footer__social" aria-label="YouTube">▶</a>
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        <p>&copy; {currentYear} Heez Land. Teaching kids to save the planet! 🌍💚</p>
      </div>
    </footer>
  );
}
