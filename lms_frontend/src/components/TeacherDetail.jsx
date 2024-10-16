import { Link, useParams } from "react-router-dom";


function TeacherDetail(){
    const { teacherId } = useParams()
    return(
        <div className="container mt-3">
            <div className="row">
                <div className="col-4">
                    <img src="/src/assets/react.svg" className="img-thumbnail" alt="" style={{height:'300px'}}/>
                </div>
                <div className="col-8">
                    <h3>John Doe</h3>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui dicta culpa quas, commodi sit nisi fugiat totam expedita maiores ex inventore voluptatibus aut voluptate exercitationem vero, placeat ad perferendis hic.</p>
                    <p className="fw-bold">Skills: <Link to="/">Python</Link></p>
                    <p className="fw-bold">Recent Course: <Link to="/">Python</Link></p>
                    <p className="fw-bold">Rating: 4.5/5</p>
                </div>
            </div>
            <div className="card mt-4">
                <div className="card-header">
                    <h5>Course List</h5>
                </div>
                <div className="list-group list-group-flush">
                    <Link to="/detail/1" className="list-group-item list-group-item-action">Python Courses</Link>
                    <Link to="/" className="list-group-item list-group-item-action">React Courses</Link>
                    <Link to="/" className="list-group-item list-group-item-action">Djanog Courses</Link>
                    <Link to="/" className="list-group-item list-group-item-action">DRF Courses</Link>
                    <Link to="/" className="list-group-item list-group-item-action">JavaScript Courses</Link>
                </div>
            </div>
        </div>
    )
}

export default TeacherDetail;