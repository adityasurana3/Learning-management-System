import { Link } from "react-router-dom";
import Pagination from "./Pagination";
import HeaderTitle from "./HeaderTitle";
import CardFooter from "./CardFooter";
import { useEffect, useState } from "react";
import axios from 'axios'


const BASE_URL = 'http://127.0.0.1:8000/api/'
function PopularTeacher(){
    const [teacher, setTeacher] = useState(null);

    useEffect(() => {
        axios.get(BASE_URL + 'teacher/').then((response) =>{
            setTeacher(response.data)
        })
    }, [])
    
    return(
        <div className="container mt-3">
            <HeaderTitle title="Popular Teacher" />
            <div className="row">
                <div className="col-md-3 mb-4">
                <div className="card">
                    <Link to="detail/1"><img src="src/assets/react.svg" className="card-img-top" alt="..." /></Link>
                    <div className="card-body">
                        <h5 className="card-title"><Link to="detail/1">Teacher Name</Link></h5>
                    </div>
                    </div>
                </div>
                <div className="col-md-3 mb-4">
                <div className="card">
                    <a href=""><img src="src/assets/react.svg" className="card-img-top" alt="..." /></a>
                    <div className="card-body">
                        <h5 className="card-title"><a href="">Teacher Name</a></h5>
                    </div>
                    <CardFooter rating={"4.5/5"} teacherOrCourse={"teacher"}/>
                    </div>
                </div>
                <div className="col-md-3 mb-4">
                <div className="card">
                    <a href=""><img src="src/assets/react.svg" className="card-img-top" alt="..." /></a>
                    <div className="card-body">
                        <h5 className="card-title"><a href="">Teacher Name</a></h5>
                    </div>
                    </div>
                </div>
                <div className="col-md-3 mb-4">
                    <div className="card">
                        <a href=""><img src="src/assets/react.svg" className="card-img-top" alt="..." /></a>
                        <div className="card-body">
                            <h5 className="card-title"><a href="">Teacher Name</a></h5>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 mb-4">
                    <div className="card">
                        <a href=""><img src="src/assets/react.svg" className="card-img-top" alt="..." /></a>
                        <div className="card-body">
                            <h5 className="card-title"><a href="">Teacher Name</a></h5>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 mb-4">
                    <div className="card">
                        <a href=""><img src="src/assets/react.svg" className="card-img-top" alt="..." /></a>
                        <div className="card-body">
                            <h5 className="card-title"><a href="">Teacher Name</a></h5>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 mb-4">
                    <div className="card">
                        <a href=""><img src="src/assets/react.svg" className="card-img-top" alt="..." /></a>
                        <div className="card-body">
                            <h5 className="card-title"><a href="">Teacher Name</a></h5>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 mb-4">
                    <div className="card">
                        <a href=""><img src="src/assets/react.svg" className="card-img-top" alt="..." /></a>
                        <div className="card-body">
                            <h5 className="card-title"><a href="">Teacher Name</a></h5>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 mb-4">
                    <div className="card">
                        <a href=""><img src="src/assets/react.svg" className="card-img-top" alt="..." /></a>
                        <div className="card-body">
                            <h5 className="card-title"><a href="">Teacher Name</a></h5>
                        </div>
                    </div>
                </div>
            </div>
            {/* Pagination */}
            <Pagination />
            {/* End Pagination */}
        </div>
    )
}

export default PopularTeacher;