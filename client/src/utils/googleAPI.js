import axios from "axios";
import apiKey from "./key.js";

const BASEURL = "https://www.googleapis.com/books/v1/volumes?q=";

export default {
  getBooks: function(query) {
    return axios.get(BASEURL + query + apiKey);
  }
};
