import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Movie from "./pages/Movie"
import Header from "./components/Header";


function RoutesApp(){
    return(
        <BrowserRouter>
        <Header></Header>
            <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/movie/:id" element={<Movie/>}></Route>
            </Routes>
        </BrowserRouter>   
    )
}

export default RoutesApp;