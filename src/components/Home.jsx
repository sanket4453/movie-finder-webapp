import React from 'react'
import profilepic from '../images/mypicture.jpeg'

const Home =() => {
    return (
        <div className="row">
            <div className="col-md-4 col-xs-12"></div>
            <div className="col-md-4 col-xs-12 text-center">
             <img src={profilepic} className="img img-thumbnail" alt="Sanket Pawar"/>
                <h2>Movie Browser App</h2>
                <p>Powered By ReactJS</p>
                
            </div>
            <div className="col-md-4 col-xs-12"></div>
        </div>
    )
}

export default Home
