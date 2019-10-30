import React, { Component } from 'react';
import ListBooks from './listBooks'



class Shelf extends Component {



    render(){
   const {books}=this.props;
   console.log(books+"books in shelf")

    return(
     

      
             <div className="bookshelf">
                 {books.map((book,key)=>
                    <div>
                     <h2 className="bookshelf-title">{book.shelf}</h2>
                  
                <div className="bookshelf-books">
                    <ol className="books-grid">
                    <ListBooks books={book} onSelect={this.onSelect} />
                   
                    </ol>
                    </div>
                   
                 )}
                 </div>
           
            
     
        )
    }


}

export default Shelf;