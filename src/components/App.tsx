import { useState } from "react";
import classes from "./App.module.scss";
import { Link, Outlet } from "react-router-dom";
import PictureSvg from "../assets/picture.svg";
import picturePng from "@/assets/avatar.png";

function todo1() {
  todo2();
}

function todo2() {
  throw new Error();
}

export const App = () => {
  const [count, setCount] = useState(0);

  // const up = () => setCount((prev) => prev + 1);
  const up = () => todo1();
  const down = () => setCount((prev) => prev - 1);

  return (
    <div data-testid={"App.DataTestId"}>
      <h1>platrorm={__PLATFORM__}</h1>
      <div>
        <img src={picturePng} alt="" />
        <PictureSvg width={50} height={50} className={classes.svg} />
      </div>
      <Link to={"/about"}>about</Link>
      <br />
      <Link to={"/shop"}>shop</Link>
      <br />
      {count}
      <button className={classes.button} onClick={up}>
        up
      </button>
      <button className={classes.value} onClick={down}>
        down
      </button>
      <Outlet />
    </div>
  );
};
