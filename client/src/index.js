import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import DodajPost from './pages/dodajPost';
import Post from './pages/post';
import EdytujPost from './pages/edytujPost';
import './styles/Main.css';

function Main() {
    return (
        <Router>
            <header> 
                <div className="header_item"> 
                    <Link to="/" class="navigation"> <img id="logo" src="./meczyk_logo3.png"/> </Link> <h1 id="napis"> MEczyk.com </h1>
                </div>
            
                <div id="menu">
                    <Link to="/dodajPost" class="navigation" className='tytul'> <div className="header_menu"> Dodaj post </div> </Link>
                </div>
            </header>

            <article>
            <Routes>
                <Route path="/" element={<App/>}/>
                <Route path="/dodajPost" element={<DodajPost/>}/>
                <Route path="/post/:id" element={<Post/>}/>
                <Route path="/edytujPost/:id" element={<EdytujPost/>}/>
            </Routes>
            </article>

            <footer> Copyright © 2022 </footer>
        </Router>
    )
}


ReactDOM.render( <Main />, document.getElementById('root'));