import axios from "axios";
import { useEffect, useState } from "react";

export default function App() {
  const [data, setData] = useState('');

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/posts/1')
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    data && (
      <div className="max-w-md mx-auto mt-10 p-6 bg-white border-2 border-gray-300 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">{data.title}</h1>
        <p className="text-gray-700">{data.body}</p>
      </div>
    )
  );
}
