import axios from 'axios';
import React, { Component } from 'react'
import MovieCard from './MovieCard'
import queryString from 'query-string'

class MovieList extends Component {

    state={ movies : [] }
   

    componentDidMount(){
      this.fetchMovie();
        console.log("this props from movlist",this.props)
    }

    componentDidUpdate(prevProps){
        if(this.props.location !== prevProps.location){
            this.fetchMovie();
        }

    }
    fetchMovie =  () =>{
        let q = queryString.parse(this.props.location.search);
        axios.get(`http://www.omdbapi.com/?apikey=1ab3bee9&s=${q.searchTxt}`)
            .then(resp => resp.data)
            .then(data=>data.Search)
            .then(movies=>this.setState({movies}))
          
            
    }
 
    render() {
       if(this.state.movies){
        var movieList = this.state.movies.map((movie,index) => 
        <MovieCard 
        movie={movie}
         key={index}/>)
       }
        return (
            <div className="row">
               
                {movieList}
            </div>
        
        )
       
    }
}

export default MovieList