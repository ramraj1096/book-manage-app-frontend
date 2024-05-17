import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { BookService } from '../../../../services/services/book.service';

function MyBooksComponent() {
  const history = useHistory();

  const [bookResponse, setBookResponse] = useState({});
  const [page, setPage] = useState(0);
  const [size, setSize] = useState(5);
  const [pages, setPages] = useState([]);

  useEffect(() => {
    findAllBooks();
  }, [page, size]);

  const findAllBooks = () => {
    const bookService = new BookService();
    bookService.findAllBooksByOwner({ page, size }).then(books => {
      setBookResponse(books);
      setPages(Array(books.totalPages).fill(0).map((x, i) => i));
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
    setPage(bookResponse.totalPages - 1);
  };

  const goToNextPage = () => {
    setPage(page + 1);
  };

  const isLastPage = () => {
    return page === bookResponse.totalPages - 1;
  };

  const archiveBook = (book) => {
    const bookService = new BookService();
    bookService.updateArchivedStatus({ 'book-id': book.id }).then(() => {
      book.archived = !book.archived;
    });
  };

  const shareBook = (book) => {
    const bookService = new BookService();
    bookService.updateShareableStatus({ 'book-id': book.id }).then(() => {
      book.shareable = !book.shareable;
    });
  };

  const editBook = (book) => {
    history.push(`/books/manage/${book.id}`);
  };

  return (
    <div>
      {/* Your MyBooksComponent content here */}
    </div>
  );
}

export default MyBooksComponent;
