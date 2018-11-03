import React, { Component } from "react";
// import About from "../../components/About";
import Wrapper from "../../components/Wrapper";
import "../../components/books.css";


class Home extends Component {
  render() {
    return (
      <div>
        <hr />
        <hr />
        <hr />
        <Wrapper>

          <div className="text-center">

            <h1> Welcome To BookBuzz</h1>

            <p>
              BookBuzz is an application created for users to find new books to read, save for later, create book clubs
              and join clubs based on their reading interests.
              It is a fun interactive app for users to connect with others who share the same interest in books.
              The inspiration behind this app was to create a platform for book lovers to come together and connect.
            </p>

          </div>
     
          <div className="stack">
            <div className="book"></div>
            <div className="book"></div>
            <div className="book"></div>
            <div className="book"></div>
            <div className="book"></div>
          </div>
          
          <h3 className="text-center">Our Developers</h3>
          <div className="card-deck">
            <div className="card">
              <img className="card-img-top" src="http://i1076.photobucket.com/albums/w450/kelzzxo/profilepic_zpsbp8o9epx.jpg" alt="Arnab" />
              <div className="card-body">
                <h5 className="card-title">Arnab</h5>
                <p className="card-text">LinkedIn: </p>
              </div>

            </div>
            <div className="card">
              <img className="card-img-top" src="http://i1076.photobucket.com/albums/w450/kelzzxo/kevin_zpsjvzfbruu.jpg" alt="Kevin" />
              <div className="card-body">
                <h5 className="card-title">Kevin</h5>
                <p className="card-text">LinkedIn: </p>
              </div>

            </div>
          </div>
          <div className="card-deck">
            <div className="card">
              <img className="card-img-top" src="http://i1076.photobucket.com/albums/w450/kelzzxo/16266327_1729711450388349_6902890598876939862_n_zpsyms5s4ey.jpg" alt="Rion" />
              <div className="card-body">
                <h5 className="card-title">Rion</h5>
                <p className="card-text">LinkedIn: </p>
              </div>

            </div>
            <div className="card">
              <img className="card-img-top" src="http://i1076.photobucket.com/albums/w450/kelzzxo/673f32bf-6cef-4457-9fc3-c81db7ac45c7_zpsfxabxoj6.jpg" alt="Joe" />
              <div className="card-body">
                <h5 className="card-title">Joe</h5>
                <p className="card-text"> LinkedIn :</p>
              </div>

            </div>
          </div>

        </Wrapper>

      </div>

    );
  }
}

export default Home;
