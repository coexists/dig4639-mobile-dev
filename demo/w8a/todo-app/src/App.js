import React from 'react';
//import logo from './logo.svg';
import './App.css';

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
  
  /*const todoArray = [
    <TodoItem content ="Item1"/>
    <TodoItem content ="Item2"/>
    <TodoItem content ="Item3"/>
  ]
*/  

  return (
      {todoList.filter((v) => v.completed).map(
      (v) => <TodoItem content={v.content}  priority={v.conten}/>)}}}
      
  )



export default App;
