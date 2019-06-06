# MyReads Project

Book Tracking app is a bookshelf web app that used React to build the application . This project allows users to select and categorized books that you have read, are currently reading and want to read and provides an API server and client library that you will use to persist information as you interact with the application.

This project displays the main page and Search page.
Mainpage have 3 shelves:
Currently Reading 
Want to Read 
Read.

Search page has a text input:
Search
(As the value of the text input changes, the books that match that query are displayed on the page, along with a control that lets you add the book to your library)

# Getting Started
To get started developing right away:

* install all project dependencies with `npm install`
* start the development server with `npm start`


# Important
1. Command prompt: Server
2. Atom: Writing code
3. Documentation:DILLINGER
 https://dillinger.io/
 
## What You're Getting
```bash
├── CONTRIBUTING.md
├── README.md - This file.
├── SEARCH_TERMS.md # The whitelisted short collection of available search terms for you to use with your app.
├── package.json # npm package manager file. It's unlikely that you'll need to modify this.
├── public
│   ├── favicon.ico # React Icon, You may change if you wish.
│   └── index.html # DO NOT MODIFY
└── src
    ├── App.css # Styles for your app. Feel free to customize this as you desire.
    ├── App.js # This is the root of your app. Contains static HTML right now.
    ├── App.test.js # Used for testing. Provided with Create React App. Testing is encouraged, but not required.
    ├── BooksAPI.js # A JavaScript API for the provided Udacity backend. Instructions for the methods are below.
    ├── icons # Helpful images for your app. Use at your discretion.
    │   ├── add.svg
    │   ├── arrow-back.svg
    │   └── arrow-drop-down.svg
    ├── index.css # Global styles. You probably won't need to change anything here.
    └── index.js # You should not need to modify this file. It is used for DOM rendering only.
```

Remember that good React design practice is to create new JS files for each component and use import/require statements to include them where they are needed.

## Backend Server

To simplify your development process, we've provided a backend server for you to develop against. The provided file [`BooksAPI.js`](src/BooksAPI.js) contains the methods you will need to perform necessary operations on the backend:

* [`getAll`](#getall)
* [`update`](#update)
* [`search`](#search)

### `getAll`

Method Signature:

```js
getAll()
```

* Returns a Promise which resolves to a JSON object containing a collection of book objects.
* This collection represents the books currently in the bookshelves in your app.

### `update`

Method Signature:

```js
update(book, shelf)
```

* book: `<Object>` containing at minimum an `id` attribute
* shelf: `<String>` contains one of ["wantToRead", "currentlyReading", "read"]  
* Returns a Promise which resolves to a JSON object containing the response data of the POST request

### `search`

Method Signature:

```js
search(query)
```

* query: `<String>`
* Returns a Promise which resolves to a JSON object containing a collection of a maximum of 20 book objects.
* These books do not know which shelf they are on. They are raw results only. You'll need to make sure that books have the correct state while on the search page.

## Important
The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.


## My Contribution to this project
During this project, i realized that i have to be very discipline mentally . The reason i am saying  this is because distraction is main key to loose our mental ability(focus). so, i divided the whole project into small pieces. First i take overall picture of this project then i started solving each project by attaching pieces one by one(solving puzzles). For each project i start using timer for 30 minutes. yes, i did this cause i want to follow the rule and be disciple.

## Step 1
As i go through project, my first issue was following:

## issue 1
(update index.js)
import { Route } from 'react-router-dom';


## Problem:Cannot find module 'react-router-dom'
download 
npm install react-router-dom


## Resources
1.https://github.com/react-bootstrap/react-router-bootstrap/issues/231

2.https://www.npmjs.com/package/react-browser-router

3. https://reacttraining.com/react-router/web/api/Route



## Step 2

key:Divide Component

Components: divide the code into small pieces so that you can move code one file to another in easy way.My component for this project are as follows:
1.App.js
2.Search.js
3. Book.js
4. BookShelf.js
5. Error404.js

##  Step 3 
In the main application, the main page display three shelves, each of which contain number of books.The threes helves are 
1. currently reading
2. want to read 
3. Read
The main page also have link for search page that channel next page.

you basically divide the code and put those code under the component. Here are some example:

## Search.js

import React from 'react'
    import './App.css'import { Link } from 'react-router-dom'
    class Search extends React.Component {
    render() {
    return (
    <div className="search-books">
    <div className="search-books-bar">
    <Link className="close-search" to="/" >Close</Link>
    <div className="search-books-input-wrapper"
    <input type="text" placeholder="Search by title or author"/>
    </div>
    </div>
    <div className="search-books-results">
    <ol className="books-grid"></ol>
    </div>
    </div>



## Play around the code and meet criteria with its specifation
I vision this whole project as a page that has header, body and footer. Inside body container there are 3 shelf and i decided to use Mainpage as a body container so that i dont need to move(props) from one page to another.for instance <Book/> or <Bookshelf/> are very useful.


## Link
I choose import { Link } from 'react-router-dom' use Route for instance:  <Link className="close-search" to="/">Close</Link>
you need to connect with page. HomePage,Searchpage


## Data
import * as BooksAPI from './BooksAPI'. you can used getall,update and search from here.


## Conribution
Since i am beginner, i definately need your help and support. please contribute and help me excel my skill. 









