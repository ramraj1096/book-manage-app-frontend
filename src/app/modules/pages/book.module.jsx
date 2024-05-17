// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MainComponent from './pages/main/MainComponent';
import BookListComponent from './pages/book-list/BookListComponent';
import MyBooksComponent from './pages/my-books/MyBooksComponent';
import ManageBookComponent from './pages/manage-book/ManageBookComponent';
import BorrowedBookListComponent from './pages/borrowed-book-list/BorrowedBookListComponent';
import ReturnedBooksComponent from './pages/returned-books/ReturnedBooksComponent';
import BookDetailsComponent from './pages/book-details/BookDetailsComponent';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={MainComponent} />
        <Route path="/book-list" component={BookListComponent} />
        <Route path="/my-books" component={MyBooksComponent} />
        <Route path="/manage-book" component={ManageBookComponent} />
        <Route path="/borrowed-book-list" component={BorrowedBookListComponent} />
        <Route path="/returned-books" component={ReturnedBooksComponent} />
        <Route path="/book-details" component={BookDetailsComponent} />
      </Switch>
    </Router>
  );
};

export default App;
