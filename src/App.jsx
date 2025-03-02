import React, { useState } from "react";
import useTodoStore from "./Store/TodoStore";
import TodoList from './Componant/TodoList';

function App() {
  const [text, setText] = useState("");
  const { addTodo } = useTodoStore();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    addTodo(text);
    setText("");
  };

  return (
    <div style={{
      position: "relative", 
      justifyContent: "center", 
      gap: "10px", 
      alignItems: "center", 
      display: "flex", 
      flexDirection: "column", 
      marginTop: "20px"
    }}>
      <h1 style={{
        fontSize: "50px", 
        textAlign: "center", 
        fontFamily: "Arial, sans-serif", 
        fontWeight: "bold"
      }}>
        📝 Zustand Todo App
      </h1>
      <form onSubmit={handleSubmit} style={{
        display: "flex", 
        marginTop: "10px"
      }}>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          style={{
            padding: "10px", 
            border: "1px solid #ccc", 
            borderRadius: "4px", 
            width: "300px", 
            fontSize: "16px", 
            outline: "none"
          }}
          placeholder="Add a new todo..."
        />
        <button 
          type="submit" 
          style={{
            backgroundColor: "#4CAF50", 
            color: "white", 
            padding: "10px 15px", 
            border: "none", 
            borderRadius: "4px", 
            cursor: "pointer", 
            fontSize: "16px",
            marginLeft: "10px"
          }}
        >
          Add
        </button>
      </form>
      <TodoList />
    </div>
  );
}

export default App;
