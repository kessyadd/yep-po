import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardSubtitle } from 'reactstrap';
import './../css/Card-product.css';

class CardProduct extends Component {
  render() {
    return(
      <div>
        <Card className="text-left cardProduct">
          <a href="">
          <CardImg top width="100%" src={this.props.srcs} alt="Card image cap"className="card-img-top" />
          <CardBody>
            {/* <CardTitle>Product Name</CardTitle> */}
            <CardSubtitle>Product Name</CardSubtitle>
            <CardText><i>Tags</i><br/>Rp. 200.000</CardText>
          </CardBody>
          </a>
        </Card>
      </div>
    )
  }
}

export default CardProduct;