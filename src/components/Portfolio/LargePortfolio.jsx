import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import {Portfolio} from "../../Data/Data";
import "../../styles/Portfolio.css"

function LargePortfolio() {
  return (
    <Row md={3} className="Row">
      {Portfolio.map((item, index) => (
        <Col key={index} className="Col">
          <Card class="Card">
            <Card.Img variant="top" src={item.img} class="CardImg"/>
            <Card.Body>
              <Card.Title class="CardTitle">{item.title}</Card.Title>
              
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
);
  
}

export default LargePortfolio;