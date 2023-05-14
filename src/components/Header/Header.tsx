import React from "react";
import "./header.scss";
import Logo from "../../assets/logo.svg";
import Glass from "../../assets/search-glass.svg";
import Switcher from "../../assets/theme-switcher.svg";
import { useNavigate } from "react-router";
import ButtonUI from "../../UI/ButtonUI/ButtonUI";

const Header = () => {
  const navigate = useNavigate();

  return (
    <div className="navbar">
      <img
        onClick={() => navigate("/main")}
        src={Logo}
        alt="logo-img"
      />

      <div className="navbar__selections">
        <span onClick={() => navigate("/catalog")}>Каталог</span>
        <span onClick={() => navigate("/top-page")}>Топ-100</span>
        <span onClick={() => navigate("/collections")}>
          Коллекции
        </span>
      </div>

      <div className="navbar__search_input">
        <input placeholder="Поиск" type="text" />
        <img id="navbar__search_btn" src={Glass} alt="glass-img" />
      </div>
      <div className="navbar__btns">
        <div className="navbar__auth_btns">
          <ButtonUI
            style={{ padding: "12px 22px" }}
            variant="outlined"
          >
            Войти
          </ButtonUI>
          <ButtonUI>Регистрация</ButtonUI>
        </div>
        <img
          id="navbar__switch_btn"
          src={Switcher}
          alt="switch-img"
        />
      </div>
    </div>
  );
};

export default Header;
