import React, { useEffect, useState } from 'react'

// const App = () => {
//   const [id , setId] = useState(0)
//   return (
//     <>
//     <button onClick={()=> setId(1)}>1</button>
//     <button onClick={()=> setId(2)}>2</button>
//     <button onClick={()=> setId(3)}>3 </button>
//     <button onClick={()=> setId(4)}>4 </button>
//       <Todo id={id}/>
//     </>
//   )
// };

// const Todo  = ({id})=> {
//   const [todo, setTodo] = useState([]);
//   console.log(id )

//   useEffect(()=> {
//     fetch(`http://sum-server.100xdevs/todo?id=${id}`).then((res)=> {
//       res.json().then((data)=> {
//         setTodo(data)
//       })
//     })
//   },[id])

//   return (
//     <div>
//       <h1>{todo.title}</h1>
//       {todo.description}
//     </div>
//   )
// }

export default App