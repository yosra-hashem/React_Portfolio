import { Link } from "react-router-dom";
// import { Card,Nav } from "react-bootstrap";

function Nav() {
  return (
    <div>
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/home">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">
            About Us
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/products">
            Shop
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/counter">
            Counter
          </Link>
        </li>
      </ul>

    </div>
    // <div>
    //   <Card>
    //     <Card.Header>
    //       <Nav variant="tabs" defaultActiveKey="#first">
    //         <Nav.Item>
    //           <Nav.Link href="#first">Active</Nav.Link>
    //         </Nav.Item>
    //         <Nav.Item>
    //           <Nav.Link href="#link">Link</Nav.Link>
    //         </Nav.Item>
          
    //       </Nav>
    //     </Card.Header>
    //   </Card>
    // </div>
  );
}

export default Nav;
