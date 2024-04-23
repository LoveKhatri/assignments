import { useState } from 'react'
import './App.css'

function App() {
  const [todo, setTodo] = useState([{
    title: "Go to gym",
    description: "Go to gym from 7-8PM",
    id: 1
  }])
  let globalId = 2;


  const handleClick = () => {
    const title = document.getElementById("title").value;
    const description = document.getElementById("description").value;
    const n = {
      title: title,
      description: description,
      id: globalId++,
    }
    setTodo([...todo, n]);
  }

  return (
    <>
      <input type="text" id="title" placeholder="Todo title"></input> <br /><br />
      <input type="text" id="description" placeholder="Todo description"></input> <br /><br />
      <button onClick={handleClick}>Add todo</button>
      <br /> <br />

      <div id="todos">
        {
          todo.map((n) => {
            return (
              <div key={n.id}>
                <h3>{n.title}</h3>
                <p>{n.description}</p>
              </div>
            )
          })
        }
      </div>
    </>
  )
}

export default App
