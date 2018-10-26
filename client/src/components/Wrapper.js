import React from "react";
// import { Link} from "react-router-dom";
import './Wrapper.css';

const Wrapper = (props) => (
  
   <div id="wrapper">
        <div id="container">
    
            <section className="open-book">
                <header>
                    <h1>BookBuzz</h1>
                    {/* <h6>Project 3</h6> */}
                </header>
                <article>
                    <h2 className="chapter-title">BookBuzz</h2>
                    {props.children}
                </article>
                <footer>
                    <ol id="page-numbers">
                        <li>1</li>
                        <li>2</li>
                    </ol>
                </footer>
            </section>
        </div>
    </div>

);

export default Wrapper;