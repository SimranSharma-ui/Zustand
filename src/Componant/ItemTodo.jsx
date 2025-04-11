import React from "react";
import useTodoStore from "../Store/TodoStore";

function TodoItem({ todo }) {
  const { toggleTodo, deleteTodo  } = useTodoStore();

  const todoStyles = {
    textDecoration: todo.completed ? "line-through" : "none", 
    color: todo.completed ? "#a0a0a0" : "#000000", 
    fontStyle: todo.completed ? "italic" : "normal", 
  };

  const buttonStyles = {
    backgroundColor: todo.completed ? "green" : "blue", 
    color: "white",
    padding: "5px",
    border: "none",
    borderRadius: "4px",
    margin:"4px",
    cursor: "pointer",
  };

  return (
    <li style={{ position: "relative", display: "flex",paddingInline:"20px",paddingBlock:"10px",width:"300px",margin:"auto",backgroundColor:"gray" }}>
      <span
        style={{
          textAlign: "center",
          fontSize: "20px",
          padding: "8px",
          width:"150px",
          cursor: "pointer",
          backgroundColor:"white",
          border:"2px solid blue",
          borderRadius:"10px",
          ...todoStyles, 
        }}
        onClick={() => toggleTodo(todo.id)} 
      >
        {todo.text}
      </span>
      <button 
        onClick={() => toggleTodo(todo.id)} 
        style={buttonStyles} 
      >
        Toggle
      </button>
      <button
        onClick={() => deleteTodo(todo.id)}
        style={{
          color: "white",
          backgroundColor: "red",
          padding: "5px",
          margin:"4px",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
        }}
      >
        ❌
      </button>
     
    </li>
    
  );
}

export default TodoItem;
