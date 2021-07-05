import s from "./MasterPaje.module.scss"
import Header from "./containers/Header/Header.jsx";
import Breadcrumb from "./components/Breadcrumb/Breadcrumb.jsx";
import MasterInfo from "./containers/MasterInfo/MasterInfo.jsx";
import MasterStyles from "./components/MasterStyles/MasterStyles.jsx";
import * as axios from 'axios';

// https://kiber-ronin-tatto.herokuapp.com/api/master/1

const MasterPage = (props) => {
    // let master = {"masterName": "Pidar Pidarov", "exp": 15, "price": 2000, "desc": "поавопщоапщвпоа"}

    // axios.get('https://kiber-ronin-tatto.herokuapp.com/api/master/2').then(response =>{
    //     console.log(response)
    // })
    // let stringa = "Занимаюсь татуировкой уже около 15 лет. Все началось с подросткового возраста, когда пришло осознание - рисование для меня не просто хобби, а нечто большее.Работаю во многих стилях, люблю экспериментировать, но предпочтен"
    // console.log(stringa.length)


    return (
        <div className={s.MasterPage}>
            <div className={s.header}>
                <Header />
            </div>
            <div className={s.bread}>
                <Breadcrumb />
            </div>
            <div className={s.masterInfo}>
                <MasterInfo masterName={props.masterInform.masterName} experience={props.masterInform.experience}
                            description={props.masterInform.masterDesc} avatar={props.masterInform.avatar}/>
            </div>

            <div className={s.MasterStyles}><MasterStyles  /></div>


        </div>
    );
}

export default MasterPage
