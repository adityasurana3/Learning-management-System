import Sidebar from "./Sidebar";

function ChangePassword(){
    return(
        <div className="container mt-4">
            <div className="row">
                <aside className="col-md-3">
                    <Sidebar />
                </aside>
                <section className="col-md-9">
                    <form action="" method="post">
                        <div className="card">
                            <h5 className="card-header">Change Password</h5>
                            <div className="card-body">
                                <div className="mb-3 row">
                                    <label htmlFor="password" className="col-sm-2 col-form-label">New Password</label>
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

export default ChangePassword;