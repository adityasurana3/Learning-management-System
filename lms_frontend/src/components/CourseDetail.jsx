import { useParams } from "react-router-dom";

function CourseDetail(){
    const {course_id} = useParams();
    return(
        <>
        <p>Course detail {course_id}</p>
        </>
    )
}

export default CourseDetail;