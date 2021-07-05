import React from "react";
import HeaderComp from "../../components/Header/HeaderComp.jsx";
import s from "./Header.module.scss"


const Header = () => {
    return(
        <div className={s.wrapper}><HeaderComp /></div>

    )
}

export default Header