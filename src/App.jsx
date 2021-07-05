import {BrowserRouter, Route} from "react-router-dom";
import MasterPage from "./MasterPage";
import MainPage from "./mainPage";

const App = (props) => {

    return(
        <div className="Page_wrapper">

            <BrowserRouter>
                <Route path='/main' render={() => <MainPage  />}/>
                <Route path='/master' render={() => <MasterPage masterInform={props.state} />} />
            </BrowserRouter>
        </div>
        )

}

export default App
