import React from "react";
import s from "./Breadcrumb.module.scss"


const Breadcrumb = () => {
    return(
        <div>
            <ul className={s.breadcrumb}>
                <li><a href="#">Мастера</a> </li>
                <span>/</span>
                <li><a href="#">Петр Жемчугов</a> </li>
            </ul>
        </div>
    )
}

export default Breadcrumb