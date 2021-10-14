import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import {
  initializeProfile,
  initializedSuccess,
  setDataUserForm,
} from "../redux/app-reducer";
import s from "./LoginForm.module.css";

const LoginForm = () => {
  const disabledButtonLogin = useSelector((state) => state.disabledButtonLogin);

  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    dispatch(initializedSuccess(null));
    dispatch(setDataUserForm(data));
    dispatch(initializeProfile());
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className={s.inputForma}>
        <h4>Логин</h4>
        <input
          style={{ border: errors.email && "solid 1px #E26F6F" }}
          type="email"
          {...register("email", { required: true })}
        />
        {errors.email && <span className={s.errorText}>Обязательное поле</span>}
      </div>
      <div className={s.inputForma}>
        <h4>Пароль</h4>
        <input
          style={{ border: errors.password && "solid 1px #E26F6F" }}
          type="password"
          {...register("password", { required: true })}
        />
        {errors.password && <span>Обязательное поле</span>}
      </div>
      <div className={s.inputChekbox}>
        <input type="checkbox" {...register("checkbox")} />
        <label htmlFor="">Запомнить меня</label>
      </div>
      <input
        className={s.buttonSend}
        type="submit"
        disabled={disabledButtonLogin}
      />
    </form>
  );
};

export default LoginForm;
