import { useState } from 'react'
import './App.scss'
import Header from './components/Header'
import Todos from './components/Todos'
import { nanoid } from 'nanoid'

function App() {

  const [todos, setTodos] = useState([])
  const [todoBody, setTodoBody] = useState('')
  function newTodo(e) {
    e.preventDefault()
    setTodos(prev=> {
      return [...prev, {
        id: nanoid(),
        body: todoBody,
        checked: false
      }]
    })
    setTodoBody('')
  }
  function deleteTodo(id) {
    setTodos(prev=> prev.filter(x => x.id !== id))
  }
  function checkTodo(id) {
    setTodos(prev => prev.map(x=> x.id == id ? ({...x, checked: !x.checked}) : x))
  }
  function cleanCompleted() {
    if (todos.every(x => !x.checked)) {
      alert('You haven\'t completed any task yet')
    }
    setTodos(prev => prev.filter(x=> x.checked !== true))
  }
  return (
    <>
      <Header/>
      <div className="container">
        <form onSubmit={newTodo} action="">
          <input onChange={(e)=>setTodoBody(e.target.value)} value={todoBody} type="text" placeholder='What do you need to do?'/>
          <button>ADD</button>
        </form>
        <ul className="todos-list">
          {todos.length 
          ? 
          <li className='todo-items'>{todos.map(x=><Todos key={nanoid()} body={x.body} id={x.id} handle={()=>deleteTodo(x.id)} 
          checked={x.checked} handleChange={()=>checkTodo(x.id)}/>)}</li>
          : 
          <p style={{margin: '0 auto'}} className='todo-items'> No todos...</p> }
          {todos.length ? <button onClick={()=>cleanCompleted()} className="clean"><img src="./img/clean.svg" alt=""/></button> : ''}
        </ul>
      </div>
    </>
  )
}

export default App
