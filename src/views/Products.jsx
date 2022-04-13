import { useEffect, useState } from "react";
import { Card, Spinner, ListGroupItem, ListGroup } from "react-bootstrap";
import { useParams } from "react-router-dom";

function Products() {
  const params = useParams();

  const [product, setProduct] = useState(null);
  const [loading, setloading] = useState(false);

  const fetchProductD = () => {
    setloading(true);
    fetch(`https://fakestoreapi.com/Products/${params.id}`)
      .then((res) => res.json())
      .then((json) => setProduct(json), setloading(false));
  };

  useEffect(() => {
    fetchProductD();
  }, []);

  return (
    <div>
      <h3 className="text-center">Products Details</h3>
      {product ? (
        <Card className="text-center m-3 p-1">
        <Card.Img className="w-25 mx-auto" variant="top" src={product.image} />
        <Card.Body className="m-3">
          <Card.Title>{product.category}</Card.Title>
          <Card.Text>
            <h4>{product.price}</h4>
            <p className="w-25 mx-auto">Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
              when an unknown printer took a galley of type and scrambled it to make a type specimen book
              </p>
          </Card.Text>
        </Card.Body>
      </Card>
      ) : (
        <div className="text-center m-3 ">
          <Spinner className="text-center m-3 " animation="grow" />
        </div>
      )}
    </div>
  );
}

export default Products;
