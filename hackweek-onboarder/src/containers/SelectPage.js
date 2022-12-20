import Card from "react-bootstrap/Card";
import learningLogo from "./bbc-learning-english-logo.png";
import cricketLogo from "./england_cricket.png";
import cultureLogo from "./stdavidsday.jpeg";
import strictlyLogo from "./strictly.jpeg";
import killingEveLogo from "./killingeve.jpeg";
import gandsLogo from "./gavinandstacey.jpeg";
import iplayerLogo from "./iplayer.png";

const SelectPage = () => {
  return (
    <div className="p-2">
      <h2 className="text-white py-4" style={{ textDecoration: "underline" }}>
        Discover Popular TV
      </h2>
      <div>
        {[
          {
            title: "Strictly Come Dancing",
            equ: "Indian Idol",
            image: strictlyLogo,
          },
          {
            title: "Killing Eve",
            equ: "Wagle Ki Dunia",
            image: killingEveLogo,
          },
          {
            title: "Gavin and Stacey",
            equ: "The Kapil Karma Show",
            image: gandsLogo,
          },
        ].map((item) => (
          <Card
            key={item.title}
            text={item.title}
            className="mb-2 pb-1"
            style={{ width: "360px", height: "240px" }}
          >
            <Card.Header>
              If you like {item.equ}, why not try {item.title} on BBC iPlayer
            </Card.Header>
            <Card.Body className="p-0">
              <Card.Img
                variant="top"
                src={item.image}
                style={{ height: "177px", width: "360px" }}
              />
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default SelectPage;
