/*libraries*/
   import { useState, useRef } from "react";
   import { Link, NavLink } from "react-router-dom";

/*svg*/
   import LogoSvg from "@/assets/svg/brand/bubble_heez0.svg?react";
   import SoundOnSvg from "@/assets/svg/soundOn.svg?react"; 
   import SoundOffSvg from "@/assets/svg/soundOff.svg?react"; 
   import CoinSvg from "@/assets/svg/brand/coin.svg?react";

/*other*/   
   import "./NavBar.css";

export default function NavBar({ showCoins = true }) {
  const [open, setOpen] = useState(false);

  const bgAudioRef = useRef(null);
  const [soundOn, setSoundOn] = useState(true);

  const coinAudioRef = useRef(null);
  const [spin, setSpin] = useState(false);

  const links = [
    { to: "/", label: "Home" },
    { to: "/learn", label: "Learn" },
    { to: "/games", label: "Games" },
    { to: "/quiz", label: "Quiz" },
    { to: "/about", label: "About" },
  ];

  const toggleSound = () => {
    if (!bgAudioRef.current) return;
    if (soundOn) {
      bgAudioRef.current.pause();
    }
    else {
      bgAudioRef.current.play();
    }
    setSoundOn(!soundOn);
  }

  const flipCoin = () => {
    if (!coinAudioRef.current) return;
    coinAudioRef.current.currentTime = 0;
    coinAudioRef.current.play();
    setSpin(true);
  }

  const renderCoinsContent = () => (
    <>
      <div className="coins-icon-container"> 
        <CoinSvg
          className={`coins-icon ${spin ? "spin":""}`}
          onAnimationEnd={() => setSpin(false)}
          onClick ={flipCoin}
        />
      </div>
      <span className="amount">723</span>
    </>
  );

  return (
    <nav className="navbar">
      <div className="nav-inner">
        {/* Logo */}
        <div className="logo-wrap">
        <Link to="/" className="logo"><LogoSvg/></Link>
        </div>

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
          <button className="soundBtn" aria-label="Toggle sound" onClick={toggleSound}>
            {soundOn ? <SoundOnSvg className="sound-icon" />: <SoundOffSvg className="sound-icon" /> }
          </button>

          <audio ref={bgAudioRef} src= "src/assets/sounds/bg-sound.mp3" loop></audio>
          {showCoins && (
            <div className="coins-container coins-desktop-only" aria-label="Coins">
              {renderCoinsContent()}
            </div>
          )}

          {/* Hamburger (mobile) */}
          <button
            className={`menu-toggle ${open ? "open" : ""}`}
            aria-label="Open menu"
            aria-expanded={open}
            onClick={() => setOpen(v => !v)}
          >
            <span/><span/><span/>
          </button>
        </div>
      </div>

      {showCoins && (
        <audio ref={coinAudioRef} src="src/assets/sounds/coin-flip.mp3"></audio>
      )}

      {/* Mobile dropdown */}
      <div className={`nav-panel ${open ? "show" : ""}`} onClick={() => setOpen(false)}>
        {showCoins && (
          <div className="coins-container coins-mobile-only" aria-label="Coins">
            {renderCoinsContent()}
          </div>
        )}
        {links.map(l => (
          <NavLink key={l.to} to={l.to} className="panel-link">
            {l.label}
          </NavLink>
        ))}
      </div>
    </nav>
  );
}
