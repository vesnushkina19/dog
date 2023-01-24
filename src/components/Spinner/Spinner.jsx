import React from "react";
import s from "./style.module.css";


const Spinner = () => {
	return (
		<div className={s.loaderWrapper}>
  <div className={s.loader}></div>
</div>
	);
};

export default Spinner;
