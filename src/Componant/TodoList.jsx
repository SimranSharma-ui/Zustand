import React from "react";
import useTodoStore from "../Store/TodoStore";
import TodoItem from "./ItemTodo";

function TodoList() {
  const { todos,removeAll } = useTodoStore();

  return (
    <ul style={{margin:"4px",padding:"5px"}}>
      {todos.length === 0 ? (
        <p style={{color:"gray" , alignItems:"center"}} >No todos yet. Add one!</p>
      ) : (
        todos.map((todo) => <TodoItem key={todo.id} todo={todo} />)
      )}
       <button onClick={()=> removeAll()} style={{padding:"6px",cursor:"pointer",backgroundColor:"red",borderRadius:"8px"}}>Clear All</button>
    </ul>
  );
}

export default TodoList;
