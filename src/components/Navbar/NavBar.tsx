import React, { useEffect, useState } from "react";
import "./navbar.scss";
import Logo from "../../assets/logo.svg";
import Glass from "../../assets/search-glass.svg";
import Switcher from "../../assets/theme-switcher.svg";
import { useNavigate } from "react-router";
import ButtonUI from "../ui/ButtonUI/ButtonUI";
import AuthToSignIn from "../AuthModals/AuthToSignIn";
import AuthToSignUp from "../AuthModals/AuthToSignUp";

const Header = () => {
  const navigate = useNavigate();

  const [signIn, setSignIn] = useState<boolean>(false);
  const [signUp, setSignUp] = useState<boolean>(false);

  const openSignIn = () => {
    if (signUp) {
      setSignUp(false);
      setSignIn(!signIn);
    } else {
      setSignIn(!signIn);
    }
  };

  const openSignUp = () => {
    if (signIn) {
      setSignIn(false);
      setSignUp(!signUp);
    } else {
      setSignUp(!signUp);
    }
  };

  return (
    <div className="navbar">
      <img
        className="navbar__logo"
        onClick={() => navigate("/main")}
        src={Logo}
        alt="logo-img"
      />
      <div className="navbar__selections">
        <span
          className={
            location.pathname === "/catalog"
              ? "navbar__active-page"
              : "navbar__innactive-page"
          }
          onClick={() => navigate("/catalog")}
        >
          Каталог
        </span>
        <span
          className={
            location.pathname === "/top-page"
              ? "navbar__active-page"
              : "navbar__innactive-page"
          }
          onClick={() => navigate("/top-page")}
        >
          Топ-100
        </span>
        <span
          className={
            location.pathname === "/collections"
              ? "navbar__active-page"
              : "navbar__innactive-page"
          }
          onClick={() => navigate("/collections")}
        >
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
            style={{
              padding: "12px 22px",
              border: "1.5px solid #F2EFFF",
              margin: "0",
            }}
            variant="outlined"
            onClick={openSignIn}
          >
            Войти
          </ButtonUI>
          <ButtonUI
            onClick={openSignUp}
            style={{
              margin: "0",
            }}
          >
            Регистрация
          </ButtonUI>
        </div>
        <img
          id="navbar__switch_btn"
          src={Switcher}
          alt="switch-img"
        />
      </div>
      {signIn ? <AuthToSignIn signInFunc={setSignIn} /> : null}
      {signUp ? <AuthToSignUp signUpFunc={setSignUp} /> : null}
    </div>
  );
};

export default Header;
