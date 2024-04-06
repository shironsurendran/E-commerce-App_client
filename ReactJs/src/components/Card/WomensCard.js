import React  from 'react'
import { Card, CardBody, CardImg ,Row,Col, Button} from "reactstrap";
import './css/ProductCard.css';
class WomensCard extends React.Component {
    render() {
        return (
            
          <React.Fragment>
            {/* <h1>asfdasfasfafa/sf</h1> */}
            <a href={`/women/${this.props.href}`} className="a-tag">
              <Card id="productCard">
                <CardImg src={this.props.src} className="productImage" />
                <CardBody className="filterCardBodyNormal">
                  <h5 className="productName">{this.props.name}<span className="brandText">({this.props.Brand})</span></h5>
                  <p className="productName">
                    Rate : <span className="rate">
                    Rs.{this.props.price}&nbsp;
        <strike className="rateText">(Rs.{this.props.rate})</strike></span>
                  </p>
                  <p className="des">{this.props.des}</p>
                </CardBody>
                <div className="filterProductHover">
                  <Row>
                    <Col md={6}>
                      <Button color="danger" className="filterHoverButton">
                        Add Bag
                      </Button>
                    </Col>
                    <Col md={6}>
                      <Button color="danger" className="filterHoverButton">
                        Wishlist
                      </Button>
                    </Col>
                  </Row>
                  <hr />
                  <Row>
                    <Col lg={12} className="filterSizes">
                      {this.props.sizes}
                    </Col>
                  </Row>
                </div>
              </Card>
            </a>
          </React.Fragment>
        );
    }
}

export default WomensCard;
