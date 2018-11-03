import React, { Component } from "react";
// import About from "../../components/About";
import Wrapper from "../../components/Wrapper";
import Rion from "./images/rion.jpg";
import Joe from "./images/joe.jpg";
import Arnab from "./images/arnab.jpg";
import Kevin from "./images/kevin.jpg";
import "../../components/About.css"



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
          <hr />
          <hr />
          <hr />
          <hr />
          <hr />
          <hr />
          <hr />
          <hr />
          <hr />
          <hr />
          <hr />
          <hr />
          
          <h3 className="text-center">Our Developers</h3>
          <div className="card-deck">
            <div className="card">
              <img className="card-img-top" src={Arnab} alt="Arnab" />
              <div className="card-body">
                <h5 className="card-title">Arnab</h5>
                {/* <p className="card-text">LinkedIn:  </p> */}
              </div>

            </div>
            <div className="card">
              <img className="card-img-top" src={Kevin} alt="Kevin" />
              <div className="card-body">
                <h5 className="card-title">Kevin</h5>
                {/* <p className="card-text">LinkedIn: </p> */}
                <ion-icon name="logo-linkedin"></ion-icon>
              </div>

            </div>
          </div>
          <div className="card-deck">
            <div className="card">
              <img className="card-img-top" src={Rion} alt="Rion" />
              <div className="card-body">
                <h5 className="card-title">Rion</h5>
                {/* <p className="card-text">LinkedIn: </p> */}
                <ion-icon name="logo-linkedin"></ion-icon>
              </div>

            </div>
            <div className="card">
              <img className="card-img-top" src={Joe} alt="Joe" />
              <div className="card-body">
                <h5 className="card-title">Joe</h5>
                {/* <p className="card-text"> LinkedIn: </p> */}
                <ion-icon name="logo-linkedin"></ion-icon>
              </div>

            </div>
          </div>

        </Wrapper>

      </div>

    );
  }
}

export default Home;
