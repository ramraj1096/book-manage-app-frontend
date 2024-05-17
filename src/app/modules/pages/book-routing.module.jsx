import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MainComponent from './pages/main/MainComponent';
import BookListComponent from './pages/book-list/BookListComponent';
import MyBooksComponent from './pages/my-books/MyBooksComponent';
import ManageBookComponent from './pages/manage-book/ManageBookComponent';
import BorrowedBookListComponent from './pages/borrowed-book-list/BorrowedBookListComponent';
import ReturnedBooksComponent from './pages/returned-books/ReturnedBooksComponent';
import BookDetailsComponent from './pages/book-details/BookDetailsComponent';

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={MainComponent} />
        <Route exact path="/my-books" component={MyBooksComponent} />
        <Route exact path="/my-borrowed-books" component={BorrowedBookListComponent} />
        <Route exact path="/my-returned-books" component={ReturnedBooksComponent} />
        <Route exact path="/details/:bookId" component={BookDetailsComponent} />
        <Route exact path="/manage" component={ManageBookComponent} />
        <Route exact path="/manage/:bookId" component={ManageBookComponent} />
        <Route component={BookListComponent} />
      </Switch>
    </Router>
  );
};

export default Routes;
