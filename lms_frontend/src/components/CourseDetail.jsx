import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function CourseDetail() {
    const { course_id } = useParams();
    return (
        <div className="container mt-3">
            <div className="row">
                <div className="col-4">
                    <img src="/src/assets/react.svg" className="img-thumbnail" alt="" style={{height:'300px'}}/>
                </div>
                <div className="col-8">
                    <h3>Course Title</h3>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui dicta culpa quas, commodi sit nisi fugiat totam expedita maiores ex inventore voluptatibus aut voluptate exercitationem vero, placeat ad perferendis hic.</p>
                    <p className="fw-bold">Course by: <Link to="/teacher-detail/1">Teacher Name</Link></p>
                    <p className="fw-bold">Duration: 3 hours and 30 min</p>
                    <p className="fw-bold">Total enrolled: 365</p>
                    <p className="fw-bold">Rating: 4.5/5</p>
                </div>
            </div>
            <div className="card mt-4">
                <div className="card-header">
                    <h5>Course Video</h5>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">Introduction
                        <span className="float-end">
                            <span className="me-5">1 Hour 30 min</span>
                            <button className="btn btn-sm btn-danger float-end" data-bs-toggle="modal" data-bs-target="#videomodal"><i className="bi bi-play"></i></button>
                        </span>
                        <div className="modal fade" id="videomodal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div className="modal-dialog modal-xl">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div className="modal-body">
                                        <div className="ratio ratio-16x9">
                                            <iframe src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" title="YouTube video" allowFullScreen></iframe>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className="list-group-item">Project Setup
                        <span className="float-end">
                            <span className="me-5">1 Hour 30 min</span>
                            <button className="btn btn-sm btn-danger float-end"><i className="bi bi-play"></i></button>
                        </span>
                    </li>
                    <li className="list-group-item">Project 1
                        <span className="float-end">
                            <span className="me-5">1 Hour 30 min</span>
                            <button className="btn btn-sm btn-danger float-end"><i className="bi bi-play"></i></button>
                        </span>
                    </li>
                </ul>
            </div>
            <h3 className="pb-1 mb-4 mt-5">Related Courses</h3>
            <div className="row">
                <div className="col-md-3">
                    <div className="card">
                        <Link to="detail/1"><img src="/src/assets/react.svg" className="card-img-top" alt="..." /></Link>
                        <div className="card-body">
                            <h5 className="card-title"><Link to="detail/1">Course Name</Link></h5>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card">
                        <a href=""><img src="/src/assets/react.svg" className="card-img-top" alt="..." /></a>
                        <div className="card-body">
                            <h5 className="card-title"><a href="">Course Name</a></h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CourseDetail;