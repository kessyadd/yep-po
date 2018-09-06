import React, { Component } from 'react';
// import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';
import './../css/Card-square.css';

class CardSquare extends Component {
  render(){

    return(
      <div className="hovereffect">
        <a href="">
          <img className="img-fluid" src="http://placekitten.com/500/500" alt=""/>
          <div className="overlay">
            <h2 className="centered">{this.props.title}</h2>
          </div>
        </a>
      </div>
    )
  }
}

export default CardSquare;