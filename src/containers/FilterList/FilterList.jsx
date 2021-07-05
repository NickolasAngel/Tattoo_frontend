import React from "react";
import s from "./FilterList.scss"
import Filtres from "../../components/Filtres/Filtres.jsx";

const FilterList = () => {
    return(
        <div className={s.FilterList}>
            <Filtres />
        </div>
    )
}

export default FilterList