import React, { useState, useEffect } from 'react';
import MovieList from './Components/movieList';
import MovieListHeading from './Components/movieListHeading';
import SearchBox from './Components/SearchBox';
import InfoList from './Components/info';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import AddFavourite from './Components/addFavourites';
import RemoveFavourite from './Components/removeFavourites';


const App = () => {
  const[joke, setJoke] = useState('');
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
  const getJokeRequest = async () => {
    const url = 'https://official-joke-api.appspot.com/random_joke';

    const response = await fetch(url);
    const responseJson = await response.json();

    if(responseJson){
    setJoke(responseJson.data.joke);
    };
  }

  useEffect(() => {
    getMovieRequest(searchValue);
    getInfosRequest(searchValue);
  }, [searchValue]);

useEffect(() => {
  const movieFavourites = JSON.parse(
    localStorage.getItem('react-flight-app-favourites')
    );
    setFavourites(movieFavourites);
}, []);

useEffect(() => {
  getJokeRequest(joke);
},[]);


  
  
  const saveToLocalStorage = (items) => {
    localStorage.setItem('react-flight-app-favourites', JSON.stringify(items));
    
  };

  const addFavouriteMovie = (movie) => {
    const newFavouriteList = [...favourites, movie];
    setFavourites(newFavouriteList);
    saveToLocalStorage(newFavouriteList);
  };
  const removeFavouriteMovie = (movie) => {
    const newFavouriteList = favourites.filter(
      (favourite)=>favourite.imdbID !== movie.imdbID
    );
    setFavourites(newFavouriteList);
    saveToLocalStorage(newFavouriteList);
  };



  return <div className='container-fluid movie-app'>
    <div>
      <MovieListHeading heading = 'My Watch List'/>
      <SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
    </div>
    <br></br>
    <br></br><br></br><br></br>
    <div className='row'>
      <MovieList 
        movies={movies} 
        handleFavouritesClick={addFavouriteMovie} 
        favouriteComponent={AddFavourite}
      />
      <div className='row'><InfoList infos={infos}/></div>
    </div>
    
    <div>
      <MovieListHeading heading = 'Favorites'/>
    </div>
    <div className='row'>
      <MovieList 
        movies={favourites} 
        handleFavouritesClick={removeFavouriteMovie} 
        favouriteComponent={RemoveFavourite}
      />
    </div>

    <div>
      <h1>A joke if you feel down</h1>
      <p>JOKE: {joke}</p>
      <br></br>
      <button>Get a new joke</button>
    </div>

    </div>

};

export default App;

