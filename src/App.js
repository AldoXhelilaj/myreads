import React from 'react'
import * as BooksAPI from './BooksAPI'
import Search from './Search'
import './App.css'
import Bookcase from './Bookcase'
import Shelf from './Shelff'
import { Route, Switch,Link } from 'react-router-dom'

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: false,
    books: []


  }
  componentDidMount() {

    BooksAPI.getAll().then((books) => {
      console.log(books + "componentdidmount");
      this.setState({ books: books })

    })

  }

  removeBooks(event) {
    this.setState({
      reading: this.state.reading.filter(function (person) {
        return person !== event.target.value
      })
    });
  }
  moveBookShelf = (book, newValue) => {


    BooksAPI.update(book, newValue).then(response=>{

  book.shelf = newValue;


    this.setState((state) => ({
      books: state.books.filter((b) => b.id !== book.id).concat(book)
    }))

    });

  }


  render() {
    console.log(this.props + "this props in App.js")
    console.log(this.state + "this state in App.js")
    return (
      <div className="app">
        <Switch>
          <Route path="/search" render={() => (
            <Search  search={this.moveBookShelf}/>
          )} />

          <Route exact path="/" render={() => (


            <div className="list-books">
              <div className="list-books-title">
                <h1>MyReads</h1>
              </div>
              <div className="list-books-content">
                <div>

                  <Bookcase booksShelfChange={this.moveBookShelf} books={this.state.books} />
                </div>

              </div>

              <div className="open-search">
                <Link to="/search">Add a book</Link>
              </div>
            </div>


          )} />

        </Switch>





      </div>

    )
  }
}

export default BooksApp
