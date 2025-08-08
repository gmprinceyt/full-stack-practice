import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, deleteTodo, editTodo, type Todo } from "./redux/reducer/todos";
import { memo, useState } from "react";

function App() {
  const todos = useSelector((state: { todos: Todo[] }) => state.todos);
  const dispatch = useDispatch();

  function handler(value:string) {
     dispatch(deleteTodo({id: value})) 

  } 
  function editTitle(todo:Todo) {
    const title = prompt("Enter Modifed Title",todo.title );

     dispatch(editTodo({id: todo.id, title: title || "", description: ""})) 
  } 
  function editDesciption(todo:Todo) {
    const description = prompt("Enter Modifed description",todo.description );

     dispatch(editTodo({id: todo.id, title:"", description:description || ""})) 
  } 

  return (
    <div
    className="main"
      style={{
        backgroundColor: "black",
        color: "white",
        height: "100vh",
      }}
    >
      <AddTodo />
      {todos.map((todo, i) => {
        return (
          <div key={i} className="">
            <h1>{todo.title}  <button onClick={()=> editTitle(todo)}>edit</button></h1>
            <p>{todo.description}  <button onClick={()=> editDesciption(todo)}>edit</button></p>
            <button onClick={()=> handler(todo.id)}>delele</button>
          </div>
        );
      })}
      hii
    </div>
  );
}

const AddTodo = memo(() => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handler = () => {
    dispatch(addTodo({
      title, description,
      id: "2"
    }));
    setTitle("");
    setDescription("")
  };

  return (
    <div>
      <input type="text" value={title} placeholder="title" onChange={(e)=> setTitle(e.target.value)} />
      <input type="text" value={description} placeholder="Description" onChange={(e)=> setDescription(e.target.value)}/>
      <button onClick={handler}> Add</button>
    </div>
  )
});

export default App;
