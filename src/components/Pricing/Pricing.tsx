function Pricing() {
  return (
    <>
      <div className="section">
        <div className="text-center">
          <h1>
            Get awesome features, without <br />
            extra charges
          </h1>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br />
          Saepe, dolores! Sed, consequuntur magni distinctio
        </div>
        <div className="tab-group">
          <a href="#monthly" className="tab-item-selected">
            Monthly
          </a>
          <a href="#annually">Annually</a>
        </div>

        <div className="card-group">
          <div className="card-container">
            <div className="card-item">
              <div className="price">
                <h1>$10</h1>/ month
              </div>
              <h3>Bussiness Class</h3>
              For small team or office
            </div>
            <div className="card-content">
              Drag & drop Builder <br />
              +1.000 Templates <br />
              Blog Support Tools <br />
              eCommerce Store <br />
            </div>
            <a href="#start-trial" className="cta-button">
              Start free trial
            </a>
          </div>
          <div className="card-container">
            <div className="card-item card-item-pro">
              <div className="price">
                <h1>$30</h1>/ month
              </div>
              <h3>Enterprise Class</h3>
              For professional use
            </div>
            <div className="card-content">
              Drag & drop Builder <br />
              +1.000 Templates <br />
              Blog Support Tools <br />
              eCommerce Store <br />
              <div className="header-green">
                Unlimited Bandwidth <br /> 24/7 Support <br />
              </div>
            </div>
            <a href="#start-trial" className="cta-button">
              Start free trial
            </a>{" "}
            <a href="#start-trial">or Start 14 Days trial</a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Pricing;
