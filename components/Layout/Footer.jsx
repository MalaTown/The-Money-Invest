/* eslint-disable */
import React from "react";

function Footer() {
  return (
    <div className="FooterContainer mt-5">
      <footer className="kilimanjaro_area">
        {/* <!-- Top Footer Area Start --> */}
        <div className="foo_top_header_one section_padding_100_70 border-solid border-white ">
          <div className="container">
            <div className="row">
              <div className="flex col-12 col-md-6 col-lg-3 gap-10">
                <div className="kilimanjaro_part w-1/2">
                  <h5 className="border-white border-b-2 rounded-xl px-2 w-fit">
                    About Us
                  </h5>
                  <p>
                    We provide information regarding the Stock market and the
                    Crypto as well. Here you can get the Top, Global and
                    Trending News on a click. Explore For more...
                  </p>
                </div>
                <div className="kilimanjaro_part ">
                  <h5 className="border-white border-b-2 rounded-xl px-2 w-fit">
                    Important Links
                  </h5>
                  <ul className="kilimanjaro_links">
                    <li>
                      <a href="/TermAndConditions">
                        <i className="fa fa-angle-right" aria-hidden="true" />
                        Terms & Conditions
                      </a>
                    </li>
                    <li>
                      <a href="PrivacyPolicy">
                        <i className="fa fa-angle-right" aria-hidden="true" />
                        Privacy Policy
                      </a>
                    </li>
                    <li>
                      <a href="/Disclaimer">
                        <i className="fa fa-angle-right" aria-hidden="true" />
                        Disclaimer
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Footer Bottom Area Start --> */}
        <div className=" kilimanjaro_bottom_header_one section_padding_50 text-center">
          <div className="container justify-center">
            <div className="row">
              <div className="col-12">
                <p href="#" className="font-bold font-mono text-base">
                  All Rights Reserved by "The Money Invest"
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
