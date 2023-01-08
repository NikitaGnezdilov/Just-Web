import React, { useState } from "react";
import "../style.scss";
import { NavLink, useNavigate } from "react-router-dom";

import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";


type Props = {};

const Login = (props: Props) => {
  const [registerErr, setRegisterErr] = useState<Boolean>(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const email = (e.currentTarget[0] as HTMLInputElement).value;
    const password = (e.currentTarget[1] as HTMLInputElement).value;
    try {
      await signInWithEmailAndPassword(auth, email, password)
      navigate('/home')
    } catch (error) {
      setRegisterErr(true);
    }
  };

  return (
    <section className="formContainer">
      <section className="form">
        <h2 className="form__title">Вход</h2>
        <form className="form__inputs" onSubmit={handleSubmit}>
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
      {registerErr && <div style={{color: 'red'}}>Что-то пошло не так</div>}
    </section>
  );
};

export default Login;
