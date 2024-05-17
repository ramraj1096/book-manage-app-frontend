import React from 'react';

class BookCardComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bookCover: this.props.book?.cover ? `data:image/jpg;base64,${this.props.book.cover}` : 'https://source.unsplash.com/user/c_v_r/1900x800'
    };
  }

  onShare = () => {
    this.props.share(this.props.book);
  }

  onArchive = () => {
    this.props.archive(this.props.book);
  }

  onAddToWaitingList = () => {
    this.props.addToWaitingList(this.props.book);
  }

  onBorrow = () => {
    this.props.borrow(this.props.book);
  }

  onEdit = () => {
    this.props.edit(this.props.book);
  }

  onShowDetails = () => {
    this.props.details(this.props.book);
  }

  render() {
    const { book, manage } = this.props;
    const { bookCover } = this.state;

    return (
      <div className="book-card">
        {/* Render your book card UI here */}
        {/* Example: */}
        <img src={bookCover} alt="Book Cover" />
        <h2>{book.title}</h2>
        {/* Other book details */}
        {manage && (
          <div>
            {/* Manage actions */}
            <button onClick={this.onShare}>Share</button>
            <button onClick={this.onArchive}>Archive</button>
            <button onClick={this.onAddToWaitingList}>Add to Waiting List</button>
            <button onClick={this.onBorrow}>Borrow</button>
            <button onClick={this.onEdit}>Edit</button>
            <button onClick={this.onShowDetails}>Show Details</button>
          </div>
        )}
      </div>
    );
  }
}

export default BookCardComponent;
