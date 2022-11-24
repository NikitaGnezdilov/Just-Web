import React from "react";
import "../style.scss";
import { NavLink } from "react-router-dom";

type Props = {};

const Login = (props: Props) => {
  return (
    <section className="formContainer">
      <section className="form">
        <h2 className="form__title">Вход</h2>
        <form className="form__inputs">
          <input type="email" placeholder="Ваш email" tabIndex={1} />
          <input type="password" placeholder="Пароль" tabIndex={2} />
          <button className="form__btn" tabIndex={3}>
            Войти
          </button>
        </form>
        <span className="form__link">
          У вас нет аккаунта? <NavLink to="/signup">Зарегестрироваться</NavLink>
        </span>
      </section>
    </section>
  );
};

export default Login;
