import React, { useState } from 'react'
import { FaTrash } from "react-icons/fa";

const ListTodoItem = (props) => {

    const [line, setLine] = useState(false);

    const cutLine = () => {
        setLine(true);
    }
  return (
    <>
      <li style={{textDecoration: line ? 'line-through' : 'none'}}><span onClick={cutLine}><FaTrash /></span>&nbsp;&nbsp;{props.text}</li>
    </>
  )
}

export default ListTodoItem
