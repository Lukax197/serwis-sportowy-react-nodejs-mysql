import { useParams } from "react-router-dom";
import {React, useState, useEffect } from "react";
import Axios from 'axios'

export default function EdytujPost() {
    const { id } = useParams()
    const [movieName, setMovieName] = useState('')
    const [review, setReview] = useState('')
    const [imageName, setImageName] = useState('')

    useEffect(() => {  
        Axios.get(`http://localhost:3001/api/get/${id}`).then((response) => {
            setMovieName(response.data.at(0).movieName)
            setReview(response.data.at(0).movieReview)
            setImageName(response.data.at(0).zdjecie)
        })
      }, [])

    const parsePath = (value) => {
        setImageName(value.replace("C:\\fakepath\\", ""))
    }

    const updateReview = () => {
        Axios.put('http://localhost:3001/api/update', {
          postId: id,
          movieName: movieName, 
          movieReview: review,
          image: imageName
        })
        window.location.href = "http://localhost:3000/"
      }

    return (
        <div className="edytujPost">
            <div class="card_post" style={{textAlign: "center"}}>
                <h1> Edytuj post: </h1>
                <input className="formElement inputElement" value={movieName} type="text" name="movieName" placeholder='Wpisz tytuł' onChange={(e) => {setMovieName(e.target.value)}}/> <br/>
                <input className="formElement inputElement" value={review} type="text" name="review" placeholder='Wpisz treść' onChange={(e) => {setReview(e.target.value)}}/> <br/>
                <p> Podgląd: </p>
                <img class="ikonka" src={`../${imageName}`}/> <br/>
                <input type="file" className="formElement inputElement" name="avatar" accept="image/png, image/jpeg" onChange={(e) => {parsePath(e.target.value)}}></input> <br/>
                <button className="formElement komBut" onClick={updateReview}> Edytuj post </button>
            </div>
        </div>
    )
}