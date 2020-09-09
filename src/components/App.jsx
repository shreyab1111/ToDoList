import React, { useState } from "react";
import ToDoItem from "./ToDoItem";
import Input from "./Input";

function App() {
  const [items, setitems] = useState([]);

  function addItem(newItem) {
    setitems((prevItems) => {
      return [...prevItems, newItem];
    });
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <Input add={addItem} />
      </div>
      <div>
        <ul>
          {items.map((item) => (
            <ToDoItem text={item} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
