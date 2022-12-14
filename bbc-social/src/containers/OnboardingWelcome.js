import SignupForm from "../components/SignupForm";
import ChooseInterests from "./ChooseInterests";

const OnboardingWelcome = () => {
  return (
    <div>
      <div className="h-100 d-flex justify-content-center align-items-center">
        <img src="/beeb.webp" class="img-fluid" alt="..." />
      </div>
      <div className="col-lg-6 d-flex align-items-center gradient-custom-2">
        <div className="text-white px-3 py-4 p-md-5 mx-md-4">
          <h4 className="mb-4">Welcome to BBC Social.</h4>
          <p className="small mb-0">
            Paragraph about introducing and connecting people from around the
            world to various communities within the BBC Sphere.
          </p>
          <SignupForm />
        </div>
      </div>
      <ChooseInterests />
    </div>
  );
};

export default OnboardingWelcome;
