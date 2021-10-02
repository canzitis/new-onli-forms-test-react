import React, { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router";
import { exitAccount } from "../redux/app-reducer";
import s from "./Profile.module.css";
const Profile = () => {
  const email = useSelector((state) => state.userData.email);
  const accessible = useSelector((state) => state.accessible);
  const dispatch = useDispatch();
  const clikButtonExit = () => {
    dispatch(exitAccount());
  };
  debugger;

  if (!accessible) {
    return <Redirect to="/login" />;
  }
  return (
    <div>
      <div className={s.header}>
        <h4>ONLI.</h4>
      </div>
      <div className={s.content}>
        <div className={s.dataUser}>
          <span>
            Здравствуйте, <h4>{email}</h4>
          </span>
        </div>
        <div className={s.exitAccountButton}>
          <button
            className={s.exitProfileButton}
            onClick={() => {
              clikButtonExit();
            }}
          >
            Выйти
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
