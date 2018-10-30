import axios from "axios"

// const BASEURL = "https://www.googleapis.com/books/v1/volumes?q=";


export default {
    // search: function(query) {
    //   return axios.get(BASEURL + query + APIKEY);
    // },

    getBooks: function() {
      return axios.get("/api/books/");
    },
    deleteBook: function(id) {
      return axios.delete("/api/books/" + id);
    },
    saveBooks: function(BookData) {
      console.log("inside the save article in API js");
      return axios.post("/api/books/", BookData);
    },
    postClubs: function(ClubData){
      console.log("inside the postClubs in API js");
      return axios.post("/api/bookclubs/", ClubData);
    }
  };
