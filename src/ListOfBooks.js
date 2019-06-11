import React from 'react'
import Book from './Book'

function ListOfBooks(props) {
  return (
    <div className="bookshelf">
      <h2 className="title-of-bookshelf">{props.nameOfTheShelf}</h2>
      <div className="books-in-bookshelf">
        <ol className="lattice-of-books">
          {props.books.map((bookInTheLattice) => (
            <Book
              books={props.books}
              book={bookInTheLattice}
              key={bookInTheLattice.id}
              changeTheShelf={props.changeTheShelf}
            />
          ))}
        </ol>
      </div>
    </div>
  )
}

export default ListOfBooks;