import React, { useState } from "react";
import { FaPlusCircle } from "react-icons/fa";
import ListTodoItem from "./ListTodoItem";

const TodoList = () => {
  const [item, setItem] = useState("");
  const [newItem, setNewItem] = useState([]);

  const itemEvent = (event) => {
    setItem(event.target.value);
  };

  const listOfItems = () => {
    setNewItem((preValue) => {
      return [...preValue, item];
    });
    setItem(" ");
  };

  return (
    <>
      <div className="container my-5">
        <div className="todolist text-center">
          <div className="card mx-auto" style={{ width: "22rem" }}>
            <div className="card-body">
              <h5
                className="card-title fst-italic"
                style={{ fontFamily: "auto", fontSize: "30px" }}
              >
                Todo List
              </h5>
              <div
                className="input-group flex-nowrap"
                style={{ alignItems: "center" }}
              >
                <input
                  type="text"
                  value={item}
                  className="form-control"
                  placeholder="Add an items"
                  onChange={itemEvent}
                />
                &nbsp;&nbsp;
                <FaPlusCircle
                  className="icon-plus"
                  style={{ fontSize: "30px", cursor: "pointer" }}
                  onClick={listOfItems}
                />
              </div>
              <ol className="mt-3">
                {newItem.map((val, index) => {
                  return <ListTodoItem key={index} text={val} id={index} />
                })}
              </ol>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TodoList;
