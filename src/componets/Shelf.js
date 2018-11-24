
import React from 'react';

import Book from './Book';

import * as BooksAPI from '../BooksAPI';

class Shelf extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: []
    }
  }
  componentDidMount() {
    BooksAPI.getAll().then(resp => {
        this.setState({books: resp});
    });
  }

  render() {
    return (
      <div className="bookshelf">
<h2 className="bookshelf-title">{this.props.name}</h2>
<div className="bookshelf-books">
    {
      this.props.books.map((book, key )=> <Book updateBook={this.props.updateBook} book = {book} key ={key} />)
    }
</div>
</div>
    );
  }
}


export default Shelf;
