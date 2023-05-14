import React, { useEffect } from "react"
import vector from "../vectors/Dumbbell.svg"


function Home () {
    useEffect(() => {document.body.style.overflow = "hidden";}, []);

    async function getStarted (event) {
        event.preventDefault();
        window.location.href = "/Schedule";
        
    }
    
    
    return (
        <>
        <div className="hero_section flex-col-center">
            <div className="hero-text">
                <p className="title">MY<i className="yellow"> PERFORMANCE</i></p>
                <p className="yellow subtitle">PERSONAL TRAINING</p>
            </div>
            <form onSubmit={getStarted}>
                <input type="submit" value={"Start"}  className="btn-s"/>
            </form>
        </div>
        <div className="vector-wrapper">
            <img src={vector} alt="Vector" className="vector"/>
        </div>

        </>
    )
    }

export default Home