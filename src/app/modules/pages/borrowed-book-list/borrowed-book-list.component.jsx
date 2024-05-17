import React, { useState, useEffect } from 'react';
import { BookService } from '../../../../services/services/book.service';
import { FeedbackService } from '../../../../services/services/feedback.service';

function BorrowedBookListComponent() {
  const [page, setPage] = useState(0);
  const size = 5;
  const [pages, setPages] = useState([]);
  const [borrowedBooks, setBorrowedBooks] = useState({});
  const [selectedBook, setSelectedBook] = useState(null);
  const [feedbackRequest, setFeedbackRequest] = useState({ bookId: 0, comment: '', note: 0 });

  useEffect(() => {
    findAllBorrowedBooks();
  }, [page]);

  const findAllBorrowedBooks = () => {
    const bookService = new BookService();
    bookService.findAllBorrowedBooks({ page, size }).then(resp => {
      setBorrowedBooks(resp);
      setPages(Array.from({ length: resp.totalPages }, (_, i) => i));
    });
  };

  const gotToPage = (pageNumber) => {
    setPage(pageNumber);
  };

  const goToFirstPage = () => {
    setPage(0);
  };

  const goToPreviousPage = () => {
    setPage(prevPage => prevPage - 1);
  };

  const goToLastPage = () => {
    setPage(borrowedBooks.totalPages - 1);
  };

  const goToNextPage = () => {
    setPage(prevPage => prevPage + 1);
  };

  const isLastPage = page === borrowedBooks.totalPages - 1;

  const returnBorrowedBook = (book) => {
    setSelectedBook(book);
    setFeedbackRequest({ ...feedbackRequest, bookId: book.id });
  };

  const returnBook = (withFeedback) => {
    const bookService = new BookService();
    bookService.returnBorrowBook({ 'book-id': selectedBook.id }).then(() => {
      if (withFeedback) {
        giveFeedback();
      }
      setSelectedBook(null);
      findAllBorrowedBooks();
    });
  };

  const giveFeedback = () => {
    const feedbackService = new FeedbackService();
    feedbackService.saveFeedback({ body: feedbackRequest }).then(() => {
      // Feedback saved successfully
    });
  };

  return (
    <div>
      <h2>Borrowed Books</h2>
      <ul>
        {borrowedBooks.content && borrowedBooks.content.map(book => (
          <li key={book.id}>
            <div>Title: {book.title}</div>
            <div>Author: {book.author}</div>
            <button onClick={() => returnBorrowedBook(book)}>Return</button>
          </li>
        ))}
      </ul>
      {/* Pagination controls */}
      <button onClick={goToFirstPage}>First</button>
      <button onClick={goToPreviousPage}>Previous</button>
      {pages.map(pageNumber => (
        <button key={pageNumber} onClick={() => gotToPage(pageNumber)}>{pageNumber + 1}</button>
      ))}
      <button onClick={goToNextPage}>Next</button>
      <button onClick={goToLastPage}>Last</button>
      {/* Return book with feedback option */}
      {selectedBook && (
        <div>
          <label>Feedback:</label>
          <input type="text" value={feedbackRequest.comment} onChange={(e) => setFeedbackRequest({ ...feedbackRequest, comment: e.target.value })} />
          <button onClick={() => returnBook(true)}>Return with Feedback</button>
          <button onClick={() => returnBook(false)}>Return</button>
        </div>
      )}
    </div>
  );
}

export default BorrowedBookListComponent;
