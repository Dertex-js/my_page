import React from "react";
import './App.css';
import Header from "./components/header/header";
import News from "./components/content/news";
import Footer from "./components/footer/footer";
import {BrowserRouter, Route} from "react-router-dom";

const App = () => {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <News />
                <Footer/>
            </div>
        </BrowserRouter>
    );
}

export default App;
