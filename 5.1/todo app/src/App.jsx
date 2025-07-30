import React from "react";

const App = () => {
  const [todo, settodo] = React.useState([
    {
      id: 1,
      title: "Learn DSA ",
      description: "Slideing Widnow"
    },
    {
      id: 2,
      title: "Go To Gym",
      description: "Lag Day Today"
    },
    {
      id: 3,
      title: "React learing ",
      description: "learn about props and state components"
    },
  ]);
  function click(){
    settodo([...todo , {
      id: 4,
      title: "Learn Core ",
      description: "netweork Widnow"
    },])
  }
  return (
    <div
      style={{
        backgroundColor: "#f0f0f0",
        height: "100vh",
      }}
    >
     {
      todo.map((todo)=> <Todu key={todo.id}  title={todo.title}  description={todo.description}/>)
     }

     <button onClick={click}>click me </button>

     <Button  /> 
    </div>
  );
};

function Todu(props){
  return (
    <div> 
      <h1>{props.title}</h1>
      <p>{props.description}</p>
    </div>
  )
};

const Button = () => {

    console.log("hello jee");


  return <button type="button">some </button>
};




//? react transpied into the this format 
// const Button = () => {

//   function clickfn(){
//     console.log("hello jee");

//   }

//   return React.createElement(
//     "button",
//     { onclick: clickfn}
//     `Couter`
//   );
// };

export default App;
