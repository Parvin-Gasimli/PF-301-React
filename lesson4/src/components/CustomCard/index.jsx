import React from 'react'
import s from "./card.module.scss"
import btnStyle from "../CustomButton/button.module.scss"
import CustomButton from '../CustomButton'
const CustomCard = ({
    imgUrl, title, desc, btnText
}) => {
    return (
        <div>
            <div className={s.card}>
                <div className={s.card__image}>
                    <img src={imgUrl} alt={desc} />
                </div>
                <div className={s.card__footer}>
                    <h2>{title}</h2>
                    <p>{desc}</p>
                    <CustomButton title={btnText} className={btnStyle.btn_primary} />
                </div>
            </div>
        </div>
    )
}

export default CustomCard