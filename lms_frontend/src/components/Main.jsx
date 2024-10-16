import About from "./About";
import CourseDetail from "./CourseDetail";
import Footer from "./Footer";
import Header from "./Header";
import Home from "./Home";
import { Routes, Route } from "react-router-dom";
import UserRegister from "./user/UserRegister";
import UserLogin from "./user/UserLogin";
import Dashboard from "./user/Dashboard";
import MyCourses from "./user/MyCourses";
import FavouriteCourses from "./user/FavouriteCourses";
import RecommendedCourses from "./user/RecommendedCourses";
import ProfileSetting from "./user/ProfileSettings";
import ChangePassword from "./user/ChangePassowrd";

function Main(){
    return (
        <>
        <Header />
        <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/about' element={<About />}/>
            <Route path='/detail/:course_id' element={<CourseDetail />}/>
            <Route path='/user-register' element={<UserRegister />}/>
            <Route path='/user-login' element={<UserLogin />}/>
            <Route path='/user-dashboard' element={<Dashboard />}/>
            <Route path='/my-courses' element={<MyCourses />}/>
            <Route path='/favourite-courses' element={<FavouriteCourses />}/>
            <Route path='/recommended-courses' element={<RecommendedCourses />}/>
            <Route path='/profile-settings' element={<ProfileSetting />}/>
            <Route path='/change-password' element={<ChangePassword />}/>
        </Routes>
        <Footer />
        </>
    )
}

export default Main