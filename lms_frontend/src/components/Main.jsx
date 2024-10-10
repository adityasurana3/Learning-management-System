import About from "./About";
import CourseDetail from "./CourseDetail";
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
            <Route path='/detail/:course_id' element={<CourseDetail />}/>
        </Routes>
        <Footer />
        </>
    )
}

export default Main