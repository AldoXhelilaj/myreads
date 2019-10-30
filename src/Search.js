import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ListBook from './listBooks'
import * as BooksAPI from './BooksAPI'



export class Search extends Component {
    state = {
        query: "",
        newBooks: []
    }

    getBooks = (e) => {
        let query = e.target.value;
        console.log(query)

        this.setState({ query })

        if (query) {
            BooksAPI.search(query.trim(), 20).then(books => {
                books.length > 0
                    ? this.setState({ newBooks: books })
                    : this.setState({ newBooks: [] })



            })

        }
    }

 

    render() {
        const { search } = this.props;
        const {newBooks,query,}=this.state;
        console.log(search)
        console.log({ ...this.state + "Search state" })
        return (
            <div>
                <div className="search-books">
                    <div className="search-books-bar">
                        <Link className="close-search" to="/">Close</Link>
                        <div className="search-books-input-wrapper">
                            {/*
      NOTES: The search from BooksAPI is limited to a particular set of search terms.
      You can find these search terms here:
      https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

      However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
      you don't find a specific author or title. Every search is limited by search terms.
    */}

                            <input type="text" placeholder="Search by title or author" onChange={this.getBooks} />

                        </div>
                    </div>
                    <div className="search-books-results">
                        <div><strong>{newBooks.length ? `Search Returned ${newBooks.length} books`:`Search did not return any books. Please try again!`}</strong></div>
                        <ol className="books-grid">
                            {newBooks.map(books => (
                                <ListBook 
                                book={books}
                                booksShelfChange={search}
                                key={books.id}  
                                
                                />
                                

                            ))}
                        </ol>

                    </div>
                </div>
            </div>
        );
    }
}

export default Search;




