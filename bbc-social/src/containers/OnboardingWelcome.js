import SignupForm from "../components/SignupForm";
import logo from './beeb.webp';

const OnboardingWelcome = () => {
  return (
    <div>
      <div className="h-100 d-flex justify-content-center align-items-center">
        <img src={logo} class="img-fluid" alt="..." />
      </div>
      <div class="col-lg-6 d-flex align-items-center gradient-custom-2">
        <div class="text-white px-3 py-4 p-md-5 mx-md-4">
          <h4 class="mb-4">Welcome to BBC Social.</h4>
          <p class="small mb-0">
            Paragraph about introducing and connecting people from around the
            world to various communities within the BBC Sphere.
          </p>
          <SignupForm />
        </div>
      </div>
    </div>
  );
};

export default OnboardingWelcome;
