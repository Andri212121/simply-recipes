import './App.css';
import {BrowserRouter} from "react-router-dom";
import Main from "./components/main/main";

function App() {
    return (
        <>
            <BrowserRouter>
                <Main/>
            </BrowserRouter>
        </>
    );
}

export default App;
