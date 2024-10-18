import { useEffect, useState } from "react";

function TeacherRegister(){
    const [teacherDetail, setTeacherDetail] = useState({
        'full_name': '',
        'email': '',
        'qualification': '',
        'skills': '',
        'mobile_number': '',
        'password': ''
    })    

    function handleInput(e){
        const {name, value} = e.target;
        setTeacherDetail({
            ...value,
            [name]: value
        });
    }
    console.log(teacherDetail);
    
    return (
        <div className="container mt-4">
            <div className="row">
                <div className="col-6 offset-3">
                    <div className="card">
                        <h5 className="card-header">Teacher Register</h5>
                        <div className="card-body">
                        <form>
                            <div className="mb-3">
                                <label htmlFor="fullName" className="form-label">Full Name</label>
                                <input type="text" name="full_name" className="form-control" id="fullName" value={teacherDetail.full_name} onChange={handleInput}/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                                <input type="email" name="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={teacherDetail.email} onChange={handleInput} />
                                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="qualification" className="form-label">Qualification</label>
                                <input type="text" name="qualification" className="form-control" id="qualification" value={teacherDetail.qualification} onChange={handleInput} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="skill" className="form-label">Skils</label>
                                <textarea className="form-control" id="skill"aria-describedby="help" name="skills" value={teacherDetail.skills} onChange={handleInput}/>
                                <div id="help" className="form-text">Python, JavaScript</div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="mobile" className="form-label">Mobile No</label>
                                <input type="number" className="form-control" id="mobile" name="mobile_number" aria-describedby="help" value={teacherDetail.mobile_number} onChange={handleInput}/>
                                <div id="help" className="form-text">Python, JavaScript</div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                                <input type="password" className="form-control" id="exampleInputPassword1" name="password" value={teacherDetail.password} onChange={handleInput}/>
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