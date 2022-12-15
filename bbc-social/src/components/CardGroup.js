import Card from "react-bootstrap/Card";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import CardGroup from "react-bootstrap/CardGroup";
import ComedyImage from "./comedy.jpg";
import SoapImage from "./daily-soap.jpg";
import RealityImage from "./did-little-masters-dance-reality-show.webp";
import FamilyImage from "./family-drama.webp";
import TalentImage from "./indianidol-singing-reality-show.jpg";
import CookingImage from "./masterchef-india.jpg";
import BusiImage from "./shark-tank-india.jpg";

const cardStyle = { 
  background: '#222222',
  color: '#eeeeee',
  width: '464px',
  height: '300px'
};

const imageStyle = {
  width: '100%',
  height: '87%'
};

cardStyle['font-family'] = 'ReithSans, Arial, Helvetica, freesans, sans-serif';
cardStyle['border-radius'] = 0;
cardStyle['--bs-card-border-width'] = '5px';

function GroupExample() {
  return (
    <Row xs={0} md={3} className="g-3">
      <Card style={cardStyle}>
        <Card.Img style={imageStyle} variant="top" src={ComedyImage} />
        <Card.Footer>
        <Card.Title><b>The Kapil Karma Show</b></Card.Title>
        </Card.Footer>
      </Card>
      <Card style={cardStyle}>
      <Card.Img style={imageStyle} variant="top" src={SoapImage} />
        <Card.Footer>
        <Card.Title><b>Daily Soap</b></Card.Title>
        </Card.Footer>
      </Card>
      <Card style={cardStyle}>
      <Card.Img style={imageStyle} variant="top" src={RealityImage} />
        <Card.Footer>
        <Card.Title><b>Lil Masters</b></Card.Title>
        </Card.Footer>
      </Card>
      <Card style={cardStyle}>
      <Card.Img style={imageStyle} variant="bottom" src={FamilyImage} />
        <Card.Footer>
        <Card.Title><b>Wagle Ki Dunia</b></Card.Title>
        </Card.Footer>
      </Card>
      <Card style={cardStyle}>
      <Card.Img style={imageStyle} variant="bottom" src={TalentImage} />
        <Card.Footer>
        <Card.Title><b>Indian Idol</b></Card.Title>
        </Card.Footer>
      </Card>
      <Card style={cardStyle}>
      <Card.Img style={imageStyle} variant="bottom" src={CookingImage} />
        <Card.Footer>
        <Card.Title><b>MasterChef India</b></Card.Title>
        </Card.Footer>
      </Card>
      <Card style={cardStyle}>
      <Card.Img style={imageStyle} variant="bottom" src={BusiImage} />
        <Card.Footer>
        <Card.Title><b>Shark Tank India</b></Card.Title>
        </Card.Footer>
      </Card>
    </Row>
  );
}

export default GroupExample;
