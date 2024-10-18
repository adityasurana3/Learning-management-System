function TeacherLogout(){
    localStorage.removeItem('teacherLogin');
    window.location.href = '/teacher-login';
}

export default TeacherLogout

