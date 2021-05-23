import React from 'react'
import profilepic from '../images/movies-img.jpg'

const Home =() => {
    return (
        <div className="row" >
            <div className="col-md-4 col-xs-12 m-1" ></div>
            <div className="col-md-4 col-xs-12 m-1 text-center">
             <img src={profilepic} className="img img-thumbnail movieimg"  alt="Sanket Pawar"/>
                <h2>Movie Browser App</h2>
                <p>Powered By ReactJS</p>
                
            </div>
            <div className="col-md-4 col-xs-12"></div>
        </div>
    )
}

export default Home
