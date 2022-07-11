import React, { useState, useEffect } from "react";
import Axios from 'axios'
import './styles/App.css';
import { Link } from "react-router-dom";

function App() {

  const [movieReviewList, setMovieList] = useState([])
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {  
    Axios.get('http://localhost:3001/api/get').then((response) => {
      setMovieList(response.data)
    })
  })

  const deleteReview = (movie) => {
    Axios.delete(`http://localhost:3001/api/delete/${movie}`)
    window.location.reload(false);
  }

  return (
    <div className="App">
      <h1 id="napis2"> Aktualności: </h1>
      <input className="formElement inputElement" type="text" placeholder="Wyszukaj..." name="search" onChange={(e) => {setSearchTerm(e.target.value)}}/>
      <div className='form'>
        {movieReviewList.filter((val) => {
          if(searchTerm == "") {
            return val
          } else if (val.movieName.toLowerCase().includes(searchTerm.toLowerCase())) {
            return val
          }
        }).map((val, key) => {
          return (
            <div className="postOnMain" key={key}>
            <Link className="postDetailsLink" to={`/post/${val.id}`}>
              <div className="card">
                <div className="options">
                  <Link to={`/edytujPost/${val.id}`}>
                    <label className="postButton">
                      <img className="but_icon" src="./edit.png"/>
                    </label>
                  </Link>
                  <label className="postButton" onClick={() => {deleteReview(val.id)}}>
                    <img className="but_icon" src="./remove.png"/>
                  </label>
                </div>
                <img className="zdjPost" src={`./${val.zdjecie}`}></img>
                <h1>{val.movieName}</h1>
              </div>
            </Link>
            </div>
          )
        })}
      </div>
    </div>
  );
}

export default App;
