import React from "react";
import Arnab from "./Profile Image/Arnab.jpg"
import Kevin from "./Profile Image/Kevin.jpg"
import Rion from "./Profile Image/rion.jpg"
import Joe from "./Profile Image/Joe.jpg"


const About = props => (
  <div>
    


<div className="jumbotron jumbotron-fluid">
  <div className="container">
    

          <div className="card-deck">
            <div className="card">
              <img className="card-img-top" src={Arnab} alt="Arnab" />
              <div className="card-body">
                <h5 className="card-title">Arnab</h5>
                
              </div>

            </div>
            <div className="card">
              <img className="card-img-top" src={Kevin} alt="Kevin" />
              <div className="card-body">
                <h5 className="card-title">Kevin</h5>
               
               
              </div>

            </div>
          
        
            <div className="card">
              <img className="card-img-top" src={Rion} alt="Rion" />
              <div className="card-body">
                <h5 className="card-title">Rion</h5>
               
               
              </div>

            </div>
            <div className="card">
              <img className="card-img-top" src={Joe} alt="Joe" />
              <div className="card-body">
                <h5 className="card-title">Joe</h5>
                
              </div>

            </div>
          </div>











  </div>
</div>







  </div>
);

export default About;
