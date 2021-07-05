import React from "react";
import s from "./MasterInfo.module.scss"
import * as axios from "axios";

const MasterInfo = (props) => {


    return(

        <div className={s.MasterInfo}>
            <div className={s.avatar}><img srcSet={props.avatar}/></div>
            <div className={s.nameRating}>
                <div className={s.name}>{props.masterName}</div>
                <div className={s.rating}><img className={s.star} srcSet={"star.svg"}/>5.0</div>
                <div className={s.enlist}>
                    <button className={s.enlistButton}>Забиться</button>
                </div>
                <div className={s.experience}>{props.experience} лет стажа</div>
            </div>
            <div className={s.description}>
                <p>{props.description}</p>

            </div>

        </div>
    )
}

export default MasterInfo