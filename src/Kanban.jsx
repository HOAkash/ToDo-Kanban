import React from 'react'
import './Kanban.css'

function Kanban() {
  return (
    <div className='main'>
      <h2>Kanban Board</h2>
      <div className='search'>
        <input className='input' type="text" placeholder='Add New Task' />
        <button>Add</button>
      </div>
<div className='board'>
<div className='board1'><p>To Do </p></div>
<div className='board2'><p>IN Progress</p></div>
<div className='board3'>Done</div>
<div className='board4'>Trash Bin</div>
</div>

    </div>
  )
}

export default Kanban
