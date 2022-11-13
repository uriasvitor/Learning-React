import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Movie from "./pages/Movie"
import Header from "./components/Header";
import Erro from "./pages/Erro";
import Favoritos from "./pages/Favoritos";


function RoutesApp(){
    return(
        <BrowserRouter>
        <Header></Header>
            <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/movie/:id" element={<Movie/>}></Route>
                <Route path="/favoritos" element={<Favoritos/>}></Route>
                
                <Route path="*" element={<Erro/>}></Route>
            </Routes>
        </BrowserRouter>   
    )
}

export default RoutesApp;