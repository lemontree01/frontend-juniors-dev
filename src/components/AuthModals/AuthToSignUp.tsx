import React, {
  FC,
  PropsWithChildren,
  ReactNode,
  useState,
} from "react";
import "./AuthToSignUp.scss";
import Logo from "../../assets/logo.svg";
import Facebook from "../../assets/facebook.svg";
import Twitter from "../../assets/twitter.svg";
import Gmail from "../../assets/gmail.svg";
import ButtonUI from "../ui/ButtonUI/ButtonUI";
import Cross from "../../assets/cross.svg";

export interface IAuthSingUp {
  signUpFunc?: (boolean: false) => void;
}

const AuthToSignUp: FC<PropsWithChildren<IAuthSingUp>> = ({
  signUpFunc,
}: IAuthSingUp) => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleSignUp = () => {
    if (!email.trim() || !password.trim()) {
      alert("Заполните все поля");
    } else {
      let formData = new FormData();

      formData.append("email", email);
      formData.append("password", password);
    }
  };

  return (
    <div className="auth__signUp_box">
      <div className="auth__signUp_icons">
        <img
          onClick={() => signUpFunc?.(false)}
          className="auth__signUp_cross"
          src={Cross}
          alt="cross_icon"
        />
        <img
          className="auth__signUp_logo"
          src={Logo}
          alt="animeon__logo"
        />
      </div>
      <div className="auth__signUp_header">
        <h3>Регистрация</h3>
        <span>через социальные сети</span>
      </div>
      <div className="auth__signUp_social_nets">
        <img src={Facebook} alt="facebook__logo" />
        <img src={Twitter} alt="twitter__logo" />
        <img src={Gmail} alt="gmail__logo" />
      </div>
      <div className="auth__signUp_or">
        <div className="auth__signUp_or-line"></div>
        или
        <div className="auth__signUp_or-line"></div>
      </div>
      <div className="auth__signUp_sign_in">
        <input
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Электронная почта"
          type="text"
        />
        <input
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Пароль"
          type="text"
        />
        <span>Придумайте надёжный пароль</span>
        <ButtonUI
          onClick={handleSignUp}
          style={{
            width: "100%",
            margin: "16px 0",
            borderRadius: "20px",
          }}
          size="big"
        >
          Зарегистрироваться
        </ButtonUI>
      </div>
      <div className="auth__signUp_has-account">
        <h4>
          Уже есть аккаунт? <span>Войти в аккаунт</span>
        </h4>
      </div>
    </div>
  );
};

export default AuthToSignUp;
