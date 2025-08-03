
/**
 * | Element                      | Description                                                    |
| ---------------------------- | -------------------------------------------------------------- |
| `useEffect(() => {...}, [])` | Runs once when the component mounts (like `componentDidMount`) |
| `fetch("https://...")`       | Makes a GET request to fake user API (JSONPlaceholder)         |
| `setUsers(data)`             | Saves the fetched data into `users` state                      |
| `setLoading(false)`          | Marks loading complete, triggers re-render                     |
| Table render                 | Reads from `users` state and displays as rows in a table       |

 */

import { useEffect, useState } from "react";


const UseEffect = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  //  useEffect to fetch data on mount
  useEffect(() => {
    async function fetchUsers() {
      setLoading(true);
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await res.json();
        setUsers(data);
      } catch (error) {
        console.error("Failed to fetch users", error);
      } finally {
        setLoading(false);
      }
    }

    fetchUsers(); //  call function when component mounts
  }, []); // empty dependency = run only once (on mount)

  if (loading) return <p>Loading users...</p>;

  return (
    <div>
      <h2>User Table</h2>
      <table border="1" cellPadding="8">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {users.map((u) => (
            <tr key={u.id}>
              <td>{u.id}</td>
              <td>{u.name}</td>
              <td>{u.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UseEffect;
