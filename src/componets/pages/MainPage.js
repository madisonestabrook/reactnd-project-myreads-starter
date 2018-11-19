import React from 'react';

import Shelf from '../Shelf';

import Book from '../Book';

import * as BooksAPI from '../../BooksAPI';

import { Link } from 'react-router-dom';

class MainPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: []
    }
  }

  componentDidMount() {
    BooksAPI.getAll().then(resp => {
        console.log(resp);
        this.setState({books: resp});
    });
  }

    updateBook = (book, shelf) => {
      BooksAPI.update(book, shelf)
      .then(resp => {
        book.shelf = shelf;
        this.setState(state => {
          books: state.books.filter(b => b.id !== book.id).concat([book])
        } );
    });
  }

  render() {
    return (
      <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <Shelf updateBook={this.updateBook} name="Currently Reading" books={this.state.books.filter(b => b.shelf === 'currentlyReading')}/>
        <Shelf updateBook={this.updateBook} name="Want to Read" books={this.state.books.filter(b => b.shelf === 'wantToRead')}/>
        <Shelf updateBook={this.updateBook} name="Read" books={this.state.books.filter(b => b.shelf === "read")}/>
      <div className="open-search">
        <Link to='/search'>Add a book</Link>
      </div>
      </div>
      </div>
  )}
    }
export default MainPage;
