import {API_KEY, imageUrl } from '../../constants/constants'
import React, { useEffect, useState } from 'react'
import YouTube from 'react-youtube'
import axios from '../../axios'
import "./RowPost.css"

function RowPost(props) {
  const [movies,setMovies] = useState([])
  const [urlid,setUrlid] =useState([]);
  useEffect(() => {
    axios.get(props.url).then(response=>{
      console.log(response.data);
      setMovies(response.data.results);
    }).catch(err=>{
      alert('Network Error');
    })
  },[])
  const opts = {
    height: '400',
    width: '100%',
    playerVars: {
      autoplay: 0,
    },
  };
  const handleTrailer =(id)=>{
    axios.get(`movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then(response=>{
        if(response.data.results.length !==0){
          setUrlid(response.data.results[0])
        }else{
          alert("Trailer not Available")
        }
     })
  }
    return (
     <div className='row'>
      <h2>{props.title}</h2>
      <div className='posters'>
         {movies.map((obj) => 
         <img onClick={()=>handleTrailer(obj.id)} className={props.isSmall ? 'smallposter' : 'poster' } alt="" src={`${imageUrl+obj.backdrop_path}`}/>
        )}
      </div>
  { urlid && <YouTube opts={opts} videoId={urlid.key}  /> }
    </div>
  )
}
export default RowPost