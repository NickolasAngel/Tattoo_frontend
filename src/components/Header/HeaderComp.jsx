import React from "react"
import s from "./HeaderComp.module.scss"
import {NavLink} from "react-router-dom";

const HeaderComp = () => {
    return (
        <div className={s.header}>
            <div className={s.header_wrapper}>
                <div className={s.logo}>TATTOO</div>
                <div className={s.main}><NavLink to = "/main">Главная</NavLink></div>
                <div className={s.masters}><NavLink to = "/master">Мастера</NavLink></div>
                <div className={s.services}>Услуги</div>
                <div className={s.singIn}>
                    <img className={s.loopa} src="loopa.svg"/>
                    <div className={s.singButton}>
                        <p>Регистрация</p>
                    </div>

                </div>
            </div>
        </div>

    )
}

export default HeaderComp