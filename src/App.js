import React, { useState, useEffect } from 'react';
import MovieList from './Components/movieList';
import MovieListHeading from './Components/movieListHeading';
import SearchBox from './Components/SearchBox';
import InfoList from './Components/info';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import AddFavourite from './Components/addFavourites';

const App = () => {
  const [movies, setMovies] = useState([]);
  const [favourites, setFavourites]= useState([]);
  const [infos, setInfos] = useState([]);
   const [searchValue, setSearchValue] = useState('');

  const getMovieRequest = async (searchValue) => {
    const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=52e6f6dd`;

    const response = await fetch(url);
    const responseJson = await response.json();

    if(responseJson.Search){
    setMovies(responseJson.Search);
    }
  };
  const getInfosRequest = async (searchValue) => {
    const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=52e6f6dd`;

    const response = await fetch(url);
    const responseJson = await response.json();

    if(responseJson.Search){
    setInfos(responseJson.Search);
    }
  };

  useEffect(() => {
    getMovieRequest(searchValue);
    getInfosRequest(searchValue);
  }, [searchValue]);

  const addFavouriteMovie = (movie) => {
    const newFavouriteList = [...favourites, movie];
    setFavourites(newFavouriteList);
  }



  return <div className='container-fluid movie-app'>
    <div>
    <header>
      <MovieListHeading heading = 'Movies'/>
      <SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
      </header>
    </div>
    <div className='row'>
      <MovieList 
        movies={movies} 
        handleFavouritesClick={addFavouriteMovie} 
        favouriteComponent={AddFavourite}
      />
    </div>
      
    </div>

};

export default App;

// <InfoList infos={infos}/>