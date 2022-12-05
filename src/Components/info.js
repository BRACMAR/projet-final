import React from 'react';


const InfoList = (props) => {
    //   string lien = 'https://image.tmdb.org/t/p/original';
        return(
            <>
                {props.movies.map((movie,lien, index) => (
                    
                    <div className='image-container d-flex justify-content-start m-3'>
                         
                        <h1> {movie.Title} </h1>
                        <div className='overlay d-flex align-items-center justify-content-center'></div>
                    </div>
                ))}
            </>
        );
    };

export default InfoList;