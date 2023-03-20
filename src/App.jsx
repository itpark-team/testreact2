import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

import Hello from "./components/Hello";
import NameBlock from "./components/NameBlock";
import TitleBlock from "./components/TitleBlock";
import Filtering from "./components/Filtering";

function App() {

    // function myAlert(data) {
    //     console.log(data);
    //     alert("HURRAY " + data);
    // }

    let needShow = true;

    return (
        <div>
            {/*<Hello name={"AAAAAA"} title={11111} descr={{id: 1, name: "BBB"}} arr={[1, 2, 4]} func={myAlert}/>*/}
            {/*<TitleBlock/>*/}
            {/*<NameBlock/>*/}

            {/*{*/}
            {/*    needShow*/}
            {/*        ? <h1>SHOW</h1>*/}
            {/*        : <h1>NE SHOW</h1>*/}
            {/*}*/}

            {/*<h1 className={needShow ? "blue" : "notblue"}>AAAAA</h1>*/}

            {/*<Filtering/>*/}
            <button className={"btn btn-primary"}>Press me</button>

            <div>
                <marquee behavior="" direction="">
                    <button className={"mybutton"}>AAA</button>
                </marquee>
            </div>
            <h1>HELLO WORLD</h1>
        </div>
    );
}

export default App;
