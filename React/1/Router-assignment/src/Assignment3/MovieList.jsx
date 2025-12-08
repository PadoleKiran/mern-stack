
import { useParams } from "react-router-dom";

const movies = [
  { id: "tt101", title: "Inception", year: 2010 },
  { id: "tt102", title: "Avatar", year: 2009 },
  { id: "tt103", title: "Interstellar", year: 2014 },
];

export default function MovieList(){
   
    let {id} = useParams();
    let movie = movies.find(m => m.id === (id))
    return(
        <>
            <h2>Movie id is : {id}</h2>
            {movies ? (
                <>
                    <h1>Movies Details</h1>
                    <h2>Title : {movie.title}</h2>
                    <h3>Year : {movie.year}</h3>
                </>
        ):(
        <>
            <h1>Add correct id</h1>
        </>
        )}
        </>
    )
}