import './App.css';
import Header from "./components/header/header";
import {BrowserRouter} from "react-router-dom";


function App() {
    return (
        <>
            <BrowserRouter>
                <Header/>
            </BrowserRouter>
        </>
    );
}

export default App;
