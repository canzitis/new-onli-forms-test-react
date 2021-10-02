import preloaderGif from "../../IMG/preloader.gif";
import s from "./Preloader.module.css";

const Preloader = () => {
  return (
    <div className={s.preloader}>
      <img src={preloaderGif} alt="" />
    </div>
  );
};

export default Preloader;
