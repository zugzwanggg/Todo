import React from 'react'

export default function Todos(props) {

  const styles = {
    'textDecoration':props.checked && 'line-through',
    'color':props.checked && 'gray'
  }
  return (
    <>
    <div className='todo-part'>
      <div className='todo-left'>
        <button onClick={props.handleChange}>{props.checked ? <img src="./img/checked.svg" alt="" /> : <img src="./img/unchecked.svg" alt="" />}</button>
        <p style={styles} className="todos-text">{props.body}</p>
      </div>
      <button onClick={props.handle}><img src="./img/delete.svg" alt="" /></button>
    </div>
    <hr/>
    </>
  )
}

