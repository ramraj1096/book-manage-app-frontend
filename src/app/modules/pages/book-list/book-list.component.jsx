import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { BookService } from '../../../../services/services/book.service';

function BookListComponent() {
  const [bookResponse, setBookResponse] = useState({});
  const [page, setPage] = useState(0);
  const size = 5;
  const [pages, setPages] = useState([]);
  const [message, setMessage] = useState('');
  const [level, setLevel] = useState('success');
  
  const history = useHistory();

  useEffect(() => {
    findAllBooks();
  }, [page]);

  const findAllBooks = () => {
    const bookService = new BookService();

    bookService.findAllBooks({ page, size }).then(books => {
      setBookResponse(books);
      setPages(Array.from({ length: books.totalPages }, (_, i) => i));
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
    setPage(bookResponse.totalPages - 1);
  };

  const goToNextPage = () => {
    setPage(prevPage => prevPage + 1);
  };

  const isLastPage = page === bookResponse.totalPages - 1;

  const borrowBook = (book) => {
    setMessage('');
    setLevel('success');

    const bookService = new BookService();

    bookService.borrowBook({ 'book-id': book.id }).then(() => {
      setLevel('success');
      setMessage('Book successfully added to your list');
    }).catch(err => {
      console.error(err);
      setLevel('error');
      setMessage(err.response.data.error);
    });
  };

  const displayBookDetails = (book) => {
    history.push(`/books/details/${book.id}`);
  };

  return (
    <div>
      {/* Render your book list UI here */}
      {/* Example: */}
      <h2>Book List</h2>
      {bookResponse.content && bookResponse.content.map(book => (
        <div key={book.id}>
          <h3>{book.title}</h3>
          {/* Render book details */}
          <button onClick={() => borrowBook(book)}>Borrow</button>
          <button onClick={() => displayBookDetails(book)}>Details</button>
        </div>
      ))}
      {/* Pagination controls */}
      <button onClick={goToFirstPage}>First</button>
      <button onClick={goToPreviousPage}>Previous</button>
      {pages.map(pageNumber => (
        <button key={pageNumber} onClick={() => gotToPage(pageNumber)}>{pageNumber + 1}</button>
      ))}
      <button onClick={goToNextPage}>Next</button>
      <button onClick={goToLastPage}>Last</button>
      <p className={level === 'success' ? 'success-message' : 'error-message'}>{message}</p>
    </div>
  );
}

export default BookListComponent;
