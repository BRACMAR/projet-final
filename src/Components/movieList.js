import React from 'react';
import { string } from 'postcss-selector-parser';


const MovieList = (props) => {
    const FavouriteComponent = props.favouriteComponent;
//   string lien = 'https://image.tmdb.org/t/p/original';
    return(
        <>
            {props.movies.map((movie,lien, index) => (
                
                <div className='image-container d-flex justify-content-start m-3'>
                     
                    <img src = {movie.Poster} alt="movie"></img>
                    <div 
                        onClick={() => props.handleFavouritesClick(movie)}
                        className='overlay d-flex align-items-center justify-content-center'>
                        <FavouriteComponent/>
                        </div>
                </div>
            ))}
        </>
    );
};

export default MovieList;
