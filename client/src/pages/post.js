import { useParams } from "react-router-dom";
import {React, useState, useEffect } from "react";
import Axios from 'axios'

export default function Post() {
    const { id } = useParams()
    const [movieReviewList, setMovieList] = useState([])
    const [komentarzeList, setKomentarzeList] = useState([])

    const [nick, setNick] = useState('')
    const [tresc, setTresc] = useState('')

    const [i, setI] = useState(0)
    const [lista, setLista] = useState([])

    var index = -1

    useEffect(() => {  
        Axios.get(`http://localhost:3001/api/get/${id}`).then((response) => {
            setMovieList(response.data)
        })

        Axios.get(`http://localhost:3001/api/getKomentarze/${id}`).then((response) => {
            setKomentarzeList(response.data)

            var lista = []

            for(var i=0; i < response.data.length; i++) {
                lista.push({plus: false, minus: false})
            }

            setLista(lista)

            console.log(lista.length)
        })
      }, [])

    const dodajKomentarz = () => {
    
        Axios.post('http://localhost:3001/api/insertKomentarz', {
          nickName: nick, 
          trescKom: tresc,
          post_id: id
        })

        window.location.reload(false);
    }

    const usunKomentarz = (komId) => {

        Axios.delete(`http://localhost:3001/api/deleteKomentarz/${komId}`)
        window.location.reload(false);
    }

    const dodajPlus = (komId, bazaId) => {
        if(!lista[komId].plus) {
            lista[komId].plus = true
            if(lista[komId].minus) {
                komentarzeList[komId].minusy--
                lista[komId].minus = false
            }
            komentarzeList[komId].plusy = komentarzeList[komId].plusy + 1
            setI(i+1)
            updateKom(bazaId, komentarzeList[komId].plusy, komentarzeList[komId].minusy)
        }
    }

    const dodajMinus = (komId, bazaId) => {
        if(!lista[komId].minus) {
            lista[komId].minus = true
            if(lista[komId].plus) {
                komentarzeList[komId].plusy--
                lista[komId].plus = false
            }
            komentarzeList[komId].minusy = komentarzeList[komId].minusy + 1
            setI(i+1)
            updateKom(bazaId, komentarzeList[komId].plusy, komentarzeList[komId].minusy)
        }
    }

    const updateKom = (komid, wartosc1, wartosc2) => {
        Axios.put('http://localhost:3001/api/updateKom', {
          id_kom: komid,
          wart1: wartosc1,
          wart2: wartosc2
        })
    }

    function sprawdzIndex(id_kom) {
        for(var i=0; i < komentarzeList.length; i++) {
            if(komentarzeList[i].id == id_kom) {
                return i
            }
        }
    }

    return (
        <div className="post">
            {movieReviewList.map((val) => {
                return (
                    <div className="card_post">
                        <h1 class="tytulPost">{val.movieName}</h1>
                        <img class="zdjeciePost" src={`../${val.zdjecie}`}/>
                        <p class="postTekst">{val.movieReview}</p>
                        <hr/>
                        <h2> Komentarze: </h2>
                        <input className="formElement inputElement" type="text" placeholder="Podaj swój nick" name="nick" onChange={(e) => {setNick(e.target.value)}}/> <br/>
                        <input className="formElement inputElement" type="text" placeholder="Treść twojego komentarza" name="tresc" onChange={(e) => {setTresc(e.target.value)}}/> <br/>
                        <button className="komBut" onClick={dodajKomentarz}> Dodaj komentarz </button>
                        <br/>
                        {komentarzeList.map((c) => {
                            ++index
                            return (
                                <div className="komentarz">
                                    <h3> {c.nick} <img onClick={() => {usunKomentarz(c.id)}} className="remove_but" src="../remove.png"/> </h3> 
                                    <p> {c.tresc} </p>
                                    <p> <i> {c.data_wstawienia.replace("T", " | ").replace(".000Z", "")} </i> </p>
                                    <div className="oceny"> 
                                        <div className="ocenaZnak" onClick={() => {dodajPlus(sprawdzIndex(c.id), c.id)}}>  
                                            <img className="znakZdj" src="../plus.png"/>
                                        </div> 
                                        <label className="licznik"> {c.plusy - c.minusy} </label> 
                                        <div className="ocenaZnak" onClick={() => {dodajMinus(sprawdzIndex(c.id), c.id)}}>
                                            <img className="znakZdj" src="../substract.png"/>  
                                        </div> 
                                    </div>
                                </div>
                            )
                            })}
                    </div>
                )
                })}
        </div>
    )
}