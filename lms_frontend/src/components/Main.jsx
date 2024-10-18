import { Routes, Route } from "react-router-dom";
import About from "./About";
import CourseDetail from "./CourseDetail";
import Footer from "./Footer";
import Header from "./Header";
import Home from "./Home";
import AllCourses from "./AllCourses";
import PopularCourses from "./PopularCourses";
import PopularTeacher from "./PopularTeacher";
import CategoryCourses from "./CategoryCourses";

// Users
import UserRegister from "./User/UserRegister";
import UserLogin from "./User/UserLogin";
import Dashboard from "./User/Dashboard";
import MyCourses from "./User/MyCourses";
import FavouriteCourses from "./User/FavouriteCourses";
import RecommendedCourses from "./User/RecommendedCourses";
import ProfileSetting from "./User/ProfileSettings";
import ChangePassword from "./User/ChangePassowrd";

// Teachers
import TeacherLogin from "./Teacher/TeacherLogin";
import TeacherRegister from "./Teacher/TeacherRegister";
import TeacherDashboard from "./Teacher/TeacherDashboard";
import AddCourse from "./Teacher/AddCourse";
import TeacherChangePassword from "./Teacher/TeacherChangePassowrd";
import TeacherProfileSetting from "./Teacher/TeacherProfileSettings";
import TeacherCourses from "./Teacher/TeacherCourses";
import UserList from "./Teacher/UserList";
import TeacherDetail from "./TeacherDetail";
import TeacherLogout from "./Teacher/TeacherLogout";


function Main() {
    return (
        <>
            <Header />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/detail/:course_id' element={<CourseDetail />} />
                <Route path='/user-register' element={<UserRegister />} />
                <Route path='/user-login' element={<UserLogin />} />
                <Route path='/user-dashboard' element={<Dashboard />} />
                <Route path='/my-courses' element={<MyCourses />} />
                <Route path='/favourite-courses' element={<FavouriteCourses />} />
                <Route path='/recommended-courses' element={<RecommendedCourses />} />
                <Route path='/profile-settings' element={<ProfileSetting />} />
                <Route path='/change-password' element={<ChangePassword />} />
                <Route path='/teacher-login' element={<TeacherLogin />} />
                <Route path='/teacher-logout' element={<TeacherLogout />} />
                <Route path='/teacher-register' element={<TeacherRegister />} />
                <Route path='/teacher-dashboard' element={<TeacherDashboard />} />
                <Route path='/add-courses' element={<AddCourse />} />
                <Route path='/teacher-courses' element={<TeacherCourses />} />
                <Route path='/my-users' element={<UserList />} />
                <Route path='/teacher-profile-settings' element={<TeacherProfileSetting />} />
                <Route path='/teacher-change-password' element={<TeacherChangePassword />} />
                <Route path='/teacher-detail/:teacherId' element={<TeacherDetail />} />
                <Route path='/all-courses' element={<AllCourses />} />
                <Route path='/popular-courses' element={<PopularCourses />} />
                <Route path='/popular-teachers' element={<PopularTeacher />} />
                <Route path='/category-courses/:category_slug' element={<CategoryCourses />} />
            </Routes>
            <Footer />
        </>
    )
}

export default Main