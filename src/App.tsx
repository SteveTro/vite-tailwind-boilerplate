import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div
      className="flex justify-center items-center
     bg-black"
    >
      <h1 className="text-3xl font-bold text-blue-600">
        Install & Setup Vite + React + Typescript + Tailwind CSS 3
      </h1>
    </div>
  );
}

export default App;
