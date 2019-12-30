import React from 'react';


function CourseForm (props) {
    return(
        <form onSubmit={props.addCourse}>
            <input type="text" value={props.current}  onChange={props.updateCourse}></input>
            <button type="submit" >Add Course</button>
        </form>
    )
}
export default CourseForm;