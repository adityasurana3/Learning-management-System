import { Link } from "react-router-dom";
import Pagination from "./Pagination";
import HeaderTitle from "./HeaderTitle";

function AllCourses(){
    return(
        <div className="container mt-3">
            {/* Latest courses */}
            <HeaderTitle title={"All Courses"}/>
            <div className="row">
                <div className="col-md-3 mb-4">
                <div className="card">
                    <Link to="detail/1"><img src="src/assets/react.svg" className="card-img-top" alt="..." /></Link>
                    <div className="card-body">
                        <h5 className="card-title"><Link to="detail/1">Course Name</Link></h5>
                    </div>
                    </div>
                </div>
                <div className="col-md-3 mb-4">
                <div className="card">
                    <a href=""><img src="src/assets/react.svg" className="card-img-top" alt="..." /></a>
                    <div className="card-body">
                        <h5 className="card-title"><a href="">Course Name</a></h5>
                    </div>
                    </div>
                </div>
                <div className="col-md-3 mb-4">
                <div className="card">
                    <a href=""><img src="src/assets/react.svg" className="card-img-top" alt="..." /></a>
                    <div className="card-body">
                        <h5 className="card-title"><a href="">Course Name</a></h5>
                    </div>
                    </div>
                </div>
                <div className="col-md-3 mb-4">
                    <div className="card">
                        <a href=""><img src="src/assets/react.svg" className="card-img-top" alt="..." /></a>
                        <div className="card-body">
                            <h5 className="card-title"><a href="">Course Name</a></h5>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 mb-4">
                    <div className="card">
                        <a href=""><img src="src/assets/react.svg" className="card-img-top" alt="..." /></a>
                        <div className="card-body">
                            <h5 className="card-title"><a href="">Course Name</a></h5>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 mb-4">
                    <div className="card">
                        <a href=""><img src="src/assets/react.svg" className="card-img-top" alt="..." /></a>
                        <div className="card-body">
                            <h5 className="card-title"><a href="">Course Name</a></h5>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 mb-4">
                    <div className="card">
                        <a href=""><img src="src/assets/react.svg" className="card-img-top" alt="..." /></a>
                        <div className="card-body">
                            <h5 className="card-title"><a href="">Course Name</a></h5>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 mb-4">
                    <div className="card">
                        <a href=""><img src="src/assets/react.svg" className="card-img-top" alt="..." /></a>
                        <div className="card-body">
                            <h5 className="card-title"><a href="">Course Name</a></h5>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 mb-4">
                    <div className="card">
                        <a href=""><img src="src/assets/react.svg" className="card-img-top" alt="..." /></a>
                        <div className="card-body">
                            <h5 className="card-title"><a href="">Course Name</a></h5>
                        </div>
                    </div>
                </div>
            </div>
            {/* End latest Courses */}
            {/* Pagination */}
            <Pagination />
            {/* End Pagination */}
        </div>
    )
}

export default AllCourses;