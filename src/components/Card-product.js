import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardSubtitle } from 'reactstrap';
import './../css/Card-product.css';

class CardProduct extends Component {
  render() {
    return(
      <div>
        <Card className="text-left cardProduct card-font">
          <a href="">
            <div className="hovereffect-2 pb-3">
              <CardImg top width="100%" src={this.props.srcs} alt="Card image cap"className="card-img-top" />
              <div className="overlay-2">
                <div></div>
              </div>      
            </div>  
          <CardBody>
            {/* <CardTitle>Product Name</CardTitle> */}
            <CardSubtitle className="card-font-title">Product Name</CardSubtitle>
            <CardText className="card-font-desc"><i>Tags</i><br/>Rp. 200.000</CardText>
          </CardBody>
          </a>
        </Card>
      </div>
    )
  }
}

export default CardProduct;