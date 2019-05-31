import React from 'react'
import './App.css'
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import HomePage from './Components/Pages/HomePage';
import searchPage from './Components/Pages/searchPage';
import Error404 from './Components/Pages/Error404';


class BooksApp extends React.Component {
  render() {
    return(
      
      
      
      state = {
    books: []
  }

  componentDidMount() {
   this.addbooks()
 }



 addBooks = () => {
    BooksAPI.getAll().then((books) => {
      this.setState({ books });
    })
  };
}
updateShelf = (book, shelf) => {
 BooksAPI.update(book, shelf).then(response => {
   this.addbooks()
 })
}

  render() {

    return(
    <div className="app">
       <Route exact path="/"  render={() =>(
         <HomePage
          books={this.state.books}
           updateShelf={this.updateShelf}
           />
         )}
         />

       <Route
       exact
       path="/search"
       render={() => (
        <searchPage
         updateShelf={this.updateShelf}
          books={this.state.books}
        />
      )}
      />

        <Route exact path ="/*" component ={ Error404 } />
          </div>
      )
    }

}

// export default BooksApp
//       <BrowserRouter>
//       <Switch>
//        <Route exact path="/" component={ HomePage } />
//        <Route exact path="/search" component={ searchPage } />
//         <Route exact path ="/*" component ={ Error404 } />

//         </Switch>
//         </BrowserRouter>
//     );
//   }
// }

export default BooksApp
