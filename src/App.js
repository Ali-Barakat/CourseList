import React, {Component} from 'react';
import CourseForm from './Components/CourseForm/CourseForm';
import CourseList from './Components/CourseList/CourseList';


class App extends Component {

  state = {
    courses : [
      {name: 'HTML'},
      {name: 'CSS'},
      {name: 'jQuery'},
      {name: 'React'}
    ], 
    current : '',
    note: 'please add the name of the course'
  }

  updateCourse = (e)=>{
    this.setState({
      current: e.target.value
    })

  }

  // retrunNote = () =>{
  //   const note = '<p>add name<p>'
  //   return note = '<p>please add the name of the Course</p>'
  // }

  addCourse = (e) =>{
    e.preventDefault()
    if (this.state.current !=='') {
      let current = this.state.current;
      let courses = this.state.courses;
      courses.push({name: current})
  
      this.setState({
        courses,
        current: ''
      })
    } else {
      return false
    }
  }

  //delete course
  deleteCourse = (index) =>{
    let courses = this.state.courses;
    courses.splice(index, 1);
    this.setState({
      courses
    })
  }

  // editCourse
  editCourse = (index, value ) =>{
    let courses = this.state.courses;
    let course = courses[index];
    course['name'] = value;
    this.setState({
      courses
    })

  }

  render(){
    const {courses} = this.state
    const length = courses.length
    const courseList = length ? (
      courses.map((course, index)=>{
        return <CourseList deleteCourse={this.deleteCourse}
         course={course} key={index} index={index} editCourse={this.editCourse} > </CourseList>
      })
    ) : (<p>there are no courses to show</p>)


    const current = this.state.current
    let addCourseName = current !=='' ? 
      <CourseForm current={this.state.current}  updateCourse={this.updateCourse}
      addCourse={this.addCourse}  note={this.state.note}
      ></CourseForm>
    : <p>add name please</p>

    return (
      <section className="App">
        <h2>Add courses</h2>
        {addCourseName}
        <CourseForm current={this.state.current}  updateCourse={this.updateCourse}
         addCourse={this.addCourse}  note={this.state.note}
         ></CourseForm>
        <ul>{courseList}</ul>
      </section>
    );
  }
}

export default App;

