import React, { Component } from 'react'
//Link is a straightforward way to provide declarative, accessible navigation around our application
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import AvailableBook from './Book'
import InfoSearchKeywords from './InfoSearchKeywords'

class SearchBooks extends Component {
  state = {
    query: '',
    searchedBooks: [],
    inUse: false
  }

  updateQuery = (query) => {
      this.setState(() => ({ query, isLoading: true }))

      if (!query) {
        this.setState(() => ({ searchedBooks: [] }))
        return;
      }
      BooksAPI.search(query.trim()).then((books) => {
      books.map(book => (this.props.books.filter((item) => item.id === book.id).map((item) => book.shelf = item.shelf)))
      this.setState(prevState => ({
        searchedBooks:!prevState.query || !books || books.error === "empty query" ? [] : books,
      }))
    })
  }


  toggleSearch = () => {
    this.setState({
      inUse: !this.state.inUse
    });
  }

  render() {
    return (
      <div className="search-for-books">
        <div className="search-for-books-bar">
          <Link className="close-the-search" to="/">Close</Link>
          <div className="search-for-books-input-wrapper">
            <input
              type="text"
                placeholder="Search by Book Title or Author Name"
                value={this.state.query}
                onChange={(event) => this.updateQuery(event.target.value)}
            />
          </div>
          <button className="info-search-keywords" onClick={this.toggleSearch}></button>
          <InfoSearchKeywords
            show={this.state.isUse}
            onClose={this.toggleSearch}>
                The following terms  can be used as the Search keyword:
                'Android', 'Art', 'Artificial Intelligence', 'Astronomy', 'Austen', 'Baseball', 'Basketball',
                'Bhagat', 'Biography', 'Brief', 'Business', 'Camus', 'Cervantes', 'Christie', 'Classics',
                'Comics', 'Cook', 'Cricket', 'Cycling', 'Desai', 'Design', 'Development', 'Digital Marketing',
                'Drama', 'Drawing', 'Dumas', 'Education', 'Everything', 'Fantasy', 'Film', 'Finance', 'First',
                'Fitness', 'Football', 'Future', 'Games', 'Gandhi', 'Homer', 'Horror', 'Hugo', 'Ibsen', 'Journey',
                'Kafka', 'King', 'Lahiri', 'Larsson', 'Learn', 'Literary Fiction', 'Make', 'Manage', 'Marquez',
                'Money', 'Mystery', 'Negotiate', 'Painting', 'Philosophy', 'Photography', 'Poetry', 'Production',
                'Programming', 'React', 'Redux', 'River', 'Robotics', 'Rowling', 'Satire', 'Science Fiction',
                'Shakespeare', 'Singh', 'Swimming', 'Tale', 'Thrun', 'Time', 'Tolstoy', 'Travel', 'Ultimate',
                'Virtual Reality', 'Web Development', 'iOS'
          </InfoSearchKeywords>
        </div>
        <div className="search-for-books-results">
          <ol className="lattice-of-books">
            {this.state.searchedBooks.map((searchedbook) => (
              <AvailableBook
                book={ searchedbook }
                key={ searchedbook.id }
                changeTheShelf={ this.props.changeTheShelf }
              />
            ))}
          </ol>
        </div>
      </div>
    )
  }
}

export default SearchBooks;