import Card from "react-bootstrap/Card";
import learningLogo from "./bbc-learning-english-logo.png";
import cricketLogo from "./england_cricket.png";
import cultureLogo from "./stdavidsday.jpeg";
import strictlyLogo from "./strictly.jpeg";
import killingEveLogo from "./killingeve.jpeg";
import gandsLogo from "./gavinandstacey.jpeg";

const SelectPage = () => {
  return (
    <div className="p-2">
      <h2 className="text-white py-4" style={{ textDecoration: "underline" }}>
        Discover Popular TV
      </h2>
      <p className="text-white">
        {" "}
        Based on the shows you told us you enjoy watching at home in Mumbai, we
        think you might enjoy these shows on iPlayer
      </p>
      <div>
        {[
          {
            title: "UK Reality TV Shows",
            image: strictlyLogo,
          },
          {
            title: "Popular TV Dramas",
            image: killingEveLogo,
          },
          {
            title: "Popular Comedy Shows",
            image: gandsLogo,
          },
        ].map((item) => (
          <Card
            key={item.title}
            text={item.title}
            className="mb-2"
            style={{ width: "360px", height: "190px" }}
          >
            <Card.Header>{item.title}</Card.Header>
            <Card.Body className="p-0">
              <Card.Img
                variant="top"
                src={item.image}
                style={{ height: "150px", width: "360px" }}
              />
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default SelectPage;
