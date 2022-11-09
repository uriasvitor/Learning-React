import axios from 'axios';


// https://api.themoviedb.org/3/movie/550?api_key=73372c501c4ab18090444c5ab03cea7d

const api = axios.create({
    baseURL:'https://api.themoviedb.org/3/'
});


export default api;