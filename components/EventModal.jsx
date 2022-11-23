export default function EventModal() {
  return (
    <div className="h-screen w-full fixed left-0 top-0 flex justify-center items-center z-40">
      <form className="bg-white rounded-lg shadow-2xl w-2/4">
        <header className="bg-gray-100 px-4 py-2 flex justify-between items-center">
          <input type="text" placeholder="hello" />
          <button className="bg-gray-400 text-black py-3 px-4">close</button>
          <button className="bg-gray-400 text-black py-3 px-4">close</button>
        </header>
      </form>
    </div>
  );
}
