import React, { Component } from "react";
import Tapan from "../images/photo.jpg";

import node from "../images/node-js-1174925.png";
import express from "../images/ExpressJS.png";
import mongodb from "../images/mongodb-226029.png";
import mongoose from "../images/7552965.png";
import heroku from "../images/heroku-1-282458.png";
import "../App.css";
export default class About extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h1 className="text-center" id="top">
              Developed By 👇
            </h1>
            <div className="card border-dark">
              <img src={Tapan} className="card-img-top" alt="..." />
              <div className="card-body">
                <h3 className="card-title">Tapan </h3>
                
              </div>
            </div>
            
          </div>
          <div className="col-md-4">
            <h1 className="text-center">Tech Used 👇</h1>
            <div className="card">
              <img
                src={node}
                className="card-img-top"
                alt="..."
                width="10%"
                height="10%"
              />
              <div className="card-body text-center">Node.js</div>
            </div>
            <div className="card">
              <img
                src={express}
                className="card-img-top"
                alt="..."
                width="10%"
                height="10%"
              />
              <div className="card-body text-center">Express</div>
            </div>
            <div className="card">
              <img
                src={mongodb}
                className="card-img-top"
                alt="..."
                width="10%"
                height="10%"
              />
              <div className="card-body text-center">Mongo DB</div>
            </div>
            <div className="card">
              <img
                src={mongoose}
                className="card-img-top"
                alt="..."
                width="10%"
                height="10%"
              />
              <div className="card-body text-center">Mongoose</div>
            </div>
            <div className="card">
              <img
                src={heroku}
                className="card-img-top"
                alt="..."
                width="10%"
                height="10%"
              />
              <div className="card-body text-center">Heroku</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
