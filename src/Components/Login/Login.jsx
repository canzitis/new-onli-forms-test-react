import LoginForm from "./LoginForm";
import s from "./Login.module.css";
import Preloader from "../Preloader/Preloader";
import { Redirect } from "react-router";
import ErrorLogin from "../ErrorLogin/ErrorLogin";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { initializetSuccess } from "../redux/app-reducer";
import { useSelector } from "react-redux";

const Login = () => {
  const accessible = useSelector((state) => state.accessible);
  const loginErrorText = useSelector((state) => state.loginErrorText);
  const initialize = useSelector((state) => state.initialize);

  if (accessible) {
    return <Redirect to="/profile" />;
  }

  return (
    <div className={s.loginBlock}>
      <div className={s.header}>
        {!initialize ? <Preloader /> : null}
        <h4>ONLI.</h4>
      </div>
      <div className="content">
        {loginErrorText ? <ErrorLogin /> : null}
        <LoginForm />
      </div>
    </div>
  );
};

export default Login;
