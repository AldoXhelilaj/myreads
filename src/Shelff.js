import React from 'react';
import ListBooks from './listBooks'

const Shelff = function (props) {


 let   onSelect = (book, shelf) => {
        props.booksShelfChange(book, shelf);
    }



    const shelfTypes = [
        { type: 'currentlyReading', title: 'Currently Reading' },
        { type: 'wantToRead', title: 'Want to Read' },
        { type: 'read', title: 'Read' }
      ];



    // const { books } = this.props;
    // console.log(books + "books in shelf")
    // console.log(this.props + "books state in shelf")
    // const booksarray = Object.values(books);
    // console.log(booksarray + "books in shelf")

    return (

        <div className="bookshelf">
            <div>
                <h2 className="bookshelf-title">{props.title}</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        {props.books.map((book, key) =>

                            <ListBooks book={book} booksShelfChange={onSelect} />




                        )}
                    </ol>
                </div>
            </div>
        </div>
    );
}


export default Shelff;

