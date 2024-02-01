import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Star } from "../assets/star.svg";
import './ShowDetails.css'
import { useParams } from "react-router-dom";

const ShowDetails = () => {
    const [data, setData] = useState({});
    const [cast, setCast] = useState([]);
    const [images, setImages] = useState([]);

    let { id } = useParams();

    useEffect(() => {
        fetch(`https://api.tvmaze.com/shows/${id}`)
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setData(data);
            })
            .catch((err) => console.log(err));

        fetch(`https://api.tvmaze.com/shows/${id}/cast`)
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setCast(data);
            })
            .catch((err) => console.log(err));

        fetch(`https://api.tvmaze.com/shows/${id}/images`)
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setImages(data);
            })
            .catch((err) => console.log(err));

    }, [id])

    return (
        <>
            {
                data ?
                    <div className='ShowDetails'>
                        <div className="header">
                            <img className="main-img" src={data.image ? data.image.original : "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png"} alt="" />
                            <div className="inner-header">
                                <div className="show-title-rating-etc">
                                    <span className="title">{data.name}</span>
                                    <span className='rating'><Star />{data.rating && data.rating.average ? data.rating.average : "NA"} / 10</span>
                                    <span className="genres">
                                        {
                                            data.genres && data.genres.map((genre) => {
                                                return <span className='tag'>{genre}</span>
                                            })
                                        }
                                    </span>
                                    <button className="book-btn">Book Show</button>
                                </div>
                                <div className="other-details">
                                    <span className="show-info">Show Info</span>
                                    {data.network && <span>Network: {data.network.name}</span>}
                                    {data.language && <span>Language: {data.language}</span>}
                                    {data.status && <span>Status: {data.status}</span>}
                                    {data.type && <span>Show Type: {data.type}</span>}
                                    {data.network && <span>Country: {data.network.country.name}</span>}
                                    {data.officialSite && <span>Official site: <Link to="data.officialSite">
                                        {data.officialSite}
                                    </Link></span>}
                                </div>
                            </div>
                        </div>
                        <div className="summary">
                            <h2>About the Movie</h2>
                            {data.summary}
                        </div>
                        <div className="cast">
                            <h2>Cast</h2>
                            <div className="img-container">
                                {
                                    cast[0] && cast.map((c) => {
                                        if (c.person && c.person.image && c.person.image.original) {
                                            return <img src={c.person.image.original} alt="" />
                                        }
                                    })
                                }
                            </div>
                        </div>
                        <div className="photos">
                            <h2>Photos</h2>
                            <div className="img-container">
                                {
                                    images[0] && images.map((image) => {
                                        if(image.resolutions && image.resolutions.original && image.resolutions.original.url){
                                            return <img src={image.resolutions.original.url} alt="" />
                                        }
                                    })
                                }
                            </div>
                        </div>
                    </div>
                    : ""
            }

        </>
    )
}

export default ShowDetails