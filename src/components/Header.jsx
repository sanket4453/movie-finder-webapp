import React, { Component } from 'react'
import { withRouter,Link } from 'react-router-dom';

 class Header extends Component {

    submitHandler = (e) =>{
        e.preventDefault();
       console.log("this from header",this.props)
        let {history} = this.props;
        history.push(`/movies?searchTxt=${this.refs.searchTf.value}`)
        {this.refs.searchTf.value=""} 
    }
    render() {
        return (
            <div>
               <div className="alert alert-primary">
                   <div className="container">
                       <div className="row">
                           <div className="col-md-4">
                               <h3>
                                   <Link to="/" style={{textDecoration:'none'}}>Movie Browser</Link>
                                 
                               </h3>
                           </div>
                           <div className="col-md-8">
                               <form onSubmit={this.submitHandler} className="form">

                               <input type="search"
                               ref="searchTf" 
                               placeholder="Search Movies..."
                               className="form-control"/>
                               <button onClick={this.submitHandler} className="searchbtn">Search Movie</button>
                               </form>
                           </div>
                       </div>
                   </div>
                </div> 
            </div>
        )
    }
}

export default withRouter(Header);