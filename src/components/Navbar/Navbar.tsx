import appLogo from "../../assets/AppLab.png";

function Navbar() {
  return (
    <>
      <div className="navbar">
        <img src={appLogo} className="app-logo" />
        <div className="navbar-content">
          <a href="#Home">Home</a>
          <a href="#Home">Key Features</a>
          <a href="#Home">Pricing</a>
          <a href="#Home">Testimonial</a>
          <a href="#Home">FAQ</a>
        </div>
        <a href="#Home" className="cta-button">
          Try for free
        </a>
      </div>
    </>
  );
}

export default Navbar;
