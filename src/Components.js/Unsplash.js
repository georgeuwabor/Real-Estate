import Search from "../Assets.js/Search.svg";
import "../Style/Unsplash.css";
function Unsplash() {
  return (
    <div className="unsplash__container">
      <div className="unsplash_Frame4273200023">
        <div className="unsplash_frame5">
          <p className="unsplash_text1">
            Discover other investment opportunities beyond crypto, stocks and
            bonds
          </p>
          <p className="unsplash_text2">
            Avoid volatile and high risk investments. Real estate affords you a
            surer low risk return on investment. Learn More
          </p>
        </div>
        <div className="unsplash_frame427319424">
          <div className="frame_token">
            <div className="frame427319422">
              <div className="items_div">
                <div className="item_child_div">
                  <div className="rent">Tokens</div>
                  <div className="frame_token_line2 line"></div>
                </div>
                <br />
                <div className="frame427319421_line4"></div>
              </div>

              <div className="items_div">
                <div className="item_child_div">
                  <div className="rent">Crowdfunding</div>
                  <div className="frame_token_line2 line"></div>
                </div>

                <br />
                <div className="frame427319421_line4"></div>
              </div>

              <div className="items_div">
                <div className="item_child_div">
                  <div className="rent">Sales</div>
                  <div className="frame_token_line2 line"></div>
                </div>
                <br />
                <div className="frame427319421_line4"></div>
              </div>

              <div className="items_div">
                <div className="item_child_div">
                  <div className="rent">Rent</div>
                  <div className="frame_token_line2 line"></div>
                </div>
                {/* <br />
                <div className="frame427319421_line4"></div> */}
              </div>
            </div>
          </div>

          <div className="frame_427319418_location_container">
            <div className="frame_427319415_location">
              <div className="frame_427319338">
                <h5 h5>Location</h5>
                <h6>Enter Location</h6>
              </div>
              <br />
              <div className="frame427319421_line4"></div>
            </div>

            {/* <hr /> */}
            <div className="property_type_container">
              <div className="property_type">
                <div className="property_type_choose">
                  <h5>Property Type</h5>
                  <h6>Choose Property</h6>
                  <div className="vuesax">
                    <div className="vuesax_outline">
                      <div className="vuesax_arrow-left">
                        {/* <img src={vectorsquare} alt="vectorsquare" />
                        <img src={vectorarrowdown} alt="vectorarrowdown" /> */}
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
            <div className="location_bar_container">
              <div className="location_bar_search">
                <img src={Search} alt="Search" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Unsplash;
