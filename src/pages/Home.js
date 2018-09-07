import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import './../css/Home.css'
import Header from './../components/Header.js';
import Crsl from './../components/Carousel.js';
import CardSquare from './../components/Card-square.js';
import CardProduct from './../components/Card-product.js';
import CarouselIdol from './../components/Carousel-idol.js';

const category = [
  {
    title: 'Pre Order',
    desc: 'Browse'
  },
  {
    title: 'Album',
    desc: 'Browse'
  },
  {
    title: 'Goods',
    desc: 'Browse'
  },
  {
    title: 'Lightstick',
    desc: 'Browse'
  },
  {
    title: 'Official',
    desc: 'Browse'
  },
  {
    title: 'Clothing',
    desc: 'Browse'
  },
  {
    title: 'Cosmetics',
    desc: 'Browse'
  },
  {
    title: 'Pre Loved',
    desc: 'Browse'
  },
]

class Home extends Component {
  render(){
    const categoryList = category.map((items) => {
      return (
        <Col className="col-lg-3 col-md-3 col-6" style={{marginTop: '15px'}}>
          <CardSquare title={items.title} desc={items.desc}/>
        </Col>
      );
    })
    return(
      <div>
        <Header/>
          <Col className="offset-1 col-lg-10 col-md-10 col-10 pt-4">
            <Crsl/>
          </Col>
          <Col className="offset-1 col-lg-10 col-md-10 col-10 pt-5">
            <h3 className="text-left fontH3" style={{color: '#05abe0'}}>Categories</h3>
            <Row>
              {categoryList}
            </Row>
          </Col>
          <Col className="offset-1 col-lg-10 col-md-10 col-10 pt-5">
            <h3 className="text-left fontH3" style={{color: '#05abe0'}}>New Goods</h3>
            <Row>
              <Col className="col-lg-3 col-md-3 col-6" style={{marginTop: '15px'}}>
                <CardProduct srcs="http://placekitten.com/300/800"/>
              </Col> 
              <Col className="col-lg-3 col-md-3 col-6" style={{marginTop: '15px'}}>
                <CardProduct srcs="http://placekitten.com/500/700"/>
              </Col>
              <Col className="col-lg-3 col-md-3 col-6" style={{marginTop: '15px'}}>
                <CardProduct srcs="http://placekitten.com/300/800"/>
              </Col> 
              <Col className="col-lg-3 col-md-3 col-6" style={{marginTop: '15px'}}>
                <CardProduct srcs="http://placekitten.com/500/700"/>
              </Col>              
            </Row>
          </Col>
          <Col className="offset-1 col-lg-10 col-md-10 col-10 pt-5">
            <h3 className="text-left fontH3" style={{color: '#05abe0'}}>Popular Goods</h3>
            <Row>
              <Col className="col-lg-3 col-md-3 col-6" style={{marginTop: '15px'}}>
                <CardProduct srcs="http://placekitten.com/300/800"/>
              </Col> 
              <Col className="col-lg-3 col-md-3 col-6" style={{marginTop: '15px'}}>
                <CardProduct srcs="http://placekitten.com/500/700"/>
              </Col>
              <Col className="col-lg-3 col-md-3 col-6" style={{marginTop: '15px'}}>
                <CardProduct srcs="http://placekitten.com/300/800"/>
              </Col> 
              <Col className="col-lg-3 col-md-3 col-6" style={{marginTop: '15px'}}>
                <CardProduct srcs="http://placekitten.com/500/700"/>
              </Col>              
            </Row>
          </Col>
          <Col className="offset-1 col-lg-10 col-md-10 col-10 pt-5">
            <h3 className="text-left fontH3" style={{color: '#05abe0'}}>Idols</h3>
            <Row>
              <CarouselIdol/>
            </Row>
          </Col>
      </div>
    )
  }
}

export default Home;