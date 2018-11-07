import React, { Component } from "react";
// import Container from '../../components/Container/Container';
import Card from '../../components/Card/card';
import BookScraped from '../../components/BookScraped/BookScraped';
import myAPI from "../../utils/API";
import Wrapper from "../../components/Wrapper";

class SavedBooks extends Component {
  state = {
    savedBooks: []
  }

  componentDidMount() {
    this.getBooksHandler();
  }

  getBooksHandler() {
    myAPI.getBooks()
      .then(res => this.setState({savedBooks: res.data}))
      .catch(err => console.log(err));
  }

  deleteBooksHandler = ( event, id ) => {
    myAPI.deleteBook(id)
      .then(res => this.getBooksHandler())
      .catch(err => console.log(err));
    }

  render() {
    let saved = <p>There are no books saved!</p>

    if (this.state.savedBooks.length > 0) {
      saved = this.state.savedBooks.map((book, index) => {
          console.log (book);
        return <BookScraped
            key={book._id}
            bookId={book._id}
            title={book.title}
            author={book.author}
            snippet={book.snippet}
            URL={book.URL}
            preview={book.preview}
            action={this.deleteBooksHandler}
            saveTitle="Delete from saved" />
      });

    }

    return (
      <div>
        <hr />
        <hr />
        <hr />
        <Wrapper>
        <Card title="Saved Articles">
         {saved}
        </Card>
        </Wrapper>
      </div>
    )

  }
}

export default SavedBooks;