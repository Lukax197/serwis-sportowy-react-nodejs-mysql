const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()
const mysql = require('mysql')

const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'cruddatabase'
})

app.use(cors())
app.use(express.json())
app.use(bodyParser.urlencoded({extended: true}))

app.get('/api/get', (req, res) => {
    const sqlSelect = "SELECT * FROM movie_reviews;"
    db.query(sqlSelect, (err, result) => {
        res.send(result);
    })
})

app.get('/api/get/:id', (req, res) => {
    const id = req.params.id
    const sqlSelect = "SELECT * FROM movie_reviews WHERE id = ?;"

    db.query(sqlSelect, id, (err, result) => {
        res.send(result);
    })
})

app.get('/api/getKomentarze/:id', (req, res) => {
    const id = req.params.id
    const sqlSelect = "SELECT * FROM komentarze WHERE post_id = ?;"

    db.query(sqlSelect, id, (err, result) => {
        res.send(result);
    })
})

app.post('/api/insert', (req, res) => {

    const movieName = req.body.movieName
    const movieReview = req.body.movieReview
    const image = req.body.image

    const sqlInsert = "INSERT INTO movie_reviews (movieName, movieReview, zdjecie) VALUES (?,?,?);"
    db.query(sqlInsert, [movieName, movieReview, image], (err, result) => {
        console.log(result)
    })
})

app.post('/api/insertKomentarz', (req, res) => {

    const nick = req.body.nickName
    const tresc = req.body.trescKom
    const id = req.body.post_id

    const sqlInsert = "INSERT INTO komentarze (nick, tresc, post_id) VALUES (?,?,?);"
    db.query(sqlInsert, [nick, tresc, id], (err, result) => {
        console.log(result)
    })
})

app.delete('/api/delete/:id', (req, res) => {
    const id = req.params.id

    var sqlDelete = "DELETE FROM movie_reviews WHERE id = ?;"
    db.query(sqlDelete, id, (err, result) => {
        if(err) console.log(err)
    })

    sqlDelete = "DELETE FROM komentarze WHERE post_id = ?;"
    db.query(sqlDelete, id, (err, result) => {
        if(err) console.log(err)
    })
})

app.delete('/api/deleteKomentarz/:id', (req, res) => {
    const id = req.params.id

    var sqlDelete = "DELETE FROM komentarze WHERE id = ?;"
    db.query(sqlDelete, id, (err, result) => {
        if(err) console.log(err)
    })
})

app.put('/api/update', (req, res) => {
    const id = req.body.postId
    const name = req.body.movieName
    const review = req.body.movieReview
    const zdjecie = req.body.image

    const sqlUpdate = "UPDATE movie_reviews SET movieName = ?, movieReview = ?, zdjecie = ? WHERE id = ?;"
    db.query(sqlUpdate, [name, review, zdjecie, id], (err, result) => {
        if(err) console.log(err)
    })
})

app.put('/api/updateKomPlus', (req, res) => {
    const id = req.body.id_kom
    const wart = req.body.wart

    const sqlUpdate = "UPDATE komentarze SET plusy = ? WHERE id = ?;"
    db.query(sqlUpdate, [wart, id], (err, result) => {
        if(err) console.log(err)
    })
})

app.put('/api/updateKomMinus', (req, res) => {
    const id = req.body.id_kom
    const wart = req.body.wart

    const sqlUpdate = "UPDATE komentarze SET minusy = ? WHERE id = ?;"
    db.query(sqlUpdate, [wart, id], (err, result) => {
        if(err) console.log(err)
    })
})

app.put('/api/updateKom', (req, res) => {
    const id = req.body.id_kom
    const wart1 = req.body.wart1
    const wart2 = req.body.wart2

    const sqlUpdate = "UPDATE komentarze SET plusy = ?, minusy = ? WHERE id = ?;"
    db.query(sqlUpdate, [wart1, wart2, id], (err, result) => {
        if(err) console.log(err)
    })
})

app.listen(3001, () => {
    console.log("Running on port 3001")
})