import TeacherSidebar from "./TeacherSidebar";

function AddCourse(){
    return(
        <div className="container mt-4">
            <div className="row">
                <aside className="col-md-3">
                    <TeacherSidebar />
                </aside>
                <section className="col-md-9">
                    <form action="" method="post">
                        <div className="card">
                            <h5 className="card-header">Add Courses</h5>
                            <div className="card-body">
                                <div className="mb-3 row">
                                    <label htmlFor="title" className="col-sm-2 col-form-label">Title</label>
                                    <input type="text" className="form-control" id="title" />
                                </div>
                                <div className="mb-3 row">
                                    <label htmlFor="description" className="col-sm-2 col-form-label">Description</label>
                                    <textarea className="form-control" id="description" />
                                </div>
                                <div className="mb-3 row">
                                    <label htmlFor="course-video" className="col-sm-2 col-form-label">Featured Image</label>
                                    <input type="file" className="form-control" id="course-video" />
                                </div>
                                <div className="mb-3 row">
                                    <label htmlFor="technologies" className="col-sm-2 col-form-label">Technologies</label>
                                    <textarea className="form-control" id="technologies" />
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

export default AddCourse;