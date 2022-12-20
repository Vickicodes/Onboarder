import React, { useState } from "react";
import "./App.css";
import OnboardingWelcome from "./containers/OnboardingWelcome";
import SelectPage from "./containers/SelectPage";

const App = () => {
  const [showOnboarding, setShowOnboarding] = useState();
  const [showSelectPage, setShowSelectPage] = useState(true);
  return (
    <div
      className="App gradient-custom-2"
      style={{ width: "400px", height: "900px" }}
    >
      {showOnboarding && <OnboardingWelcome />}
      {showSelectPage && <SelectPage />}
    </div>
  );
};

export default App;
