import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, db, storage } from "../firebase";
import { doc, setDoc } from "firebase/firestore";

import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "../style.scss";

import Icon from "../assets/icons/choose-img.svg";

type Props = {};

const Register: React.FC = (props: Props) => {
  const [registerErr, setRegisterErr] = useState<Boolean>(false);
  const navigate = useNavigate();


  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const userName = (e.currentTarget[0] as HTMLInputElement).value;
    const email = (e.currentTarget[1] as HTMLInputElement).value;
    const password = (e.currentTarget[2] as HTMLInputElement).value;
    const file: File | null = (e.currentTarget[3] as HTMLInputElement)
      .files![0];
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);

      const storageRef = ref(storage, userName);
      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        "state_changed",
        () => {},
        (error) => {
          setRegisterErr(true);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
            await updateProfile(res.user, {
              displayName: userName,
              photoURL: downloadURL,
            });

            await setDoc(doc(db, "users", res.user.uid), {
              id: res.user.uid,
              userName,
              email,
              photoURL: downloadURL,
            })

            await setDoc(doc(db,"usersChat", res.user.uid), {})

            navigate('/')

          });
        }
      );
    } catch (error) {
      setRegisterErr(true);
    }
    //setRegisterErr(false)
  };

  return (
    <section className="formContainer">
      <section className="form">
        <h2 className="form__title">Регистрация</h2>
        <form className="form__inputs" onSubmit={handleSubmit}>
          <input type="text" placeholder="Введите имя" tabIndex={1} />
          <input type="email" placeholder="Ваш email" tabIndex={2} />
          <input type="password" placeholder="Пароль" tabIndex={3} />
          <label htmlFor="img">
            <img src={Icon} alt="" tabIndex={4} />
            <span>Загрузите аватар</span>
          </label>
          <input
            style={{ display: "none" }}
            type="file"
            id="img"
            alt="Загрузите аватар"
          />
          <button className="form__btn" tabIndex={5}>
            Зарегестрироваться
          </button>
          {registerErr && <div style={{color: 'red'}}>Что-то пошло не так</div>}
        </form>
        <span className="form__link">
          У вас уже есть аккаунт? <NavLink to="/login">Войдите</NavLink>
        </span>
      </section>
    </section>
  );
};

export default Register;
