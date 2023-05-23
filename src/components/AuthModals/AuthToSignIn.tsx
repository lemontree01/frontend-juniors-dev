import React, {
  FC,
  PropsWithChildren,
  ReactNode,
  useState,
} from "react";
import "./AuthToSignIn.scss";
import Logo from "../../assets/logo.svg";
import Facebook from "../../assets/facebook.svg";
import Twitter from "../../assets/twitter.svg";
import Gmail from "../../assets/gmail.svg";
import ButtonUI from "../ui/ButtonUI/ButtonUI";
import Cross from "../../assets/cross.svg";

export interface IAuthSignIn {
  signInFunc?: (boolean: false) => void;
}

const AuthToSignIn: FC<PropsWithChildren<IAuthSignIn>> = ({
  signInFunc,
}: IAuthSignIn) => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleSignIn = () => {
    if (!email.trim() || !password.trim()) {
      alert("Заполните все поля");
    } else {
      let formData = new FormData();

      formData.append("email", email);
      formData.append("password", password);
    }
  };

  return (
    <div className="auth__signIn_box">
      <div className="auth__signIn_icons">
        <img
          onClick={() => signInFunc?.(false)}
          className="auth__signIn_cross"
          src={Cross}
          alt="cross_icon"
        />
        <img
          className="auth__signIn_logo"
          src={Logo}
          alt="animeon__logo"
        />
      </div>
      <div className="auth__signIn_header">
        <h3>Войти</h3>
        <span>через социальные сети</span>
      </div>
      <div className="auth__signIn_social_nets">
        <img src={Facebook} alt="facebook__logo" />
        <img src={Twitter} alt="twitter__logo" />
        <img src={Gmail} alt="gmail__logo" />
      </div>
      <div className="auth__signIn_or">
        <div className="auth__signIn_or-line"></div>
        или
        <div className="auth__signIn_or-line"></div>
      </div>
      <div className="auth__signIn_sign_in">
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
        <span>Забыли пароль?</span>
        <ButtonUI
          onClick={handleSignIn}
          style={{
            width: "100%",
            margin: "16px 0",
            borderRadius: "20px",
          }}
          size="big"
        >
          Войти
        </ButtonUI>
      </div>
      <div className="auth__signIn_no-account">
        <h4>
          Ещё нет аккаунта? <span>Создать аккаунт</span>
        </h4>
      </div>
    </div>
  );
};

export default AuthToSignIn;
