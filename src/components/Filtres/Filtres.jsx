import React from "react";
import s from "./Filtres.module.css"
import Menu from "./MultiSelect/MultiSelect.jsx";


const optionsStyle = [
    {label: "Графика", value: "graphics"},
    {label: "Миниатюра", value: "miniature"},
    {label: "Реализм", value: "realism"},
    {label: "Блэкворк", value: "blackwork"},
    {label: "Минимализм", value: "minimalism"},
    {label: "Лайнворк", value: "linework"}]

const Filtres = () => {

    return (
        <div className={s.filtress}>
            <div className={s.town}>
                <Menu name="Город"/>
            </div>
            <div className={s.styles}>
                <Menu name="Стили"/>
            </div>
            <div className={s.experience}>
                <Menu name="Стаж"/>
            </div>
            <div className={s.price}>
                <Menu name="Цена"/>
            </div>

        </div>
    )


}

export default Filtres
export {optionsStyle}