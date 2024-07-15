import React from "react";
const CustomButton = ({ title, className, children, ...props }) => {
  return (
    <button {...props} className={className}>
      {title ? title : children}
    </button>
  );
};

export default CustomButton;
