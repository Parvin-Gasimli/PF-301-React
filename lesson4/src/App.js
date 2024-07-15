import React from "react";
import CustomButton from "./components/CustomButton";
import { CardItems } from "./static/db";
import CustomInput from "./components/CustomInput";
import btnstyle from "./components/CustomButton/button.module.scss";
import { IoCloseCircleSharp, IoHome, IoHomeOutline } from "react-icons/io5";
import CustomCard from "./components/CustomCard";

const App = () => {
  return (
    <div className="container">
      <div
        style={{
          margin: "20px 0",
        }}
      >
        <h1>SIGN Up</h1>
        <CustomInput
          type="password"
          placeholder="enter the password"
          name="password"
        />
        <CustomInput
          type="text"
          placeholder="enter the username"
          name="username"
        />
        <CustomInput type="email" placeholder="enter the email" name="email" />
        <CustomButton className={btnstyle.btn_success}>
          <IoHomeOutline size={25} color="red" />
          SEND
        </CustomButton>
        <CustomButton className={btnstyle.btn_error}>
          <IoCloseCircleSharp size={24} />
          CANCEL
        </CustomButton>
        <CustomButton className={btnstyle.btn_primary}>
          <IoHome size={24} />
          WARNING
        </CustomButton>
      </div>
      <div className="row">
        {CardItems &&
          CardItems.map((card, index) => (
            <CustomCard
              imgUrl={card.imgageUrl}
              title={card.title}
              desc={card.desc}
              btnText={card.btnText}
              key={index}
            />
          ))}
      </div>
    </div>
  );
};

export default App;
