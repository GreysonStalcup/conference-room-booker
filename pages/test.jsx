import { useState } from "react";
export default function test() {
  const [history, setHistory] = useState([]);
  const [text, setText] = useState("");

  const handleClick = (e) => {
    if (history.length >= 3) {
      setHistory(history.shift());
    }
    e.preventDefault();
    setHistory([...history, text]);
    setText("");
  };
  return (
    <>
      <h1>History</h1>
      <form>
        <label>
          Stuff here&nbsp;
          <input
            type="text"
            placeholder="Stuff here"
            className="bg-white border-2 border-blue-300 rounded-md"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </label>
        <button
          onClick={handleClick}
          className="bg-slate-400 py-1 ml-2 px-2 rounded-md"
        >
          Submit
        </button>
      </form>
      <div>
        <ul>
          {history.map((historyItem, index) => (
            <li key={index}>{historyItem}</li>
          ))}
        </ul>
      </div>
    </>
  );
}
