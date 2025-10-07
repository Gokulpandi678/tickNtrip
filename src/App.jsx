import { useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("gokul");

  return (
    <div>
      <p className="text-green-800 font-bold text-2xl">Dependencies added:</p>
      <ul className="list-decimal list-inside">
        <li>React router dom</li>
        <li>Jotai</li>
        <li>lucide-react</li>
        <li>tailwind css</li>
      </ul>
      <div className="p-8 space-y-8 bg-gray-50 min-h-screen">
      <div className="font-outfit">
        <h1 className="text-4xl font-bold text-blue-700"> Font</h1>
        <p className="text-gray-700 text-lg">
          Clean, modern, and geometric. Great for professional brands like “TickNTrip”.
        </p>
      </div>

      <div className="font-poppins">
        <h1 className="text-4xl font-bold text-green-700"> Font</h1>
        <p className="text-gray-700 text-lg">
          Stylish and friendly, perfect for headings with a tech or travel vibe.
        </p>
      </div>

      <div className="font-inter">
        <h1 className="text-4xl font-bold text-purple-700"> Font</h1>
        <p className="text-gray-700 text-lg">
          Minimal and highly readable — ideal for paragraph text and UI elements.
        </p>
      </div>
    </div>
    </div>
  );
}

export default App;
