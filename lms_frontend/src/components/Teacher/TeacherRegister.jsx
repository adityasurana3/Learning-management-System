import { useEffect, useState } from "react";
import axios from 'axios'

const base_url = 'http://127.0.0.1:8000/api/teacher/'

function TeacherRegister(){
    const [teacherDetail, setTeacherDetail] = useState({
        'full_name': '',
        'email': '',
        'qualification': '',
        'skills': '',
        'mobile_no': '',
        'password': '',
        'status': '',
    })

    function handleInput(e){
        const {name, value} = e.target;
        setTeacherDetail((prevState) => ({
            ...prevState,
            [name]: value
        }));
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        const teacherFormData = new FormData();
        
        teacherFormData.append('full_name', teacherDetail.full_name)
        teacherFormData.append('email', teacherDetail.email)
        teacherFormData.append('qualification', teacherDetail.qualification)
        teacherFormData.append('skills', teacherDetail.skills)
        teacherFormData.append('mobile_no', teacherDetail.mobile_no)
        teacherFormData.append('password', teacherDetail.password)
        
        try{
            const response = await axios.post(base_url, teacherFormData)
            setTeacherDetail({
                full_name: '',
                email: '',
                qualification: '',
                skills: '',
                mobile_no: '',
                password: '',
                status: 'success',
            });
        }catch(error){
            console.log(error);
            setTeacherDetail((prevState) => ({
                ...prevState,
                status: 'error'
            }));
        }
    }
    const teacerLoginStatus = localStorage.getItem('teacherLogin');
    if (teacerLoginStatus){
        window.location.href = '/teacher-dashboard'
    }
    return (
        <div className="container mt-4">
            <div className="row">
                <div className="col-6 offset-3">
                    {teacherDetail.status === 'success' && <p className="text-success">Thank you for registering!</p>}
                    {teacherDetail.status === 'error' && <p className="text-danger">Something went wrong</p>}
                    <div className="card">
                        <h5 className="card-header">Teacher Register</h5>
                        <div className="card-body">
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label htmlFor="fullName" className="form-label">Full Name</label>
                                <input type="text" name="full_name" className="form-control" id="fullName" value={teacherDetail.full_name} onChange={handleInput} required/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                                <input type="email" name="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={teacherDetail.email} onChange={handleInput} required />
                                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="qualification" className="form-label">Qualification</label>
                                <input type="text" name="qualification" className="form-control" id="qualification" value={teacherDetail.qualification} onChange={handleInput} required />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="skill" className="form-label">Skils</label>
                                <textarea className="form-control" id="skill"aria-describedby="help" name="skills" value={teacherDetail.skills} onChange={handleInput} required/>
                                <div id="help" className="form-text">Python, JavaScript</div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="mobile" className="form-label">Mobile No</label>
                                <input type="number" className="form-control" id="mobile" name="mobile_no" aria-describedby="help" value={teacherDetail.mobile_no} onChange={handleInput} required/>
                                <div id="help" className="form-text">Python, JavaScript</div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                                <input type="password" className="form-control" id="exampleInputPassword1" name="password" value={teacherDetail.password} onChange={handleInput} required/>
                            </div>
                            <button type="submit" className="btn btn-primary">Register</button>
                        </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TeacherRegister;