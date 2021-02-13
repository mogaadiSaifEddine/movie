import React,{useState} from 'react'
import {movieData} from "./Component/DataMovie"
import './App.css';
import MovieList from './Component/List/MovieList';
import AddMovie from './Component/Add/AddMovie';
import Filter from './Component/Filter/Filter';

function App() {
const [moviesList,setMoviesList]=useState(movieData)
const [searchbyname,setSearchbyename]=useState("")
const [searchbyrate,setSearchbyerate]=useState(1)

const addMovie=(x)=>
{
  setMoviesList([...moviesList,x])
}
  return (
    <div className="App">
      <Filter setSearchbyename={setSearchbyename} setSearchbyerate={setSearchbyerate} searchbyrate={searchbyrate}/>
      <MovieList moviesList={moviesList} searchbyname={searchbyname} searchbyrate={searchbyrate}/>
      <div style={{display:'flex',justifyContent:'center'}}>
      <AddMovie addMovie={addMovie} />
    </div>
    </div>
  );
}

export default App;