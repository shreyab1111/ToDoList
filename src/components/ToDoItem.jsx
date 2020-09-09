import React, { useState } from "react";

function ToDoItem(props) {
  const [isDone, setisDone] = useState(false);

  function handleClick() {
    setisDone((prevValue) => {
      return !prevValue;
    });
  }

  return (
    <div onClick={handleClick}>
      <li
        type="checkbox"
        style={{ textDecoration: isDone ? "line-through" : "none" }}
      >
        {props.text}
      </li>
    </div>
  );
}
export default ToDoItem;
