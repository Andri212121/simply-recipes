import './App.css';
import Header from "./components/header/header";
import {BrowserRouter} from "react-router-dom";
import Main from "./components/main/main";


function App() {
    return (
        <>
            <BrowserRouter>
                <Header/>
                <Main/>
            </BrowserRouter>
        </>
    );
}

export default App;
