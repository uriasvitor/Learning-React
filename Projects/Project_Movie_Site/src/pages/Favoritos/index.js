import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './style.css'

function Favoritos(){

    const [movies, setMovie] = useState([])

    useEffect(()=>{
        const myList = localStorage.getItem("@Movies");
        setMovie(JSON.parse(myList) || [])

    },[])

    function deleteMovie(id){
        let filterMovies = movies.filter((item)=>{
            return (item.id !== id)
        })

        setMovie(filterMovies)
        localStorage.setItem("@Movies", JSON.stringify(filterMovies))
    }

    return(
        <div className='my-movies'>
            <h1>Movies favoritos</h1>
            {movies.length === 0 && <span>Não possui nenhum item Salvo</span>}
            <ul>
                {movies.map((items)=>{
                    return(
                        <li key={items.id}>
                            <span>{items.title}</span>
                            <div>
                                <Link to={`/movie/${items.id}`}> Ver filme </Link>
                                <button onClick={()=> deleteMovie(items.id)}>Excluir da lista</button>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default Favoritos;