import hero2 from "@assets/hero2.png";
import speed from "@assets/speed.png";
import performance from "@assets/Prototyping.png";
import vector from "@assets/Vector.png";
import auto_payout from "@assets/auto-payout.png";
import network from "@assets/network.png";
import badge_thumb from "@assets/badge-thumb.png";
import hero3 from "@assets/hero-3.png";
function Features() {
  return (
    <>
      <div className="section">
        <div className="container flex-wrap">
          <div
            className="item-1 w-50-responsive"
            style={{
              marginInline: "auto",
            }}
          >
            <img src={hero2} className="hero-image-2" />
          </div>
          <div className="item-2 w-50-responsive">
            <div className="feature-group">
              <h1>Awesome apps features</h1>
              <h4>
                Increase productivity with a simple to-do app. <br />
                app for managing your personal budgets.
              </h4>
              <div className="flex-row-container">
                <img src={speed} alt="" className="icon" />
                <div className="feature-description">
                  <h3 className="header-red">Fast Performance</h3>
                  <span>
                    Get your blood tests delivered at home <br />
                    collect a sample from the <br />
                    news your blood tests.
                  </span>
                </div>
              </div>
              <div className="flex-row-container">
                <img src={performance} alt="" className="icon" />
                <div className="feature-description">
                  <h3 className="header-blue">Prototyping</h3>
                  <span>
                    Get your blood tests delivered at home <br />
                    collect a sample from the <br />
                    news your blood tests.
                  </span>
                </div>
              </div>
              <div className="flex-row-container">
                <img src={vector} alt="" className="icon" />
                <div className="feature-description">
                  <h3 className="header-green">Vector Editing</h3>
                  <span>
                    Get your blood tests delivered at home <br />
                    collect a sample from the <br />
                    news your blood tests.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <div className="flex-row-container flex-wrap">
            <h2 className="w-50-responsive responsive-divider">
              Smart jackpots that you may love this anytime & anywhere
            </h2>
            <span className="w-50-responsive">
              The rise of mobile devices transforms the way we consume
              information entirely and the world's most elevant channels such as
              Facebook.
            </span>
          </div>
          <div className="flex-row-container">
            <div className="w-30">
              <img src={auto_payout} alt="" className="icon" />
              <h3 className="header-red">Automatic Payouts</h3>Get your blood
              tests delivered at home collect a sample from the news your blood
              tests.
            </div>{" "}
            <div className="w-30">
              <img src={network} alt="" className="icon" />
              <h3 className="header-green">Network Effects</h3>Get your blood
              tests delivered at home collect a sample from the news your blood
              tests.
            </div>{" "}
            <div className="w-30">
              <img src={badge_thumb} alt="" className="icon" />
              <h3 className="header-blue">Bigger Reward Methods</h3>Get your
              blood tests delivered at home collect a sample from the news your
              blood tests.
            </div>
          </div>
        </div>

        <div className="flex-row-container">
          <div className="">
            <img src={hero3} alt="" className="hero-image-2" />
          </div>
          <div className=" w-50-responsive">
            <div className="">
              <h2>Designed & built by the latest code integration</h2>
              <h4>
                The rise of mobile devices transforms the way we consume
                information entirely and the world's most elevant channels such
                as Facebook.
              </h4>
            </div>
            <a href="" className="cta-button">
              Learn more
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Features;
