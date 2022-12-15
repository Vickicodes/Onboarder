import Form from "react-bootstrap/Form";

const HomeLocation = () => {
  return (
    <div id="homeLocation">
      <Form>
        <Form.Group className="mb-3" controlId="formGroupEmail">
          <Form.Label>Where is home?</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter address, town or country of your home"
          />
        </Form.Group>
      </Form>
      <div class="mapouter">
        <div class="gmap_canvas">
          <iframe
            title="map"
            width="360"
            height="390"
            id="gmap_canvas"
            src="https://maps.google.com/maps?q=mumbai&t=&z=3&ie=UTF8&iwloc=&output=embed"
            frameborder="0"
            scrolling="no"
            marginheight="0"
            marginwidth="0"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default HomeLocation;
