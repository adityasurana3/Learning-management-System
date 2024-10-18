import axios from "axios";
import { useState } from "react";

const base_url = 'http://127.0.0.1:8000/api/login/'
function TeacherLogin(){
    const [login, setLoginData] = useState({
        'email': '',
        'password': ''
    })
    const handleInput = (e) => {
        const {name, value} = e.target;
        setLoginData((prevState)=>({
            ...prevState,
            [name]: value
        }))
    }
    const handleLoginSubmit = async (e) => {
        e.preventDefault()
        const loginData = new FormData;
        loginData.append('email', login.email)
        loginData.append('password', login.password)
        try {
            const response = await axios.post(base_url, loginData)
            if (response.data.bool === true){
                localStorage.setItem('teacherLogin', true);
                window.location.href = '/teacher-dashboard'
            }
            
        } catch (error) {
            console.log(error);
        }
    }
    const teacerLoginStatus = localStorage.getItem('teacherLogin');
    if (teacerLoginStatus){
        window.location.href = '/teacher-dashboard'
    }
    return(
        <div className="container mt-4">
            <div className="row">
                <div className="col-6 offset-3">
                    <div className="card">
                        <h5 className="card-header">Teacher Login</h5>
                        <div className="card-body">
                        <form onSubmit={handleLoginSubmit}>
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                                <input type="email" onChange={handleInput} name="email" value={login.email} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                                <input type="password" onChange={handleInput} name="password" value={login.password} className="form-control" id="exampleInputPassword1" />
                            </div>
                            <div className="mb-3 form-check">
                                <label className="form-check-label" htmlFor="exampleCheck1">Remember Me</label>
                                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                            </div>
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TeacherLogin;