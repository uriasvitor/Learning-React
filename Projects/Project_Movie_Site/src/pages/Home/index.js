import { useEffect, useState } from "react";
import api from "../../services/api";

function Home(){
    const [film, setFilm] = useState([]);

    useEffect(()=>{

        async function loadFilm(){
            const res = await api.get("movie/now_playing",{
                params:{
                    api_key:'73372c501c4ab18090444c5ab03cea7d',
                    language:"pt-BR",
                    page:1,
                }
            })
            console.log(res.data.results)
        }
        loadFilm()
    },[])


    return(
        <div>Hello Home</div>
    )
}

export default Home;