import React, { Component } from 'react'
import coverNotAvailable from './icons/no-cover.jpg' //default cover when BookAPI isn't having cover for a particular Book

class Book extends Component {

  render () {
    let coverOfTheBook = this.props.book.imageLinks && this.props.book.imageLinks.thumbnail ? this.props.book.imageLinks.thumbnail : coverNotAvailable;
    let titleOfTheBook = this.props.book.title ? this.props.book.title : '';

    return(
      <li key={this.props.book.id}>
        <div className="book">
          <div className="book-top">
            <div className="book-cover" style={{ backgroundImage: `url(${coverOfTheBook})`}}>
            </div>
            <div className="book-shelf-changer">
              <select
                value={this.props.book.shelf}
                onChange={(event) => {this.props.changeTheShelf(this.props.book, event)}}
                >
                <option value="move" disabled>Place in...</option>
                <option value="none">Out Of The Shelf</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
              </select>
            </div>
          </div>
          <div className="title-of-the-book">{titleOfTheBook}</div>
          {
            this.props.book.authors && this.props.book.authors.map((bookAuthor, index) => (
              <div className="book-authors" key={index}>
                {bookAuthor}
              </div>
            ))
          }
        </div>
      </li>
    )
  }
}

export default Book;