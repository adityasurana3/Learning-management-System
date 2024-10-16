import { Link } from "react-router-dom";


function RecommendedCourses(){
    return(
        <div className="card">
            <h5 className="card-header">Recommended Courses</h5>
            <div className="card-body">
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th>Course Name</th>
                            <th>Created By</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Python</td>
                            <td><Link to="">Aditya</Link></td>
                            <td><button className="btn btn-danger">Delete</button></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default RecommendedCourses;