function Unsplash() {
  return (
    <div className="unsplash__container">
      <div className="unsplash">
        <div className="frame5_container">
          <p className="unsplash_text1">
            Discover other investment opportunities beyond crypto, stocks and
            bonds
          </p>
          <p className="unsplash_text2">
            Avoid volatile and high risk investments. Real estate affords you a
            surer low risk return on investment. Learn More
          </p>
        </div>
      </div>
      <div className="frame4">
        <div className="token__container">
          <div className="line2">Line 2</div>
          <div className="fr2">
            <p>Rent</p>
            <div className="fr1_container">
              <p>Sales</p>
              <p>Line 4</p>
            </div>
            <div className="fr0_container">
              <p>Crowdfunding</p>
              <p>Line 3</p>
            </div>
            <div className="fr9_container">
              <p>Token</p>
              <p>Line 2</p>
            </div>
          </div>
        </div>
        <div className="location_bar_container">
          <div className="location_bar_search">
            <img src={Search} alt="Search" />
          </div>
          <div className="location_container">
            <div className="location">
              <p>Location</p>
              <p>Enter Location</p>
            </div>
            <br />
            <div className="property_type_container">
              <div className="property_type">
                <div className="property_type_choose">
                  <p>Property Type</p>
                  <p>Choose Property</p>
                  <div className="vuesax">
                    <div className="vuesax_outline">
                      <div className="vuesax_arrow-left">
                        <img src={vectorsquare} alt="vectorsquare" />
                        <img src={vectorarrowdown} alt="vectorarrowdown" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <br />
            <div>Currency</div>
            <br />
            <div>Price</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Unsplash;
