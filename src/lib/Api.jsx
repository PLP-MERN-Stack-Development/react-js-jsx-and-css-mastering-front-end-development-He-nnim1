import { useEffect, useState } from "react";

function Todos() {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const limit = 10;

  useEffect(() => {
      const fetchTodos = async () => {
        try {
        setLoading(true);
        const res = await fetch(`https://jsonplaceholder.typicode.com/todos?_page=${page}&_limit=${limit}`);
        if (!res.ok) throw new Error("Failed to fetch todos");
        const data = await res.json();
        setTodos(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchTodos();
  }, [page]);


  // Filter todos by search term
  const filteredTodos = todos.filter(todo =>
    todo.title.toLowerCase().includes(search.toLowerCase()));


  if (loading) return <p className="text-center mt-4">Loading.....</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;

  return (
    <div className="p-4 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-4 text-center text-grey-600">TODOS</h1>

      {/* search input*/}
      <input
        type="text"
        value={search}
        placeholder="Search Todos"
        onChange={(e) => setSearch(e.target.value)}
        className="input input-bordered w-full mb-4 placeholder:text-gray-500 placeholder:italic"
      />

      {/* Todos list */}
      <div className="grid gap-4">
        {filteredTodos.map(todo => (
          <div key={todo.id} className="card bg-base-100 shadow-md p-4 flex justify-between items-center">
            <span>{todo.title}</span>
            <span className="italic text-sm">
              {todo.completed ? "Done" : "Pending"}
            </span>
          </div>
        ))}
      </div>


      {/*pagination buttons*/}
      <div className="flex justify-center mt-4 gap-2">
        <button
          onClick={() => setPage(p => Math.max(p - 1, 1))}
          className="px-4 py-2 border border-gray-400 rounded-lg hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={page === 1}
        >
          Previous </button>
        <button onClick={() => setPage(p => p + 1)} 
        className="px-4 py-2 border border-gray-400 rounded-lg hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
        disabled={todos.length < limit}
        >
          Next </button>
      </div>
    </div>
  )

}

export default Todos;
