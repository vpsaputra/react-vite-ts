import HeroImage from "@assets/aa.png";
import check from "@assets/check.png";
import client1 from "@assets/Sponsor/client1.png";
import client2 from "@assets/Sponsor/client2.png";
import client3 from "@assets/Sponsor/client3.png";
import client4 from "@assets/Sponsor/client4.png";
import client5 from "@assets/Sponsor/client5.png";
function Header() {
  return (
    <>
      <div className="header">
        <div className="backgrounds">
          <div className="section">
            <div className="container">
              <div className="item-1">
                <span style={{ paddingRight: "40px" }}>
                  <img
                    src={check}
                    style={{
                      backgroundColor: "#faa724",
                      borderRadius: "100%",
                      padding: "4px",
                    }}
                  />
                  #1 Editiors Choice App of 2020
                </span>
                <h1 className="">
                  Best app for your <br /> modern lifestyle
                </h1>
                <h4>
                  Increase productivity with a simple to-do app. app for <br />
                  managing your personal budgets.
                </h4>
                <div className="cta-group">
                  <a href="#try" className="cta-button">
                    Try for free
                  </a>
                  <a href="" style={{ marginLeft: "8px" }}>
                    Watch demo video
                  </a>
                </div>
              </div>
              <div className="item-2">
                <img src={HeroImage} alt="Hero Image" className="hero-image" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="clients-container">
        <span>Trusted by companies like</span>
        <div className="client-items">
          <img src={client1} alt="Southwest company logo" />
          <img src={client2} alt="Southwest company logo" />
          <img src={client3} alt="Southwest company logo" />
          <img src={client4} alt="Southwest company logo" />
          <img src={client5} alt="Southwest company logo" />
        </div>
      </div>
    </>
  );
}
export default Header;
