import Sidebar from "./Sidebar";

function ProfileSetting(){
    return(
        <div className="container mt-4">
            <div className="row">
                <aside className="col-md-3">
                    <Sidebar />
                </aside>
                <section className="col-md-9">
                    <form action="" method="post">
                        <div className="card">
                            <h5 className="card-header">Profile Settings</h5>
                            <div className="card-body">
                                <div className="mb-3 row">
                                    <label htmlFor="staticName" className="col-sm-2 col-form-label">Full Name</label>
                                    <div className="col-sm-10">
                                        <input type="text" className="form-control" id="staticName" />
                                    </div>
                                </div>
                                <div className="mb-3 row">
                                    <label htmlFor="staticEmail" className="col-sm-2 col-form-label">Email</label>
                                    <div className="col-sm-10">
                                        <input type="text" className="form-control" id="staticEmail" />
                                    </div>
                                </div>
                                <div className="mb-3 row">
                                    <label htmlFor="profile-photo" className="col-sm-2 col-form-label">Profile Photo</label>
                                    <div className="col-sm-10">
                                        <input type="file" className="form-control" id="profile-photo" />
                                    </div>
                                </div>
                                <div className="mb-3 row">
                                    <label htmlFor="interest" className="col-sm-2 col-form-label">Interest</label>
                                    <div className="col-sm-10">
                                        <input type="text" className="form-control" id="interest" />
                                    </div>
                                </div>
                                <div className="mb-3 row">
                                    <label htmlFor="password" className="col-sm-2 col-form-label">Password</label>
                                    <div className="col-sm-10">
                                        <input type="password" className="form-control" id="password" />
                                    </div>
                                </div>
                                <button className="btn btn-primary">Update</button>
                            </div>
                        </div>
                    </form>
                </section>
            </div>
        </div>
    )
}

export default ProfileSetting;