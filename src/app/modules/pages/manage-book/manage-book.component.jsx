import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { BookService } from '../../../../services/services/book.service';

function ManageBookComponent() {
  const { bookId } = useParams();
  const history = useHistory();

  const [errorMsg, setErrorMsg] = useState([]);
  const [bookRequest, setBookRequest] = useState({
    authorName: '',
    isbn: '',
    synopsis: '',
    title: ''
  });
  const [selectedBookCover, setSelectedBookCover] = useState(null);
  const [selectedPicture, setSelectedPicture] = useState(undefined);

  useEffect(() => {
    if (bookId) {
      const bookService = new BookService();
      bookService.findBookById({ 'book-id': bookId }).then(book => {
        setBookRequest({
          id: book.id,
          title: book.title,
          authorName: book.authorName,
          isbn: book.isbn,
          synopsis: book.synopsis,
          shareable: book.shareable
        });
        setSelectedPicture(`data:image/jpg;base64,${book.cover}`);
      });
    }
  }, [bookId]);

  const saveBook = () => {
    const bookService = new BookService();
    bookService.saveBook({ body: bookRequest }).then(bookId => {
      if (selectedBookCover) {
        bookService.uploadBookCoverPicture({ 'book-id': bookId, body: { file: selectedBookCover } }).then(() => {
          history.push('/books/my-books');
        });
      } else {
        history.push('/books/my-books');
      }
    }).catch(err => {
      console.error(err);
      setErrorMsg(err.error.validationErrors);
    });
  };

  const onFileSelected = (event) => {
    const file = event.target.files[0];
    setSelectedBookCover(file);

    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setSelectedPicture(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div>
      {/* Your manage book component content here */}
    </div>
  );
}

export default ManageBookComponent;
