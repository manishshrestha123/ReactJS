import React from "react";
import ReactDOM from "react-dom";
import './index.css'
const name = "Manish Shrestha";
const img1= "https://picsum.photos/200/300";
const img2= "https://picsum.photos/250/300";
const img3= "https://picsum.photos/250/350";
const links= "https://www.facebook.com";
ReactDOM.render(
    <>
        <h1 className="heading">My name is {name}</h1>
        <div className="img_div">
        <img src= {img1} alt="random picture"/>
        <img src= {img2} alt="random picture"/>
        <img src= {img3} alt="random picture"/>
        <a href= {img2} target="_blank">
            <img src = {img1} alt="random picture" />
        </a>
        </div>
    </>,
    document.getElementById("root")

);