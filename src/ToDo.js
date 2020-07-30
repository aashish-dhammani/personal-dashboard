import React, { useState } from "react";
import Draggable from "react-draggable";

function TodosComponent() {
  const [currentTodo, setCurrentTodo] = useState("");
  const [todos, setTodos] = useState([
    {
      todo: "Check Mosaic Dashboard",
      isCompleted: true
    },
    {
      todo: "Yoga Session",
      isCompleted: false
    },
    {
      todo: "100 PushUps",
      isCompleted: false
    },
    {
      todo: "Project 2",
      isCompleted: false
    },
    {
      todo: "Call with Varun",
      isCompleted: false
    }
  ]);

  function createNewTodo(currentTodo) {
    let todosArray = [...todos];
    todosArray.push({
      todo: currentTodo,
      isCompleted: false
    });
    setTodos(todosArray);
  }

  function completeTodo(index) {
    let todosArray = [...todos];
    todosArray[index].isCompleted = !todosArray[index].isCompleted;
    setTodos(todosArray);
  }

  function deleteTodo(index) {
    let todosArray = [...todos];
    todosArray.splice(index, 1);
    setTodos(todosArray);
  };

  return (
    <Draggable>
      <div className="drag-box">  
    <div id='todolist'>
      <h4>Task List: {todos.length > 0 && `${todos.length} items`}</h4>
      <input
        className="todo-input"
        value={currentTodo}
        onChange={e => {
          setCurrentTodo(e.target.value);
        }}
        onKeyPress={e => {
          if (e.key === "Enter") {
            createNewTodo(currentTodo);
            setCurrentTodo("");
          }
        }}
        placeholder="Add a New Task"
      />
      {todos.map((todo, index) => (
        <div key={todo} className="todo">
          <div className="checkbox" onClick={() => completeTodo(index)}>
            {todo.isCompleted && <span>&#11044;</span>}
          </div>
          <div className={todo.isCompleted ? "done" : ""}>{todo.todo}</div>
          <div className="delete" onClick={() => deleteTodo(index)}>
          &#10007;
          </div>
        </div>
      ))}
      
    </div>
    </div>
    </Draggable>
  );
}
export default TodosComponent;
