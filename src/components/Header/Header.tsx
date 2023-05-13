import React from "react";
import "./header.scss";
import Logo from "../../assets/logo.svg";
import Glass from "../../assets/search-glass.png";
import Switcher from "../../assets/theme-switcher.png";
import { useNavigate } from "react-router";

const Header = () => {
  const navigate = useNavigate();

  return (
    <div className="navbar">
      <img
        onClick={() => navigate("/main")}
        src={Logo}
        alt="logo-img"
      />

      <span onClick={() => navigate("/catalog")}>Каталог</span>
      <span onClick={() => navigate("/main")}>Топ-100</span>
      <span onClick={() => navigate("/collections")}>Коллекции</span>
      <div className="navbar__search_input">
        <input placeholder="Поиск" type="text" />
        <img id="navbar__search_btn" src={Glass} alt="glass-img" />
      </div>
      <button id="navbar__signIn_btn">Войти</button>
      <button id="navbar__signUp_btn">Регистрация</button>
      <img id="navbar__switch_btn" src={Switcher} alt="switch-img" />
    </div>
  );
};

export default Header;
