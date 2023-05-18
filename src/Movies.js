import React from "react";
import { useGlobalContext } from "./context";
import { NavLink } from "react-router-dom";

const Movie = () => {
    const { movie,isLoading } = useGlobalContext();


    if (isLoading) {
        return (
            <div className="">
                <div className="loading">Loading...</div>

            </div>
        );
    }

    return (<>
        <section className="movie-page">
            <div className="container gird grid-4-col">
                {movie.map((curMovie) => {
                    const { imdbID, Title, Poster } = curMovie;
                    const movieName = Title.substring(0, 14);
                    return (

                        <NavLink to={`movie/${imdbID}`} key={imdbID}>
                            <div className="card">
                                <div className="card-info">
                                    <h2>{movieName.length >= 14 ? `${movieName}...` : movieName}</h2>

                                    <img src={Poster} alt="#" />
                                </div>
                            </div>
                        </NavLink>
                    )


                })}
            </div>

        </section>

    </>)

}


export default Movie;