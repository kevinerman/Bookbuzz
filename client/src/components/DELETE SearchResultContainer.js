import React, { Component } from "react";
import SearchForm from "./SearchForm";
import ResultList from "./ResultList";
import API from "../utils/googleAPI"

class SearchResultContainer extends Component {

  state = {
    search: "",
    results: [],
    showResults: false,
    error: ""
  };

  // When this component mounts, search the Giphy API for pictures of kittens
  componentDidMount() {
    this.searchBooks("kittens");
  }

  // searchBooks = query => {
  //   API.search(query)
  //     .then(res => this.setState({ results: res.data.items }),
  //       console.log(this.state.results))
  //   // .catch(err => console.log(err));
  // };



  saveButton = buttonID => {
    let clickedButton = this.state.results[buttonID].volumeInfo;
    let newBook = {
        newTitle: clickedButton.title,
        newAuthor: clickedButton.authors
    }
        return newBook
      }

  handleInputChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value
    });
  };

  // When the form is submitted, search the Giphy API for `this.state.search`
  handleFormSubmit = event => {
    event.preventDefault();
    this.searchBooks(this.state.search);
  };

  render() {
    return (
      <div>
        <h1 className="text-center"> Search for a book:</h1>
        <SearchForm
          search={this.state.search}
          handleFormSubmit={this.handleFormSubmit}
          handleInputChange={this.handleInputChange}
        />
        <ResultList 
        results={this.state.results}
        saveButton={this.saveButton}
         />




      </div>
    );
  }
}

export default SearchResultContainer;
