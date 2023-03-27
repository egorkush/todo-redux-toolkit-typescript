import React from 'react'
import { useAppDispatch } from '../hook'
import {toggleComplete, removeTodo} from '../store/todoSlice'

interface TodoItemProps {
  id: string
  text: string
  completed: boolean
}

const TodoItem: React.FC<TodoItemProps> = ({ id, text, completed }) => {
  const dispatch = useAppDispatch()

  return (
    <li>
      <div className='wrap'>
        <div>
      <input
        type='checkbox'
        checked={completed}
        onChange={() => dispatch(toggleComplete(id))}
      />
      <span>{text}</span>
        </div>
      <span className='remove' onClick={() => dispatch(removeTodo(id))}>&times;</span>
      </div>
    </li>
  )
}

export default TodoItem