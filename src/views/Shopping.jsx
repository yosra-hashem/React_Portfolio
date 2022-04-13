import { useEffect, useState } from "react";
import { Button, Card, Spinner } from 'react-bootstrap';
import {Link} from 'react-router-dom';

function Shopping() {
  const [products, setProducts] = useState([]);
  const [loading, setloading] = useState(false);

  const fetchProducts = () => {
    setloading(true);
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => {
        setProducts(json)
        setloading(false)
      });
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="text-center">
      <h2>Shop</h2>
      {
        loading ? (
          <Spinner className="m-3" animation="grow" />
        )
        :
        (
          <div className="products-list row justify-content-center">
        {products.length &&
          products.map((product) => {
            return <Card key={product.id} className="col-3 m-3 p-1">
              <Card.Img className="w-50 mx-auto" variant="top" src={product.image} />
              <Card.Body>
                <Card.Title>{product.category}</Card.Title>
                <Card.Text>
                  <h4>{product.price}</h4>
                </Card.Text>
                {/* <Button variant="primary m-2">Show Details</Button> */}
                <Link to={`${product.id}`}><Button variant="primary m-2">Show Details</Button></Link>
              </Card.Body>
            </Card>;
          })}
      </div>
        )
      }
      
    </div>
  );
}

export default Shopping;
