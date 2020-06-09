import React, { Component } from 'react';
import { TransitionGroup, CSSTransition } from "react-transition-group";


class listBooks extends Component {
    state = {
        bookValue: "",
        animation:false




        
    }

   onSelect = (e) => {
        let newValue = e.target.value;
        this.props.booksShelfChange(this.props.book, newValue)
        this.setState({animation:true})
    
    }
    


    render() {

     

       
        console.log(this.state + "State in the ListBooks.js")
        return (


            <div>
                <li key={this.props.book.id}>
             
                    <CSSTransition  
                    in={this.state.animation}
                     classNames="bookk" 
                     timeout={500}
                     onEnter={() =>  this.setState({animation:true})}
                     onExit={() =>  this.setState({animation:false})}
                     >
                    <div className="book">
                        <div className="book-top">
                            <div className="book-cover" style={{ width: 128, height: 193, display: "flex"}}><img alt="" src={this.props.book.imageLinks.thumbnail}></img></div>
                            <div className="book-shelf-changer">
                                <select onChange={this.onSelect}   defaultValue={this.props.book.shelf}>
                                    <option value="move" disabled>Move to...</option>
                                    <option value="currentlyReading">Currently Reading</option>
                                    <option value="wantToRead">Want to Read</option>
                                    <option value="read">Read</option>
                                    <option value="none">None</option>
                                </select>
                            </div>
                        </div>
                        <div className="book-title">{this.props.title}</div>
                        <div className="book-authors">{this.props.authors}</div>
                    </div>
                    </CSSTransition>
                
                </li>


            </div>











        )

    }

}

export default listBooks;