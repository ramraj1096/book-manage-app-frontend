import React, { useState, useEffect } from 'react';
import { BookService } from '../../../../services/services/book.service';

function ReturnedBooksComponent() {
  const [page, setPage] = useState(0);
  const [size, setSize] = useState(5);
  const [pages, setPages] = useState([]);
  const [returnedBooks, setReturnedBooks] = useState({});
  const [message, setMessage] = useState('');
  const [level, setLevel] = useState('success');

  useEffect(() => {
    findAllReturnedBooks();
  }, [page, size]);

  const findAllReturnedBooks = () => {
    const bookService = new BookService();
    bookService.findAllReturnedBooks({ page, size }).then(resp => {
      setReturnedBooks(resp);
      setPages(Array(resp.totalPages).fill(0).map((x, i) => i));
    });
  };

  const gotToPage = (pageNumber) => {
    setPage(pageNumber);
  };

  const goToFirstPage = () => {
    setPage(0);
  };

  const goToPreviousPage = () => {
    setPage(page - 1);
  };

  const goToLastPage = () => {
    setPage(returnedBooks.totalPages - 1);
  };

  const goToNextPage = () => {
    setPage(page + 1);
  };

  const isLastPage = () => {
    return page === returnedBooks.totalPages - 1;
  };

  const approveBookReturn = (book) => {
    if (!book.returned) {
      return;
    }
    const bookService = new BookService();
    bookService.approveReturnBorrowBook({ 'book-id': book.id }).then(() => {
      setLevel('success');
      setMessage('Book return approved');
      findAllReturnedBooks();
    });
  };

  return (
    <div>
      {/* Your ReturnedBooksComponent content here */}
    </div>
  );
}

export default ReturnedBooksComponent;
