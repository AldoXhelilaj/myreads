import React, { Component } from 'react';
import Shelf from './Shelff';




export class Bookcase extends Component {


    handleBookShelfChange = (book, shelf) => {
        console.log(this.props.booksShelfChange+"Bookcase")
        this.props.booksShelfChange(book, shelf);
    }
  

    render() {
     
        return (
            <div>
            
                 <Shelf  booksShelfChange={this.handleBookShelfChange} title="Currently Reading" books={this.props.books.filter(cat=>cat.shelf=== "currentlyReading")} />
                 <Shelf   booksShelfChange={this.handleBookShelfChange} title=  "wantToRead" books={this.props.books.filter(cat=>cat.shelf=== "wantToRead")} />
                 <Shelf  booksShelfChange={this.handleBookShelfChange}  title="read" books={this.props.books.filter(cat=>cat.shelf=== "read")} />
                
            </div>
        );
    }
}

export default Bookcase;
