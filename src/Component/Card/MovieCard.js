import React from 'react'
import './card.css';
import Rate from '../Rate';
const MovieCard=({movie:{image,rating,name,date,description}})=>{
return(
<div className="card">
<div className="cardleft">
<img src={image} alt="poster"/>
</div>
<div className="cardright">
<h1>{name}</h1>
<div className="carddetails"> 
<p>Release Date : {date}</p>
<Rate rating={rating}/>
<p>{description}</p>
</div>
</div>
</div>
);
}
export default MovieCard;