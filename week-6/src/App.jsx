
const App = () => {
  return (
    <div>
      <Wrapper>
        <Text />
      </Wrapper>
      <Wrapper>
        <Text2 />
      </Wrapper>
    </div>
  );
};
const Wrapper = ({ children }) => {
  return (
    <div
      style={{
        border: "2px solid black",
        padding: "20px",
        margin: "20px"
      }}
    >
      {children}
    </div>
  );
};
const Text = () => {
  return <div>hii there</div>;
};
const Text2 = () => {
  return <div>hii there2</div>;
};

export default App;

// import React, { useState } from "react";

// const App = () => {
//   const [Todos, setTodo] = useState([
//     {
//       title: "buy Grocery",
//       description: "ginder, garlic , tamoto, Pateto , onion,",
//     },
//     {
//       title: "buy Grocery",
//       description: "ginder, garlic , tamoto, Pateto , onion,",
//     },
//   ]);
//   return (
//     <>
//       <Add setTodo={setTodo} />
//       <Todo Todos={Todos} />
//     </>
//   );
// };

// const Todo = ({ Todos }) => {
//   return (
//     <>
//       {Todos.map((todo, index) => {
//         return (
//           <div key={index}>
//             <h6>{todo.title}</h6>
//             <p>{todo.description}</p>
//           </div>
//         );
//       })}
//     </>
//   );
// };

// const Add = React.memo(({ setTodo }) => {
//   const [title, setTitle] = useState("");
//   const [description, setDescription] = useState("");

//   function AddTodo() {
//     setTodo((pre) => [...pre, { title, description }]);
//     setTitle("");
//     setDescription("");
//   }

//   return (
//     <>
//       <input
//         onChange={(e) => setTitle(e.target.value)}
//         type="text"
//         name="title"
//         value={title}
//         placeholder="Enter Title"
//       />
//       <input
//         value={description}
//         onChange={(e) => setDescription(e.target.value)}
//         type="text"
//         name="description"
//         placeholder="Enter Descrition"
//       />
//       <button onClick={AddTodo}>Add New Todo</button>
//     </>
//   );
// });

// export default App;
