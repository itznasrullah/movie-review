import { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import MovieCard from './MovieCard'
import { ReactComponent as SearchBtn } from "../assets/search-btn.svg";
import './Home.css'

const Home = () => {
    const [data, setData] = useState([]);
    const [SearchQuery, setSearchQuery] = useState("all");
    const [SearchText, setSearchText] = useState("");

    useEffect(() => {
        fetch(`https://api.tvmaze.com/search/shows?q=${SearchQuery}`)
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setData(data);
            })
            .catch((err) => console.log(err));

    }, [SearchQuery])

    const handleSubmit = (e) => {
        e.preventDefault();
        if(SearchText !== "")
            setSearchQuery(SearchText);
    }

    return (
        <div className='Home'>
            <form className="search-form" onSubmit={handleSubmit}>
                <input type="text" value={SearchText} placeholder='Search' onChange={(e) => setSearchText(e.target.value)} />

                <SearchBtn className='search-btn' onClick={handleSubmit} />
            </form>

            <div className="movie-container">
                {data[0] && data.map((item) => {
                    console.log(item.show);
                    return <Link to={`/view/${item.show.id}`} >
                        <MovieCard src={item.show.image ? item.show.image.medium : "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png"} rating={item.show.rating.average} key={item.show.id} title={item.show.name} genres={item.show.genres} />
                    </Link>
                })}

            </div>
        </div>
    )
}

export default Home