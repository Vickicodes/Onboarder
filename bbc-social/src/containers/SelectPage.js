import Card from "react-bootstrap/Card";
import learningLogo from "./bbc-learning-english-logo.png";
import cricketLogo from "./england_cricket.png";
import cultureLogo from "./stdavidsday.jpeg";

const SelectPage = () => {
  return (
    <div className="p-2">
      <h2 className="text-white py-4" style={{ textDecoration: "underline" }}>
        LEARN
      </h2>

      <div>
        {[
          {
            title: "BBC Learning English",
            image: learningLogo,
          },
          {
            title: "Cricket in the UK",
            image: cricketLogo,
          },
          {
            title: "UK Cultural events",
            image: cultureLogo,
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
                style={{ height: "140px", width: "360px" }}
              />
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default SelectPage;
