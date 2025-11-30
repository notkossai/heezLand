import './navbar.css';

import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useCoin } from '../../../contexts/coins/CoinContext';

import CoinSvg from "@/assets/svg/brand/coin.svg?react";

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { coins } = useCoin();
  const location = useLocation();

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const links = [
    { to: "/", label: "Home" },
    { to: "/learn", label: "Learn" },
    { to: "/games", label: "Games" },
    { to: "/quiz", label: "Quiz" },
    { to: "/about", label: "About" },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="navbar">
      <div className="navbar__container">
        <Link to="/" className="navbar__logo">
          <span className="navbar__logo-icon">🌍</span>
          <span className="navbar__logo-text">Heez Land</span>
        </Link>

        <button 
          className={`navbar__hamburger ${menuOpen ? 'active' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul className={`navbar__links ${menuOpen ? 'active' : ''}`}>
          {links.map((link) => (
            <li key={link.to}>
              <Link 
                to={link.to} 
                className={`navbar__link ${isActive(link.to) ? 'navbar__link--active' : ''}`}
                onClick={() => setMenuOpen(false)}
                aria-current={isActive(link.to) ? 'page' : undefined}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="navbar__coins">
          <span className="navbar__coins-icon"><CoinSvg /></span>
          <span className="navbar__coins-value">{coins}</span>
        </div>
      </div>
    </nav>
  );
}