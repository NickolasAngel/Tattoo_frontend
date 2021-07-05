import React from "react";
import s from './MasterStyles.module.scss'


const MasterStyles = (props) => {
    return(
        <div className={s.MasterStyles}>
            <div className={s.firstStyle}>
            </div>
            <div className={s.secondStyle}>
                Блэкворк
            </div>
            <div className={s.thirdStyle}>
                Японский
            </div>
            <div className={s.fourthStyle}>
                Минимализм
            </div>
            <div className={s.fifthStyle}>
                Дотворк
            </div>
        </div>
    )
}

export default MasterStyles