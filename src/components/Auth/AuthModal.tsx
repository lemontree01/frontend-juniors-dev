import React, { FC, PropsWithChildren } from "react";
import "./AuthModal.scss";
import logo from "../../assets/logo.svg";
import facebook from "../../assets/facebook.svg";
import twitter from "../../assets/twitter.svg";
import gmail from "../../assets/gmail.svg";
import ButtonUI from "../ui/ButtonUI/ButtonUI";

interface ITypes {
  signIn?: boolean;
  signUp?: boolean;
}

const AuthModal: FC<PropsWithChildren<ITypes>> = ({
  signIn,
  signUp,
}) => {
  return (
    <div className="authModal__box">
      <div className="authModal__cross"></div>
      <img className="authModal__logo" src={logo} alt="" />
      <div className="authModal__header">
        <h3>{signIn ? "Войти" : signUp ? "Регистрация" : "Войти"}</h3>
        <span>через социальные сети</span>
      </div>
      <div className="authModal__social_nets">
        <img src={facebook} alt="facebook__logo" />
        <img src={twitter} alt="twitter__logo" />
        <img src={gmail} alt="gmail__logo" />
      </div>
      <div className="authModal__or">или</div>
      <div className="authModal__sign_in">
        <input placeholder="Электронная почта" type="text" />
        <input placeholder="Пароль" type="text" />
        <span>Забыли пароль?</span>
        <ButtonUI
          style={{ width: "100%", margin: "20px 0" }}
          size="big"
        >
          Войти
        </ButtonUI>
      </div>
      <div className="authModal__no-account">
        <h4>
          Ещё нет аккаунта? <span>Создать аккаунт</span>
        </h4>
      </div>
    </div>
  );
};

export default AuthModal;
