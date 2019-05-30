import React from 'react';
import { Link } from 'react-router-dom'
import * as BooksAPI from '../../BooksAPI'
import BookShelf from '../BookShelf';

class HomePage extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         books: []
      }
   }

   componentDidMount() {
      BooksAPI.getAll()
      .then(books => {
         this.setState({books:books});
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
         <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>

                <BookShelf
                key="Currently Reading"
                bookUpdater={this.bookUpdater}
                name="Current Reading"
                 book={this.state.books.filter(b => b.shelf === "currentlyReading")}
                 />

                <BookShelf
                  key="Want to Read"
                bookUpdater={this.bookUpdater}
                 name="Want To Read"
                 book={this.state.books.filter(b => b.shelf === "wantToRead")}
                 />

                <BookShelf
                  key="Read"
                bookUpdater={this.bookUpdater}
                name="Read"
                book={this.state.books.filter(b => b.shelf === "read")}
                />
              </div>
            </div>

            <div className="open-search">
              <Link to="/search">Add a book</Link>
            </div>
          </div>
      );
   }
}

export default HomePage;
