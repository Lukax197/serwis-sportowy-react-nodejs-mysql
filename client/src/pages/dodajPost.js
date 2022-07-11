import { React, useState } from "react"
import Axios from 'axios'
import '../styles/dodajPost.css';

export default function DodajPost() {
        const [movieName, setMovieName] = useState('')
        const [review, setReview] = useState('')
        const [imageName, setImageName] = useState('')

        const parsePath = (value) => {
            setImageName(value.replace("C:\\fakepath\\", ""))
        }

        const submitReview = () => {
    
            Axios.post('http://localhost:3001/api/insert', {
              movieName: movieName, 
              movieReview: review,
              image: imageName
            })
            
            window.location.href = "http://localhost:3000/"
        }

        return (
          <div className="dodajPost">
            <div class="card_post" style={{textAlign: "center"}}>
                <h1> Dodaj nowy post: </h1>
                <input className="formElement inputElement" type="text" name="movieName" placeholder='Wpisz tytuł' onChange={(e) => {setMovieName(e.target.value)}}/> <br/>
                <input className="formElement inputElement" type="text" name="review" placeholder='Wpisz treść' onChange={(e) => {setReview(e.target.value)}}/> <br/>
                <p> Podgląd: </p>
                <img class="ikonka" src={`../${imageName}`}/> <br/>
                <input type="file" className="formElement inputElement" name="avatar" accept="image/png, image/jpeg" onChange={(e) => {parsePath(e.target.value)}}></input> <br/>
                <button className="formElement komBut" onClick={submitReview}> Dodaj post </button>
            </div>
          </div>
        )
}