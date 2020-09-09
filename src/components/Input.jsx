import React, { useState } from "react";

function Input(props) {
  const [newItem, setnewItem] = useState("");

  function handleChange(event) {
    const newValue = event.target.value;
    setnewItem(newValue);
  }

  return (
    <div>
      <input onChange={handleChange} type="text" value={newItem} />
      <button
        onClick={() => {
          props.add(newItem);
          setnewItem("");
        }}
      >
        <span>Add</span>
      </button>
    </div>
  );
}

export default Input;
