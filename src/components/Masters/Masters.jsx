import React from "react";
import s from "./Masters.module.css"

import ItemMaster from "./ItemMaster/ItemMaster.jsx";


const Masters = () => {
    return(
        <div className={s.masters}>
            <div className={s.item}>
                <ItemMaster />
                <ItemMaster />
                <ItemMaster />
            </div>
        </div>

    )
}
export default Masters