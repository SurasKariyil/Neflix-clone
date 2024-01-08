import React, { useEffect, useState } from 'react'
import { useEffect } from 'react';
import "./RowPost.css"
import { API_KEY, imageUrl } from '../../constants/constants';
import axios from '../../axios';

function RowPost() {
  const [movies, setMovies] = useState([])
  useEffect(() => {
    axios.get(`/discover/tv?api_key=${API_KEY}&with_networks=213`)
    console.log(response.data);
    setMovies(response.data.results);
  }).catch(err =>{
    // alert('Network Error')
  })
}, [])
  return (
    <div className='row'>
      <h2>Neflix Originals</h2>
      <div className='posters'>
         {movies.map(() => {
         <img className="poster" src={`${imageUrl + object.backdrop_path}`} alt="poster" />
        })}
    </div>
  </div>

}


export default RowPost