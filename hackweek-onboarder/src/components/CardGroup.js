import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import CardGroup from "react-bootstrap/CardGroup";
import ComedyImage from "./comedy.jpg";
import SoapImage from "./daily-soap.jpg";
import RealityImage from "./did-little-masters-dance-reality-show.webp";
import FamilyImage from "./family-drama.webp";
import TalentImage from "./indianidol-singing-reality-show.jpg";
import CookingImage from "./masterchef-india.jpg";
import BusiImage from "./shark-tank-india.jpg";

const cardStyle = {
  background: "#222222",
  color: "#eeeeee",
  width: "172px",
  height: "182px",
};

const imageStyle = {
  width: "100%",
  height: "87%",
};

cardStyle["font-family"] = "ReithSans, Arial, Helvetica, freesans, sans-serif";
cardStyle["border-radius"] = 0;
cardStyle["--bs-card-border-width"] = "5px";

const items = [
  { title: "The Kapil Karma Show", image: ComedyImage },
  { title: "Wagle Ki Dunia", image: FamilyImage },
  { title: "Daily Soap", image: SoapImage },
  { title: "Lil Masters", image: RealityImage },
  { title: "Indian Idol", image: TalentImage },
  { title: "MasterChef India", image: CookingImage },
  { title: "Shark Tank India", image: BusiImage },
];

function GroupExample() {
  return (
    <Row xs={2} md={3} className="g-3">
      {items.map((item) => (
        <Col>
          <Card style={cardStyle}>
            <Card.Img style={imageStyle} variant="bottom" src={item.image} />
            <Card.Footer>
              <Card.Title>{item.title}</Card.Title>
            </Card.Footer>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default GroupExample;
