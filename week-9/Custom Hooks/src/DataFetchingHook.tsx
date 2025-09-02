import { useEffect, useState } from "react";

const Todo = () => {
  const { data, loading, error, isError } = useTodos(10);
  console.log("re-render hippen");

  if (isError) return <div>{error?.message}</div>;
  if (loading)
    return <div className="flex items-center justify-center ">loading...</div>;

  return (
    <div className="p-4 ">
      {data?.data.map((todo) => (
        <TodoItem key={todo._id} {...todo} />
      ))}
    </div>
  );
};

// Custom Hooks
const useTodos = (n: number) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error>();
  const [isError, setIserror] = useState(false);
  const [data, setData] = useState<ResponseRecieveInterface | undefined>(
    undefined
  );
  // Fetch Data From Server
  async function getTodos() {
    const url = `${import.meta.env.VITE_SERVER}/todo/all`;
    try {
      const res = await fetch(url);
      const data = await res.json();
      setData(data);
    } catch (error) {
      setIserror(false);
      if (error instanceof Error) {
        setError(error);
      }
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getTodos();
    const timeout = setInterval(() => {
      getTodos();
    }, n * 1000);

    return () => {
      clearInterval(timeout);
    };
  }, [n]);

  return { data, loading, isError, error };
};

// Ui Component
const TodoItem = ({
  title,
  description,
  complate,
}: {
  title: string;
  description: string;
  complate: boolean;
}) => {
  return (
    <div
      className={`p-4 mb-3 rounded-xl shadow-md border ${
        complate ? "bg-green-100 border-green-400" : "bg-white border-gray-300"
      }`}
    >
      <h2 className="text-lg font-semibold">{title}</h2>
      <p className="text-gray-600">{description}</p>
      <p
        className={`mt-2 inline-block px-3 py-1 rounded-full text-sm font-medium ${
          complate ? "bg-green-500 text-white" : "bg-yellow-400 text-black"
        }`}
      >
        {complate ? "Completed ✅" : "Pending ⏳"}
      </p>
    </div>
  );
};

//  Type Defination
type DataRecieveType = {
  _id: string;
  title: string;
  description: string;
  complate: boolean;
};
interface ResponseRecieveInterface {
  message: string;
  data: DataRecieveType[];
}
export default Todo;
