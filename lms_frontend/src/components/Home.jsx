import { useEffect } from 'react';
import {Link} from 'react-router-dom'

function Home(){
    useEffect(() =>{
        document.title = "LMS"
    })
    return (
        <div className="container mt-4">
            {/* Latest courses */}
            <h3 className="pb-1 mb-4">Latest Courses <Link to="/all-courses" className="float-end">See all</Link></h3>
            <div className="row">
                <div className="col-md-3">
                <div className="card">
                    <Link to="detail/1"><img src="src/assets/react.svg" className="card-img-top" alt="..." /></Link>
                    <div className="card-body">
                        <h5 className="card-title"><Link to="detail/1">Course Name</Link></h5>
                    </div>
                    </div>
                </div>
                <div className="col-md-3">
                <div className="card">
                    <a href=""><img src="src/assets/react.svg" className="card-img-top" alt="..." /></a>
                    <div className="card-body">
                        <h5 className="card-title"><a href="">Course Name</a></h5>
                    </div>
                    </div>
                </div>
                <div className="col-md-3">
                <div className="card">
                    <a href=""><img src="src/assets/react.svg" className="card-img-top" alt="..." /></a>
                    <div className="card-body">
                        <h5 className="card-title"><a href="">Course Name</a></h5>
                    </div>
                    </div>
                </div>
                <div className="col-md-3">
                <div className="card">
                    <a href=""><img src="src/assets/react.svg" className="card-img-top" alt="..." /></a>
                    <div className="card-body">
                        <h5 className="card-title"><a href="">Course Name</a></h5>
                    </div>
                    </div>
                </div>
            </div>
            {/* End latest Courses */}

            {/* Popular courses */}
            <h3 className="pb-1 mb-4 mt-5">Popular Courses <Link to="/popular-courses" className="float-end">See all</Link></h3>
            <div className="row mb-4">
                <div className="col-md-3">
                <div className="card">
                    <a href=""><img src="src/assets/react.svg" className="card-img-top" alt="..." /></a>
                    <div className="card-body">
                        <h5 className="card-title"><a href="">Course Name</a></h5>
                    </div>
                    <div className="card-footer">
                        <div className="title">
                            <span>Rating: 4.5/5</span>
                            <span className='float-end'>Views: 365</span>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="col-md-3">
                <div className="card">
                    <a href=""><img src="src/assets/react.svg" className="card-img-top" alt="..." /></a>
                    <div className="card-body">
                        <h5 className="card-title"><a href="">Course Name</a></h5>
                    </div>
                    </div>
                </div>
                <div className="col-md-3">
                <div className="card">
                    <a href=""><img src="src/assets/react.svg" className="card-img-top" alt="..." /></a>
                    <div className="card-body">
                        <h5 className="card-title"><a href="">Course Name</a></h5>
                    </div>
                    </div>
                </div>
                <div className="col-md-3">
                <div className="card">
                    <a href=""><img src="src/assets/react.svg" className="card-img-top" alt="..." /></a>
                    <div className="card-body">
                        <h5 className="card-title"><a href="">Course Name</a></h5>
                    </div>
                    </div>
                </div>
            </div>
            {/* End Popular courses */}
            {/* Popular teacher */}
            <h3 className="pb-1 mb-4 mt-5">Popular Teacher <Link to="/popular-teachers" className="float-end">See all</Link></h3>
            <div className="row mb-4">
                <div className="col-md-3">
                    <div className="card">
                        <a href=""><img src="src/assets/react.svg" className="card-img-top" alt="..." /></a>
                        <div className="card-body">
                            <h5 className="card-title"><a href="">Teacher Name</a></h5>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                <div className="card">
                    <a href=""><img src="src/assets/react.svg" className="card-img-top" alt="..." /></a>
                    <div className="card-body">
                        <h5 className="card-title"><a href="">Teacher Name</a></h5>
                    </div>
                    </div>
                </div>
                <div className="col-md-3">
                <div className="card">
                    <a href=""><img src="src/assets/react.svg" className="card-img-top" alt="..." /></a>
                    <div className="card-body">
                        <h5 className="card-title"><a href="">Teacher Name</a></h5>
                    </div>
                    </div>
                </div>
                <div className="col-md-3">
                <div className="card">
                    <a href=""><img src="src/assets/react.svg" className="card-img-top" alt="..." /></a>
                    <div className="card-body">
                        <h5 className="card-title"><a href="">Teacher Name</a></h5>
                    </div>
                    </div>
                </div>
            </div>
            {/* End Popular teacher */}
            {/* Student teacher */}
            <h3 className="pb-1 mb-4 mt-5">Student testimonial</h3>
            <div id="carouselExampleIndicators" className="carousel slide bg-dark text-white py-5">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                    <figure className="text-center">
                        <blockquote className="blockquote">
                            <p>Lorem ipsum dolor sit amet.</p>
                        </blockquote>
                        <figcaption className="blockquote-footer">
                            Someone famous in <cite title="Source Title">Source Title</cite>
                        </figcaption>
                    </figure>
                    </div>
                    <div className="carousel-item">
                    <figure className="text-center">
                        <blockquote className="blockquote">
                            <p>Lorem ipsum dolor sit amet.</p>
                        </blockquote>
                        <figcaption className="blockquote-footer">
                            Someone famous in <cite title="Source Title">Source Title</cite>
                        </figcaption>
                    </figure>
                    </div>
                    <div className="carousel-item">
                    <figure className="text-center">
                        <blockquote className="blockquote">
                            <p>Lorem ipsum dolor sit amet.</p>
                        </blockquote>
                        <figcaption className="blockquote-footer">
                            Someone famous in <cite title="Source Title">Source Title</cite>
                        </figcaption>
                    </figure>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
            {/* End Student teacher */}
        </div>
    )
}

export default Home;