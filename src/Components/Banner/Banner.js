import React, { useEffect } from 'react'
import {API_KEY, Auth, baseUrl} from '../../constants/constants'
import axios from '../../axios'
import "./Banner.css"


function Banner() {
  const options = {
    method: 'GET',
    url: baseUrl,
    params: {language: 'en-US'},
    headers: {
      accept: 'application/json',
      Authorization: Auth
    }
  };
  useEffect(()=>{
    axios.request(options) 
    axios.then((response)=>{
      console.log(response.data)
    })

  },[])
  return (
    <div className='banner'>
        <div className='content'>
            <h1 className='title'>Movie Name</h1>
            <div className='banner_button'>
                <button className='button'>Play</button>
                <button className='button'>My List</button>
            </div>
            <h1 className='description'>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a</h1>
        </div>
        <div className="fade_bottom"></div>

    </div>
  )
}

export default Banner