import React from "react";
import s from "./MasterList.scss"
import Masters from "../../components/Masters/Masters.jsx"


const MasterList = () => {
    return (
        <div>
            <div className={s.MasterList}>
                <Masters/>

            </div>

        </div>

    )
}

export default MasterList