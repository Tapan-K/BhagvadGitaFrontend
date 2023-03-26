import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Footer extends Component {
  render() {
    return (
      <footer className="page-footer font-small blue pt-4">
        <div className="footer-copyright text-center py-3">
          © 2020 Copyright: Made With 💖 By
          <Link to="/about#top">Tapan</Link>
          &nbsp;&nbsp;&nbsp;
          <br />
          
          &nbsp;&nbsp;&nbsp;
          <br />
          <br />
          <a
            className="btn btn-outline-primary"
            href="https://github.com/Tapan-K/bhagavad-gita"
          >
            <i class="fab fa-github "></i> project Source Code{" "}
          </a>
          <br />
         
          <p className="mt-5 mb-3 text-muted">
            <a href="https://www.hitwebcounter.com">
              <img
                src="https://hitwebcounter.com/counter/counter.php?page=7917069&style=0010&nbdigits=6&type=page&initCount=101"
                title="Free Counter"
                Alt="web counter"
                border="0"
              />
            </a>
          </p>
        </div>
      </footer>
    );
  }
}
