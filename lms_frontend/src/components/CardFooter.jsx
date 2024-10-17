function CardFooter({rating, views, teacherOrCourse}){
    console.log(views);
    return(
        <div className="card-footer">
            <div className="title">
                <span>Rating: {rating}</span>
                {
                    teacherOrCourse ==='course'?<span className="float-end">Views: {views}</span>: <></>
                }
                
            </div>
        </div>
    )
}

export default CardFooter;