import { useEffect, useState } from 'react'
import './App.css'

function App(){
  const [listas, setLista] = useState([])
  const [input, setInput] = useState('')
  
  useEffect(()=>{
    const tarefasStorage = localStorage.getItem('@listas');

    if(tarefasStorage){
      setLista(JSON.parse(tarefasStorage))
      console.log(tarefasStorage)
    }

  },[])


  function addList(e){
    e.preventDefault()
    setLista([...listas,input])
    localStorage.setItem('@listas', JSON.stringify(listas))
  }

  return(
    <div>
      <div className='container'>
          <h1>Welcome to real world</h1>

          <form onSubmit={ addList}>
              <label>Lista</label>
              <br></br>
              <input 
                  id="lista" 
                  placeholder='Adicione a lista'
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
              ></input>

            <button>Hello world</button>

          </form>

          <div>
            {listas.map( lists =>(
              <li key={lists}>{lists}</li>
            ))}
          </div>
      </div>
    </div>
  )
}

export default App;