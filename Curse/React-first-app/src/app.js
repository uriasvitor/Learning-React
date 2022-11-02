import React, { useState } from 'react';
import { useEffect } from 'react';
import MovieCard from './MovieCard';
import './app.css'
import SearchIcon from './search.png';
const API_URL = 'https://www.omdbapi.com/?i=tt3896198&apikey=d9209ae2'


const App = () => {
    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState('')

    const searchMovies = async (title) =>{
        const response = await fetch(`${API_URL}&s=${title}`)
        const data = await response.json();

        setMovies(data.Search);
    }

    useEffect(()=>{
        searchMovies('SpiderMan')
    },[]);

    return(
        <div className='app'>
            <h1>FilmWorld</h1>

                <div className='search'>
                    <input
                        placeholder="Search for movies"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <img 
                        src={SearchIcon}
                        alt="search"
                        onClick={() => searchMovies(searchTerm)}
                    />
                </div>
            {
                movies?.length > 0 ?(
                    <div className='container'> 
                        {  
                            movies.map((movie)=>(
                                    <MovieCard movie={movie} />
                                ))
                        }
                    </div>
                    ) : (
                    <div className='empty'>
                        <h2>No movie Found</h2>
                    </div>
                )

            }
        </div>
    );
}

export default App;