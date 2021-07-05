
import s from "./mainPage.module.scss"
import Header from "./containers/Header/Header.jsx";
import FilterList from "./containers/FilterList/FilterList.jsx";
import MasterList from "./containers/MasterList/MasterList.jsx";

const MainPage = (props) => {
    return (
        <div className={s.App}>
            <div className={s.header}>
                <Header/>
            </div>
            <div className={s.styles}><FilterList/></div>
            <div className={s.masters}>
                <MasterList/>
            </div>



        </div>
    );
}

export default MainPage
