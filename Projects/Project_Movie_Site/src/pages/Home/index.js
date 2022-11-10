import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../../services/api";
import './style.css'

function Home(){
    const [movie, setMovies] = useState([]);
    const [loading, setLoading] = useState(true)


    useEffect(()=>{

        async function loadMovie(){
            const res = await api.get("movie/now_playing",{
                params:{
                    api_key:'73372c501c4ab18090444c5ab03cea7d',
                    language:"pt-BR",
                    page:1,
                }
            })

            setMovies(res.data.results.slice(0,10))
            setLoading(false)
            console.log(res.data.results.slice(0,10))
        }

        loadMovie()
    },[])

    if(loading){
        return(
            <div>
                <div className="loading">
                    <h1>Loading movies....</h1>
                </div>
            </div>
        )
    }
    return(
        <div className="container">
            <div className="list-movies">
                {movie.map((movies)=>{
                    return(
                        <article key={movies.id}>
                            <strong>{movies.title}</strong>
                            <img src={`https://image.tmdb.org/t/p/original/${movies.poster_path}`} alt={movies.title}/>
                            <Link to={`/movie/${movies.id}`}>Acessar</Link>
                        </article>
                    )
                })}
            </div>
        </div>
    )
}

export default Home;