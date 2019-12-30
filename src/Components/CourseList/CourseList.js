import React, { Component, Fragment } from "react";

class CourseList extends Component{

    state = {
        isEdit : false
    }

    // render course item
    renderCourse = () =>{
        return (
                <li>
                    <span>{this.props.course.name}</span>
                    <button onClick={() =>{this.toggleState()}} >Edit course</button>
                    <button onClick={() => {this.props.deleteCourse(this.props.index)}} >Delete Course</button>
                </li>
        )
    }

    // toggleState

    toggleState = () => {
        let {isEdit} = this.state;
        this.setState({
            isEdit: !isEdit
        })
    }

    updateCourseItem = (e) => {
        e.preventDefault();
        this.props.editCourse(this.props.index, this.input.value);
        this.toggleState();
    }

    // render update form
    renderUpdateForm = () => {
        return (
            <form onSubmit={this.updateCourseItem}>
                <input type="text" ref={(v)=>{this.input = v}} defaultValue={this.props.course.name}></input>
                <button>update Course</button>
            </form>
        )
    }

    render(){
        let isEdit = this.state.isEdit
        return(
            <Fragment>
                { isEdit ? this.renderUpdateForm() : this.renderCourse()}
            </Fragment>
        );
    }
}

export default CourseList 