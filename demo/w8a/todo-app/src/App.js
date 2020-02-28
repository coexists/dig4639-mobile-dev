import React from 'react';
import './App.css';
import todoList from "./todoList.json"


//THIS IS THE START OF LAB 4
function TodoItem(props) {
  return <p className='card' onClick={() => props.removeTask(props.id)}>{props.content}</p>
}


class TodoList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      todoList,
      hideCompletedItems:false
    }
    this.currentId = 4;
  }

  addTask(e) {
    console.log(this.refs.taskContent)
    let todoList = this.state.todoList
    todoList.push(
      {"id": this.currentId, "completed": true, "priority": 1, "content": this.refs.taskContent.value})
      this.currentId++
      this.setState({todoList}) 
  }

  //takes task id and filters it
  removeTask(id) {
    console.log(id)
      let todoList = this.state.todoList
      console.log(todoList)
      todoList = todoList.filter((v) => v.id !== id)
      console.log(todoList)
      this.setState({todoList})
  }
  render() {
    return (
    <>
    <input type="text" ref="taskContent" />
    <input type="button" value="Add Task" onClick={(e) => this.addTask(e)} /> 
    <br />
    <input ref="hideCompletedItemsCheckbox" type="checkbox" id="hideCompletedItems" 
    name="hideCompletedItems" value="hideCompletedItems"
    onChange={(e) => this.setState({ hideCompletedItemsCheckbox: e.target.checked })} />
    <label htmlFor="hideCompletedItems"> submit </label><br></br>
    { 
    ((this.state.hideCompletedItems) ? this.state.todoList
    .filter((v) => !v.completed) : this.state.todoList)
    .map((v) => <TodoItem id={v.id} removeTask={(id) => this.removeTask(id)} 
     key={v.id} content={v.content}
    priority={v.priority}
    completed={v.completed} />) }
  </>)
  }
}


function App(props) {
  return (
    <TodoList />
  )
}



/*
const todoList = [
  {
    content: 'Task 1', priority: 2, completed: true
  },
  {
    content: 'Task 2', priority: 1, completed: true
  },
  {
    content: 'Task 3', priority: 3, completed: false
  }
]

function TodoItem(props) {
  return <p>{props.content}</p>
}

function App() {
const todoListFiltered = todoList.filter((value) => value.completed)

let todoArray = todoListFiltered.map(
  (value) => <TodoItem content={value.content} />
)

const todoArray = todoList.map(
  (value) => <TodoItem content={value.content} />
) 
  
  const todoArray = [
    <div>
    <TodoItem content ="Item1"/>
    <TodoItem content ="Item2"/>
    <TodoItem content ="Item3"/>
    </div>
  ]
  

  return (
      {todoList.filter((v) => v.completed).map(
      (v) => <TodoItem content={v.content}  priority={v.conten}/>)}}}
      
  )


*/
export default App;
