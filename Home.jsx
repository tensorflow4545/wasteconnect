import React from 'react'
import one1 from "../assets/one1.jpeg"
import two2 from "../assets/two2.png"
import {AiFillLinkedin,AiFillTwitterCircle,AiFillFacebook,AiFillInstagram} from "react-icons/ai"


export default function Home() {
    return (
        <>
        <div className="logo">
            <img src={one1} alt="logo"/>
        </div> 
        <div class="homeimg">
            <img src={two2} alt="home_graphic"/>
        </div>
        <div className="text">
            <h1 className="heading">Trash Wizards</h1>
            <p className="subheading">Your trash is our responsibility.</p>
            <p>Welcome to Trash Wizards, a web-based platform designed to address the challenges of efficient waste disposal by connecting users with garbage collectors and enabling authorities to respond promptly to increased waste generation during special occasions or events.</p>
            <br/>        
            <button className="button">Login</button>
            <button className="button">SignUp</button>
        </div>
        <div className="social" id='connect'>
            <article>
                <div style={{
                    animationDelay:"0.3"
                }}>
                <AiFillFacebook/>
                <p>Facebook</p>
                </div>
                <div style={{
                    animationDelay:"0.5s"
                }}>
                <AiFillTwitterCircle/>
                <p>Twitter</p>
                </div>
                <div style={{
                    animationDelay:"0.7s"
                }}>
                <AiFillLinkedin/>
                <p>LinkedIn</p>
                </div>
                <div style={{
                    animationDelay:"1s"
                }}>
                <AiFillInstagram/>
                <p>Instagram</p>
                </div>
            </article>
        </div>
        </>
    );
};