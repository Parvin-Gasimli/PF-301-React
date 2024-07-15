import React from "react";
import s from "./input.module.scss";
const CustomInput = ({ placeholder, type, name, value, ...props }) => {
  return (
    <input
      {...props}
      type={type}
      placeholder={props.placeholder}
      className={s.baseInput}
      name={name}
      value={value}
    />
  );
};

export default CustomInput;
