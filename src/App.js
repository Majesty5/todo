import React,  {Component} from 'react';

class ToDoList extends Component {
  constructor () {
    super();
    this.state ={
      toDos: [],
      currenttoDo: "",
    }
  }

  //This is where we code our methods
handleChange = event =>{
  console.log(event.target.value)
};
addItem = event => {
  console.log("addItem Method fired")
};
}

render() {
  return(
    <div className="container">
    <form onSubmit={this.addItem}>
    <label htmlFor="taskName">Task Name:</label>
    <input onChange={this.handleChange} name="taskName" type="text"placeholder="Add todo here!"/>
    <button type="submit">Add Task</button>
    </form>
    </div>
  );
}


export default ToDoList;
