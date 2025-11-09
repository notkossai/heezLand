/*libraries*/
   import { useState } from "react";
   import { Link, NavLink } from "react-router-dom";
/*svg*/
   import SoundOnSvg from "@/assets/svg/soundOn.svg?react"; 
   import CoinSvg from "@/assets/svg/brand/coin.svg?react";

/*other*/   
   import "./NavBar.css";

export default function NavBar({ showCoins = true }) {
  const [open, setOpen] = useState(false);

  const links = [
    { to: "/", label: "Home" },
    { to: "/learn", label: "Learn" },
    { to: "/games", label: "Games" },
    { to: "/quiz", label: "Quiz" },
    { to: "/about", label: "About" },
  ];

  return (
    <nav className="navbar">
      <div className="nav-inner">
        {/* Logo */}
        <Link to="/" className="logo">HeezLand</Link>

        {/* Desktop links */}
        <ul className="nav-links">
          {links.map(l => (
            <li key={l.to}>
              <NavLink to={l.to} className={({isActive}) => `chip ${isActive ? "active": ""}`}>
                {l.label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Right side controls */}
        <div className="right-side">
          <button className="soundBtn" aria-label="Toggle sound">
            <SoundOnSvg className="soundOn-icon" />
          </button>

          {showCoins && (
            <div className="coins-container" aria-label="Coins">
              
              <span className="amount">723</span>
            </div>
          )}

          {/* Hamburger (mobile) */}
          <button
            className={`menu-toggle ${open ? "open" : ""}`}
            aria-label="Open menu"
            aria-expanded={open}
            onClick={() => setOpen(v => !v)}
          >
            <span/><span/>
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      <div className={`nav-panel ${open ? "show" : ""}`} onClick={() => setOpen(false)}>
        {links.map(l => (
          <NavLink key={l.to} to={l.to} className="panel-link">
            {l.label}
          </NavLink>
        ))}
      </div>
    </nav>
  );
}