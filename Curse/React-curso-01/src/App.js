import { useState } from "react";
import Notas from "./components/Notas";

function App(){
  const [aluno, setAluno] = useState('Nome do cara')

  function changeName(nome){
    setAluno(nome)
  }

  return(
    <div>
      <h1>Aluno: {aluno} </h1>
      <Notas data="12/12/2012"/>
      <button onClick={()=> changeName('matheus')}></button>
    </div>
  );
}

export default App;