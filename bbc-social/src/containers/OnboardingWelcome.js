import React, { useState } from "react";
import Image from "react-bootstrap/Image";
import SignupForm from "../components/SignupForm";
import ChooseInterests from "./ChooseInterests";
import HomeLocation from "./HomeLocation";
import logo from "./beebw.png";

const OnboardingWelcome = () => {
  const [showSignUp, setShowSignUp] = useState(true);
  const [showHomeLocation, setShowHomeLocation] = useState();
  const [showChooseInterests, setShowChooseInterests] = useState();

  return (
    <div>
      <div className="d-flex px-3 py-4 align-items-center">
        <Image src={logo} class="img-fluid w-90" alt="..." />
      </div>
      <div className="col-lg-6 d-flex px-3 py-4 align-items-center">
        <div className="text-white">
          <h4 className="mb-4">Welcome to BBC UK Onboarder.</h4>
          <p className="small mb-0">
            Let us know where in the world are they from, things you love from a
            range of sports, activities, and programming from your country and
            we can recommend things you may enjoy here in the UK.
          </p>
          <div className="py-4">
            {showSignUp ? (
              <SignupForm
                onclick={() => {
                  setShowSignUp(!showSignUp);
                  setShowHomeLocation(!showHomeLocation);
                }}
              />
            ) : null}
            {showHomeLocation ? (
              <HomeLocation
                onClick={() => {
                  setShowHomeLocation(false);
                  setShowChooseInterests(true);
                }}
              />
            ) : null}
            {showChooseInterests ? (
              <ChooseInterests onClick={() => setShowChooseInterests(true)} />
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OnboardingWelcome;
