import { useState } from "react"


function App() {
  const [color, setColor] = useState("#212121")

  return (
    <>
      <div className="w-full h-screen duration-500"
      style={{backgroundColor: color}}
      >
        <div className=" fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className=" bg-slate-300 flex flex-wrap justify-center gap-3 shadow-lg px-3 py-2 rounded-3xl">
            <button className=" outline-none px-4 py-1 rounded-full shadow-lg"
            onClick={() => {setColor("red")}}
            style={{backgroundColor: "red" }}>Red</button>
            <button className=" outline-none px-4 py-1 rounded-full shadow-lg"
            onClick={() => setColor("green")}
            style={{backgroundColor: "green" }}>Green</button>
            <button className=" outline-none px-4 py-1 rounded-full shadow-lg"
            onClick={() => setColor("black")}
            style={{backgroundColor: "black", color: "white" }}>Black</button>
            <button className=" outline-none px-4 py-1 rounded-full shadow-lg"
            onClick={() => setColor("orange")}
            style={{backgroundColor: "orange" }}>Orange</button>
            <button className=" outline-none px-4 py-1 rounded-full shadow-lg"
            onClick={() => setColor("blue")}
            style={{backgroundColor: "blue" }}>Blue</button>
            <button className=" outline-none px-4 py-1 rounded-full shadow-lg"
            onClick={() => setColor("grey")}
            style={{backgroundColor: "grey" }}>Grey</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
