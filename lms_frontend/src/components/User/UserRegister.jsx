function UserRegister(){
    return (
        <div className="container mt-4">
            <div className="row">
                <div className="col-6 offset-3">
                    <div className="card">
                        <h5 className="card-header">User Register</h5>
                        <div className="card-body">
                        <form>
                            <div className="mb-3">
                                <label htmlFor="fullName" className="form-label">Full Name</label>
                                <input type="text" className="form-control" id="fullName" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="username" className="form-label">Username</label>
                                <input type="text" className="form-control" id="username" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="interests" className="form-label">Interests</label>
                                <textarea className="form-control" id="interests"aria-describedby="help"/>
                                <div id="help" className="form-text">Python, JavaScript</div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                                <input type="password" className="form-control" id="exampleInputPassword1" />
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

export default UserRegister;