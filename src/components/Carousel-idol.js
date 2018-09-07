import React, { Component } from 'react';
import OwlCarousel from 'react-owl-carousel';
import './../css/Carousel-idol.css';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import BTS from './../img/idol-logo/BTS.jpg';
import akmu from './../img/idol-logo/akmu.jpg';
import blackpink from './../img/idol-logo/blackpink.jpg';
import bigbang from './../img/idol-logo/bigbang.png';
import ikon from './../img/idol-logo/ikon.jpg';
import twice from './../img/idol-logo/twice.jpg';
import winner from './../img/idol-logo/winner.jpg';

const options = {
  items: 5,  
  autoplay:true,
  margin: 10,
  dots: false
}
class CarouselIdol extends Component {
  componentDidMount()
  {
  }

  render() {
    return (
      <div className="pt-3 pb-5">
        <OwlCarousel
            className="owl-theme"
            loop                 
            nav 
            {...options}      
        >
        <div className="item eff"><a href=""><img className="img-fluid" src={BTS} alt=""/></a></div>
        <div className="item eff"><a href=""><img className="img-fluid" src={blackpink} alt=""/></a></div>
        <div className="item eff"><a href=""><img className="img-fluid" src={ikon} alt=""/></a></div>
        <div className="item eff"><a href=""><img className="img-fluid" src={bigbang} alt=""/></a></div>
        <div className="item eff"><a href=""><img className="img-fluid" src={akmu} alt=""/></a></div>
        <div className="item eff"><a href=""><img className="img-fluid" src={winner} alt=""/></a></div>
        <div className="item eff"><a href=""><img className="img-fluid" src={twice} alt=""/></a></div>
      </OwlCarousel>
    </div>
    )
  }
}

export default CarouselIdol;