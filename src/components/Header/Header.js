import { useState } from "react";

import "./Header.scss";

import MenuData from "../../assets/data/MenuData.json";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header id="header">
      <div className="header-inner">
        <h1 className="logo">
          <a href="/">KOBUS</a>
        </h1>

        <nav className="gnb">
          <ul className="gnb-list">
            {MenuData.map((menu) => (
              <li key={menu.id} className="gnb-item">
                <a href="/">{menu.title}</a>

                <ul className="submenu">
                  {menu.subMenus.map((subMenu, index) => (
                    <li key={index}>
                      <a href="/">{subMenu}</a>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </nav>

        <div className="header-util">
          <button type="button" className="login-btn">
            로그인
          </button>

          <button type="button" className="signup-btn">
            회원가입
          </button>

          <button type="button" className="lang-btn">
            KR
          </button>

          <button
            type="button"
            className={`menu-btn ${menuOpen ? "active" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>

      <div className={`mobile-menu ${menuOpen ? "active" : ""}`}>
        {MenuData.map((menu) => (
          <div key={menu.id} className="mobile-menu-section">
            <h3>{menu.title}</h3>

            <ul>
              {menu.subMenus.map((subMenu, index) => (
                <li key={index}>
                  <a href="/">{subMenu}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </header>
  );
};

export default Header;
