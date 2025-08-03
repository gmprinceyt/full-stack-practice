import React, { useEffect, useMemo, useState } from "react";


//? UseMemo vs UseEffect 

/**
 * | Use When...                                                                       | Hook        |
| --------------------------------------------------------------------------------- | ----------- |
| You want to compute a value and **avoid re-renders**                              | `useMemo`   |
| You need to **perform a side effect** (like fetching, setting title, or DOM work) | `useEffect` |
| You **need to update state** based on a side effect                               | `useEffect` |
| You only need the **computed value in render**                                    | `useMemo`   |

 */


// const App = () => {
//   const [num, setNum] = useState(1000000);
//   const [count, setCount] = useState(0);

//   const expensiveSum = useMemo(() => {
//     console.log("Calculating sum...");
//     let sum = 0;
//     for (let i = 1; i <= num; i++) {
//       sum += i;
//     }
//     return sum;
//   }, [num]);

//   useEffect(() => {
//     document.title = `Count: ${count}`;
//   }, [count]);

//   return (
//     <div>
//       <h1>Sum: {expensiveSum}</h1>
//       <button onClick={() => setCount(count + 1)}>Count {count}</button>
//       <input
//         type="number"
//         value={num}
//         onChange={(e) => setNum(Number(e.target.value))}
//       />
//     </div>
//   );
// };

// export default App;

//? UseMemo

// const App = () => {
//   const [count, setCount] = useState(0);
//   const [input, setinput] = useState();
//   const [sum, setSumOne] = useState(0);

//   // const sum = useMemo(() => {
//   //   let sum = 0;
//   //   console.log("Hello");
//   //   for (let i = 1; i <= input; i++) {
//   //     sum = sum + i;
//   //   }
//   //   return sum
//   // }, [input]);


//   return (
//     <div>
//       <input type="text" onChange={(e) => setinput(e.target.value)} />
//       <p>sum of {sum}</p>
//       <button onClick={() => setCount(count + 1)}>Count {count}</button>
//     </div>
//   );
// };

// function Demo({a}){
//   return (
//     <div className="">
//       Hi there
//     </div>
//   )
// }

// export default App;

//? UseEffect()
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

// export default App


/**
 * | Element                      | Description                                                    |
| ---------------------------- | -------------------------------------------------------------- |
| `useEffect(() => {...}, [])` | Runs once when the component mounts (like `componentDidMount`) |
| `fetch("https://...")`       | Makes a GET request to fake user API (JSONPlaceholder)         |
| `setUsers(data)`             | Saves the fetched data into `users` state                      |
| `setLoading(false)`          | Marks loading complete, triggers re-render                     |
| Table render                 | Reads from `users` state and displays as rows in a table       |

 */


// const App = () => {
//   const [users, setUsers] = useState([]);
//   const [loading, setLoading] = useState(true);

//   //  useEffect to fetch data on mount
//   useEffect(() => {
//     async function fetchUsers() {
//       setLoading(true);
//       try {
//         const res = await fetch("https://jsonplaceholder.typicode.com/users");
//         const data = await res.json();
//         setUsers(data);
//       } catch (error) {
//         console.error("Failed to fetch users", error);
//       } finally {
//         setLoading(false);
//       }
//     }

//     fetchUsers(); //  call function when component mounts
//   }, []); // empty dependency = run only once (on mount)

//   if (loading) return <p>Loading users...</p>;

//   return (
//     <div>
//       <h2>User Table</h2>
//       <table border="1" cellPadding="8">
//         <thead>
//           <tr>
//             <th>ID</th>
//             <th>Name</th>
//             <th>Email</th>
//           </tr>
//         </thead>
//         <tbody>
//           {users.map((u) => (
//             <tr key={u.id}>
//               <td>{u.id}</td>
//               <td>{u.name}</td>
//               <td>{u.email}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default App;
