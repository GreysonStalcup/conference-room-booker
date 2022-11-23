import { useState } from "react";

export default function Available() {
  const [available, setAvailable] = useState(true);
  const handleToggleAvailable = () => {
    setAvailable(!available);
  };
  return (
    <>
      <div
        className={`min-w-100vw ${
          available ? "bg-green-400" : "bg-red-400"
        } py-10 mb-4`}
      >
        <h3 className="text-2xl text-center">
          {available ? "Available" : "Occupied"}
        </h3>
      </div>
      <div className="text-center">
        <button
          className="bg-gradient-to-r from-indigo-500 to-cyan-400 px-2 py-1 rounded-md text-white hover:from-indigo-600 hover:to-cyan-500"
          onClick={handleToggleAvailable}
        >
          Toggle Available
        </button>
      </div>
    </>
  );
}
