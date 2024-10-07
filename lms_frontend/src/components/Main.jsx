import About from "./About";
import Footer from "./Footer";
import Header from "./Header";
import Home from "./Home";
import { Routes, Route } from "react-router-dom";

function Main(){
    return (
        <>
        <Header />
        <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/about' element={<About />}/>
        </Routes>
        <Footer />
        </>
    )
}

export default Main