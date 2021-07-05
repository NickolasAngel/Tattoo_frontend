import React from "react";
import s from "./MultiSelect.module.css"


const Menu = (props) => {
    return (
        <div className={s.selectBlock}>
            <div>
                <select className={s.filter_select}>
                    <option>{props.name}</option>
                </select>
            </div>

        </div>
    )
}


export default Menu