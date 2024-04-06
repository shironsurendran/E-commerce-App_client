import React,{useState,useEffect} from "react";
import axios from "axios";
import { Row, Container,Col,Form} from "reactstrap";
import { ListGroup, ListGroupItem } from "reactstrap";
import ProductCard from '../Card/ProductCard';
import './Product.css';

const Product =()=>{
  const [product, setproduct] = useState([]);
  const [brand, setBrand] = useState();
  const [size, setSize] = useState();
  const [Rate, setRate] = useState([]);

      console.log(Rate)
    useEffect(() => {
      axios
        .post("http://localhost:8080/product/filter", {
          ...brand,
          ...size,
          ...Rate
        })
        .then(res => {
          setproduct(res.data);
          console.log(brand);
          console.log(size);
          console.log(Rate);
        })
        .catch(err => console.error(err));
    }, [brand, size, Rate]);

  const productSrc=()=>{
    // console.log(product);
    return product.map((data, i) => {
      let price = Math.floor((data.Rate - ((data.Rate / 100) * data.offer)));
      return (
        <Col lg={3} id="card">
          {/* <h1>yyyyyyyyyy</h1> */}
          <ProductCard
          id="hi"
            href={data.code}
            name={data.name}
            Brand={data.brand}
            src={data.productImage[0]}
            price={price}
            rate={data.Rate}
            des={data.description}
            sizes={data.size.map(x => (
              <span className="sizeRadioButton">
                {x}
              </span>
            ))}
          />
        </Col>
      );
    });
  }
  return (
    
    <React.Fragment>
      <Container fluid={true}>
        <Row>
          <Col lg="2" className="sideNav">
            <Form>
              <ListGroup>
                <ListGroupItem>
                  <input
                    type="radio"
                    name="shirt"
                    value={"all"}
                    onChange={e => setBrand({ brand: e.target.value })}
                  />
                  <span className="sideBar">ALL</span>
                </ListGroupItem>
                <ListGroupItem>
                  <input
                    type="radio"
                    name="shirt"
                    value={"Louis philippe"}
                    onChange={e => setBrand({ brand: e.target.value })}
                  />
                  <span className="sideBar">Louis philippe</span>
                </ListGroupItem>
                <ListGroupItem>
                  <input
                    type="radio"
                    name="shirt"
                    value={"INVICTUS"}
                    onChange={e => setBrand({ brand: e.target.value })}
                  />
                  <span className="sideBar">INVICTUS</span>
                </ListGroupItem>
                <ListGroupItem>
                  <input
                    type="radio"
                    name="shirt"
                    value={"Mast & Harbour"}
                    onChange={e => setBrand({ brand: e.target.value })}
                  />
                  <span className="sideBar">Mast & Harbour</span>
                </ListGroupItem>
                <ListGroupItem>
                  <input
                    type="radio"
                    name="shirt"
                    value={"Wintage"}
                    onChange={e => setBrand({ brand: e.target.value })}
                  />
                  <span className="sideBar">Wintage</span>
                </ListGroupItem>
                <ListGroupItem>
                  <input
                    type="radio"
                    name="shirt"
                    value={"MR BUTTON"}
                    onChange={e => setBrand({ brand: e.target.value })}
                  />
                  <span className="sideBar">MR BUTTON</span>
                </ListGroupItem>
                <ListGroupItem>
                  <input
                    type="radio"
                    name="shirt"
                    value={"Raymond"}
                    onChange={e => setBrand({ brand: e.target.value })}
                  />
                  <span className="sideBar">Raymond</span>
                </ListGroupItem>
              </ListGroup>
              <hr />
              {/* Size */}
              <ListGroup>
                <ListGroupItem>
                  <input
                    type="radio"
                    name="size"
                    value={"S"}
                    onChange={e => setSize({ size: e.target.value })}
                  />
                  <span className="sideBar">S</span>
                </ListGroupItem>
                <ListGroupItem>
                  <input
                    type="radio"
                    name="size"
                    value={"M"}
                    onChange={e => setSize({ size: e.target.value })}
                  />
                  <span className="sideBar">M</span>
                </ListGroupItem>
                <ListGroupItem>
                  <input
                    type="radio"
                    name="size"
                    value={"L"}
                    onChange={e => setSize({ size: e.target.value })}
                  />
                  <span className="sideBar">L</span>
                </ListGroupItem>
                <ListGroupItem>
                  <input
                    type="radio"
                    name="size"
                    value={"XL"}
                    onChange={e => setSize({ size: e.target.value })}
                  />
                  <span className="sideBar">XL</span>
                </ListGroupItem>
                <ListGroupItem>
                  <input
                    type="radio"
                    name="size"
                    value={"XXL"}
                    onChange={e => setSize({ size: e.target.value })}
                  />
                  <span className="sideBar">XXL</span>
                </ListGroupItem>
              </ListGroup>
              <hr />
              {/* Rate */}
              <ListGroup>
                <ListGroupItem>
                  <input
                    type="radio"
                    name="Rate"
                    onChange={e => setRate({ Rate: [2000, 3000] })}
                  />
                  <span className="sideBar">2000 to 3000</span>
                </ListGroupItem>
                <ListGroupItem>
                  <input
                    type="radio"
                    name="Rate"
                    onChange={e => setRate({ Rate: [3500, 4000] })}
                  />
                  <span className="sideBar">3500 to 4000</span>
                </ListGroupItem>
                <ListGroupItem>
                  <input
                    type="radio"
                    name="Rate"
                    onChange={e => setRate({ Rate: [4500, 5000] })}
                  />
                  <span className="sideBar">4500 to 5000</span>
                </ListGroupItem>
                <ListGroupItem>
                  <input
                    type="radio"
                    name="Rate"
                    onChange={e => setRate({ Rate: [5500, 6000] })}
                  />
                  <span className="sideBar">5500 and 6000</span>
                </ListGroupItem>
                <ListGroupItem>
                  <input
                    type="radio"
                    name="Rate"
                    onChange={e => setRate({ Rate: [6000] })}
                  />
                  <span className="sideBar">6000 and Above</span>
                </ListGroupItem>
              </ListGroup>
            </Form>
          </Col>
          <Col lg="10" className="filterContainer">
            <Container fluid={true}>
              <Row className="galleryRow">{productSrc()}</Row>
            </Container>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
}

export default Product;
