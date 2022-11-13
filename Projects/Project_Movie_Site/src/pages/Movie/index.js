import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import api from "../../services/api"
import './syle.css'

function Movie(){
    const { id } = useParams();
    const navigate = useNavigate()

    const [movie, setMovie] = useState({});
    const [loading, setLoading] = useState(true)
    const [save, setSave] = useState([])

    useEffect(()=>{
        async function loadMovie(){
            await api.get(`/movie/${id}`,{
                params:{
                    api_key:'39a7c8059b6512e5fd56df5e0ffbef72',
                    language:"pt-BR"
                }
            }).then((res)=>{
                console.log(res.data)
                setMovie(res.data)
                setLoading(false)

            }).catch((err)=>{
                console.log(err)
                navigate("/",{ replace:true })
                return;
            })
        }
        loadMovie()

        return () =>{
            console.log('Component foi desmontado')
        }
    },[navigate,id])

    function saveMovie(){
        const list = localStorage.getItem("@Movies");
        let moviesSaved = JSON.parse(list) || [];

        const hasMovie = moviesSaved.some((movieSaved) => movieSaved.id === movie.id)

        if(hasMovie){
            toast.warn("Este filme ja foi favoritado antes")
            return;
        }
        
        moviesSaved.push(movie);
        toast.success("Filme salvo com sucesso!")
        localStorage.setItem("@Movies", JSON.stringify(moviesSaved))
    }

    if(loading){
        return(
            <div className="loading">
                <h1>Carregando......</h1>
            </div>
        )
    }

    return(
        <div className="movie-info">
            <h1>{movie.title}</h1>
            <img src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`} alt={movie.title}/>
            <p>{movie.overview}</p>
            <strong>Avaliação: {movie.vote_average} /10</strong>

            <div className="area-button">
                <button 
                onClick={saveMovie}
                >Salvar</button>
                <button>
                    <a target="blank" rel="external" href={`https://youtube.com/results?search_query=${movie.title} trailer`}>Trailer</a>
                </button>
            </div>
        </div>
    )
}

export default Movie;