import React from "react";
import s from "./ItemMaster.module.css"

const ItemMaster = (props) => {
    return (
        <div className={s.masterBlock}>
            <div className={s.avatar_block}>
                <img className={s.avatar} src='avatar.jpg' alt="idi nahui"/>
            </div>
            <div className={s.blockInfo}>
                <div className={s.nameTown}>
                    <div className={s.name}>Петр Жемчугов</div>
                    <div className={s.town}>
                        <img className={s.townPicker} src="Vector.svg"/>
                        Москва

                    </div>
                </div>
                <div className={s.expPrice}>
                    <div className={s.experience}>Стаж: 15 лет {props.masterExp}</div>
                    <div className={s.price}>Минимальная цена: 15000 <img src="currency.svg"/></div>
                </div>
                <div className={s.styles}>
                    <div className={s.firstStyle}>
                        <p >Нео-традишнл</p>
                    </div>

                    <div className={s.secondStyle}>
                    <p>Блэкворк</p>
                    </div>
                    <div className={s.thirdStyle}>
                    <p>Японский</p>
                    </div>
                    <div className={s.fourthStyle}>
                        <p>Минимализм</p>
                    </div>
                    <div className={s.emptyStyle}><p>. . .</p></div>
                </div>
            </div>
            <div className={s.portfolio}>
                <div className={s.firstPic}><img src="first.png"/></div>
                <div className={s.secondPic}><img src="second.png"/></div>
                <div className={s.thirdPic}><img src="third.png"/></div>
                <div className={s.fourthPic}><img src="fourth.png"/></div>
                <div className={s.fifthPic}><img src="fifth.png"/></div>
            </div>

        </div>
    )
}

export default ItemMaster