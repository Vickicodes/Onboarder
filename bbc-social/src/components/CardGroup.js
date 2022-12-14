import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";

const cardStyle = { 
  background: '#222222',
  color: '#eeeeee',
};

cardStyle['font-family'] = 'ReithSans, Arial, Helvetica, freesans, sans-serif';
cardStyle['border-radius'] = 0;
cardStyle['--bs-card-border-width'] = '5px';

function GroupExample() {
  return (
    <CardGroup>
      <Card style={cardStyle}>
        <Card.Img variant="top" src="holder.js/100px160" />
        <Card.Body>
          <Card.Title><b>Card title</b></Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card style={cardStyle}>
        <Card.Img variant="top" src="holder.js/100px160" />
        <Card.Body>
          <Card.Title><b>Card title</b></Card.Title>
          <Card.Text>
            This card has supporting text below as a natural lead-in to
            additional content.{" "}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card style={cardStyle}>
        <Card.Img variant="top" src="holder.js/100px160" />
        <Card.Body>
          <Card.Title><b>Card title</b></Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This card has even longer content than the
            first to show that equal height action.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
    </CardGroup>
  );
}

export default GroupExample;
