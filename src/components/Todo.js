import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add, todoData, remove } from "../store/todoSlice";
import "./main.css";

export const Todo = () => {
  const dispatch = useDispatch();
  const datas = useSelector(todoData);
  const [todo, setTodo] = useState("");
  const AddItems = () => {
    console.log(todo);
    dispatch(
      add({
        items: todo,
        id: Date.now(),
      })
    );
  };

  return (
    <>
      <div className="main">
        <input
          type="text"
          placeholder="Enter Items"
          onChange={(e) => setTodo(e.target.value)}
        />
        <button onClick={() => AddItems()}>Add</button>

        <div className="sub_main">
          <ul>
            {datas.map((cur) => {
              return (
                <li key={cur.id}>
                  {cur.items}
                  <span
                    className="delete"
                    onClick={() => dispatch(remove(cur.id))}
                  >
                    Delete
                  </span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
};
