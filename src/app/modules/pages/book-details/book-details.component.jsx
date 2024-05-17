import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { BookService } from '../../../../services/services/book.service';
import { FeedbackService } from '../../../../services/services/feedback.service';

function BookDetailsComponent() {
  const [book, setBook] = useState({});
  const [feedbacks, setFeedbacks] = useState({});
  const [page, setPage] = useState(0);
  const size = 5;
  const [pages, setPages] = useState([]);
  const [bookId, setBookId] = useState(0);
  
  const { bookId: routeBookId } = useParams();

  useEffect(() => {
    setBookId(routeBookId);
  }, [routeBookId]);

  useEffect(() => {
    if (bookId) {
      const bookService = new BookService();
      const feedbackService = new FeedbackService();

      bookService.findBookById({ 'book-id': bookId }).then(book => {
        setBook(book);
        findAllFeedbacks();
      });
    }
  }, [bookId]);

  const findAllFeedbacks = () => {
    const feedbackService = new FeedbackService();

    feedbackService.findAllFeedbacksByBook({ 'book-id': bookId, page, size }).then(data => {
      setFeedbacks(data);
    });
  };

  const gotToPage = (pageNumber) => {
    setPage(pageNumber);
    findAllFeedbacks();
  };

  const goToFirstPage = () => {
    setPage(0);
    findAllFeedbacks();
  };

  const goToPreviousPage = () => {
    setPage(prevPage => prevPage - 1);
    findAllFeedbacks();
  };

  const goToLastPage = () => {
    setPage(feedbacks.totalPages - 1);
    findAllFeedbacks();
  };

  const goToNextPage = () => {
    setPage(prevPage => prevPage + 1);
    findAllFeedbacks();
  };

  const isLastPage = page === feedbacks.totalPages - 1;

  return (
    <div>
      {/* Render your book details and feedbacks here */}
      {/* Example: */}
      <h2>{book.title}</h2>
      {/* Render feedbacks */}
      {feedbacks.content && feedbacks.content.map(feedback => (
        <div key={feedback.id}>
          {/* Render feedback details */}
        </div>
      ))}
      {/* Pagination controls */}
      <button onClick={goToFirstPage}>First</button>
      <button onClick={goToPreviousPage}>Previous</button>
      <span>{page + 1} / {feedbacks.totalPages}</span>
      <button onClick={goToNextPage}>Next</button>
      <button onClick={goToLastPage}>Last</button>
    </div>
  );
}

export default BookDetailsComponent;
