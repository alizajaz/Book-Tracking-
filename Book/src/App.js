import React from 'react'
import './App.css'
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import HomePage from './Components/Pages/HomePage';
import searchPage from './Components/Pages/searchPage';
import Error404 from './Components/Pages/Error404';


class BooksApp extends React.Component {
  render() {
    return(
      <BrowserRouter>
      <Switch>
       <Route exact path="/" component={ HomePage } />
       <Route exact path="/search" component={ searchPage } />
        <Route exact path ="/*" component ={ Error404 } />

        </Switch>
        </BrowserRouter>
    );
  }
}

export default BooksApp
