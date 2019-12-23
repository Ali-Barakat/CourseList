import React, {Component} from 'react';

import CourseForm from './Components/CourseForm/CourseForm';
import CourseList from './Components/CourseList/CourseList';


class App extends Component {

  state = {
    courses : [
      {name: 'HTML'},
      {name: 'CSS'},
      {name: 'jQuery'}
    ]
  }
  render(){
    const courses = this.state.courses
    const courselist = courses.map((course, index)=>{
      return <CourseList details={course} key={index}></CourseList>
    })

    return (
      <section className="container">
        <h2>Add courses</h2>
        <CourseForm></CourseForm>
        <ul>{courselist}</ul>
      </section>
    );
  }
}

export default App;
