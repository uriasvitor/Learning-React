import { Link } from 'react-router-dom'
import './style.css'

function Erro(){
    return(
        <div className='not-found'>
            <h1 className='code'>404</h1>
            <h1>Ops! ocorreu um erro....</h1>
            <Link to="/">Veja todos os filmes!</Link>
        </div>
    )
}

export default Erro;