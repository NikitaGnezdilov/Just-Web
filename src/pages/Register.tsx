import React from "react";
import { NavLink } from "react-router-dom";
import '../style.scss'

import Icon from '../assets/icons/choose-img.svg'

type Props = {};

const Register:React.FC = (props: Props) => {

	const handleSubmit = () => {

	}

  return (
    <section className="formContainer">
      <section className="form">
      	<h2 className="form__title">Регистрация</h2>
	      <form className="form__inputs" onSubmit={handleSubmit}>
	        <input type="text" placeholder="Введите имя" tabIndex={1}/>
	        <input type="email" placeholder="Ваш email" tabIndex={2}/>
	        <input type="password" placeholder="Пароль" tabIndex={3}/>
			<label htmlFor="img">
				<img src={Icon} alt="" tabIndex={4}/>
				<span>Загрузите аватар</span>
			</label>
	        <input style={{display: 'none'}} type="file" id="img" alt="Загрузите аватар" />
	        <button className="form__btn" tabIndex={5}>Зарегестрироваться</button>
	      </form>
	      <span className="form__link">
	        У вас уже есть аккаунт? <NavLink to="/login">Войдите</NavLink>
	      </span>
      </section>
    </section>
  );
};

export default Register;
