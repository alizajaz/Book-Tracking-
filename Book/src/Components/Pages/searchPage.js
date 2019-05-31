import React from 'react';
import { Link } from 'react-router-dom'
import * as BooksAPI from '../../BooksAPI'
import Book from '../Book';

class searchPage extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         books: [],
         searchresults: [],
         query: ""
      }
   }

   componentDidMount() {
      BooksAPI.getAll()
      .then(books => {
         this.setState({books:books});
      })
   }

   updateQuery = (query) => {
      this.setState({
        query: query }, this.updatesearchedResults);

   }

   updatesearchedResults = (query) => {

      if(this.state.query === '' || this.state.query === undefined) {
         return this.setState({ searchresults: [] })
      }
      BooksAPI.search(this.state.query, 20).then(searchresponse => {
         if(searchresponse.error) {
            return this.setState({searchresults: [] })
         }
         else {
            searchresponse.forEach(b=> {
               const foundshelf= this.state.books.filter(B => B.id === b.id);

               if(foundshelf[0])
               {
                  b.shelf = foundshelf[0].shelf
                 }
              });

            return this.setState({searchresults:searchresponse })
         }
      })
   }


 bookUpdate = (book, shelf) => {
    BooksAPI.update(book, shelf)
    .then(this.setState((state) => ({
      books: state.books.map(b => {
        if (b.title === book.title){
            b.shelf = shelf;
                  return b
                      } else {
                          return b
                      }
                  }),

              }))
          )
  };


   render() {
      return (
         <div className="search-books">
            <div className="search-books-bar">
              <Link className="close-search" to="/">Close</Link>
              <div className="search-books-input-wrapper">
              <input
              type="text"
              placeholder="Search by title or author" value={this.state.query}
                onChange={(event) => this.updateQuery(event.target.value)} />
              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid">
              {
                 this.state.searchresults.map((book, key) =>
                  <Book
                  bookUpdater={this.bookUpdate}
                  book={book} key={key}
                  />)
              }
              </ol>
            </div>
          </div>
      );
   }
}

export default searchPage;
