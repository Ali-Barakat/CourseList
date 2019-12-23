import React, { Component, Fragment } from "react";

class CourseList extends Component{

    render(){
        return(
            <Fragment>
                <li>{this.props.details.name}</li>
            </Fragment>
        )
    }
}

export default CourseList