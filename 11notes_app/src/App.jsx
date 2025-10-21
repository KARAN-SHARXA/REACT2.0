import React, { useState } from "react";

const App = () => {
  const submitHandler = (e) => {
    e.preventDefault();
    console.log(title);
    console.log(setdetails);
    
    settitle("")
    setdetails("")

  };

  const[title,settitle]=useState('')
  const [details,setdetails] = useState('')

  return (
    <div className="min-h-screen bg-amber-50 flex flex-col items-center py-10">
      {/* ===== FORM SECTION ===== */}
      <form
        onSubmit={(e)=>{
          submitHandler(e)
        }}
        className="bg-white shadow-lg rounded-2xl p-8 w-[90%] md:w-[60%] lg:w-[40%] flex flex-col gap-5"
      >
        <h1 className="text-2xl font-semibold text-center text-gray-800">
          📝 Add New Note
        </h1>

        <input
          type="text"
          placeholder="Enter Task Heading"
          value={title}
          onChange={(e)=>{
            settitle(e.target.value)
          }}
          className="border border-gray-300 rounded-lg px-4 py-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-red-400 w-full"
        />

        <textarea
          value={details}
          onChange={(e)=>{
            setdetails(e.target.value);
            
          }}
          placeholder="Enter Notes Details"
          className="border border-gray-300 rounded-lg px-4 py-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-red-400 w-full h-32 resize-none"
        />

        <button
          type="submit"
          className="bg-red-500 hover:bg-red-600 text-white font-medium py-3 rounded-lg transition-all duration-300"
        >
          Add Note
        </button>
      </form>

      {/* ===== DISPLAY SECTION ===== */}
      <div className="mt-10 w-[90%] md:w-[60%] lg:w-[40%] bg-pink-100 rounded-xl shadow-md p-6">
        <div className="flex justify-between text-center text-gray-700 font-semibold">
          <div className="bg-pink-300 rounded-lg px-6 py-3 shadow-sm">01</div>
          <div className="bg-pink-300 rounded-lg px-6 py-3 shadow-sm">02</div>
          <div className="bg-pink-300 rounded-lg px-6 py-3 shadow-sm">03</div>
        </div>
      </div>
    </div>
  );
};

export default App;

