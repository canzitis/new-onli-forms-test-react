import { useContext } from "react";
import { useSelector } from "react-redux";
import s from "./ErrorLogin.module.css";

const ErrorLogin = () => {
  const email = useSelector((state) => state.userForm.email);
  return (
    <div className={s.errorLoginBlock}>
      <div className={s.imgError}>!</div>
      <span>Пользователя {email} не существует</span>
    </div>
  );
};

export default ErrorLogin;
