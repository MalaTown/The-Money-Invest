/* eslint-disable */
import React from "react";
import {
  BsFacebook,
  BsTwitter,
  BsLinkedin,
  BsYoutube,
  BsInstagram,
} from "react-icons/bs";

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
                <div className="kilimanjaro_part w-1/2">
                  <h5 className="border-white border-b-2 rounded-xl px-2 w-fit">
                    Social Links
                  </h5>
                  <ul className="kilimanjaro_social_links">
                    <li>
                      <a href="https://www.facebook.com/Themoneyinvest">
                        <BsFacebook style={{ marginRight: "5px" }} />
                        Facebook
                      </a>
                    </li>
                    <li>
                      <a href="https://twitter.com/moneyinvestcom?t=Xw0Unm-kHX-wq8MYmkV4ug&s=08">
                        <BsTwitter style={{ marginRight: "5px" }} />
                        Twitter
                      </a>
                    </li>
                    <li>
                      <a href="https://www.linkedin.com/in/the-money-invest-958683270/">
                        <BsLinkedin style={{ marginRight: "5px" }} /> LinkedIn
                      </a>
                    </li>
                    <li>
                      <a href="https://youtube.com/@themoneyinvest">
                        <BsYoutube style={{ marginRight: "5px" }} /> YouTube
                      </a>
                    </li>
                    <li>
                      <a href="https://www.instagram.com/themoneyinvestcom/">
                        <BsInstagram style={{ marginRight: "5px" }} /> Instagram
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="row flex gap-10">
                <div className="col-12 col-md-6 col-lg-3 w-1/2">
                  <div className="kilimanjaro_part ">
                    <h5 className="border-white border-b-2 rounded-xl px-2 w-fit">
                      Important Links
                    </h5>
                    <ul className="kilimanjaro_links">
                      <li>
                        <a href="#">
                          <i className="fa fa-angle-right" aria-hidden="true" />
                          Terms & Conditions
                        </a>
                      </li>
                      {/* <li>
                        <a href="#">
                          <i className="fa fa-angle-right" aria-hidden="true" />
                          About Licences
                        </a>
                      </li> */}
                      <li>
                        <a href="#">
                          <i className="fa fa-angle-right" aria-hidden="true" />
                          Help & Support
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-angle-right" aria-hidden="true" />
                          Privacy Policy
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="col-12 col-md-6 col-lg-3 w-1/2">
                  <div className="kilimanjaro_part">
                    <h5 className="border-white border-b-2 rounded-xl px-2 w-fit">
                      Quick Contact
                    </h5>
                    <div className="lg:flex lg:justify-around ">
                      <div className="kilimanjaro_single_contact_info">
                        <h5>Phone:</h5>
                        <p>+255 255 54 53 52 </p>
                      </div>
                      <div className="kilimanjaro_single_contact_info">
                        <h5>Email:</h5>
                        <p>support@email.com </p>
                        <p> company@email.com</p>
                      </div>
                    </div>
                  </div>
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
