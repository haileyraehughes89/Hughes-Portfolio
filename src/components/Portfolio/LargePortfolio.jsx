import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import {Portfolio} from "../../Data/Data";
import "../../styles/Portfolio.css"

function LargePortfolio() {
  return (
    <Row md={2} className="Row">
      {Portfolio.map((item, index) => (
        <Col key={index} className="Col">
          <a href={item.link}>
          <Card class="Card">
            <Card.Img variant="top" src={item.img} class="CardImg"/>
            <Card.Body>
              <Card.Title class="CardTitle">{item.title}</Card.Title>
              
            </Card.Body>
          </Card>
          </a>
        </Col>
      ))}
    </Row>
);
  
}

export default LargePortfolio;