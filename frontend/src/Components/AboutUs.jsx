import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAward,
  faSeedling,
} from "@fortawesome/free-solid-svg-icons";

const AboutUs = () => {
  return (
    <>
      <div className="container-fluid about pt-5">
        <div className="container">
          <div className="row gx-5">
            <div className="col-lg-6 mb-5 mb-lg-0">
              <div className="d-flex h-100 border border-5 border-primary border-bottom-0 pt-4">
                <img
                  className="img-fluid mt-auto mx-auto"
                  src="img/about.png"
                />
              </div>
            </div>
            <div className="col-lg-6 pb-5">
              <div className="mb-3 pb-2">
                <h6 className="text-primary text-uppercase">About Us</h6>
                <h1 className="display-5">
                  We Produce Organic Food For Your Family
                </h1>
              </div>
              <p className="mb-4">
                Tempor erat elitr at rebum at at clita. Diam dolor diam ipsum et
                tempor sit. Clita erat ipsum et lorem et sit, sed stet no labore
                lorem sit. Sanctus clita duo justo et tempor eirmod magna dolore
                erat amet magna
              </p>
              <div className="row gx-5 gy-4">
                <div className="col-sm-6">
                  <FontAwesomeIcon
                    icon={faSeedling}
                    className="display-1 text-secondary mb-4"
                  />
                  <h4>100% Organic</h4>
                  <p className="mb-0">
                    Labore justo vero ipsum sit clita erat lorem magna clita
                    nonumy dolor magna dolor vero
                  </p>
                </div>
                <div className="col-sm-6">
                  <FontAwesomeIcon
                    icon={faAward}
                    className="display-1 text-secondary mb-4"
                  />
                  <h4>Award Winning</h4>
                  <p className="mb-0">
                    Labore justo vero ipsum sit clita erat lorem magna clita
                    nonumy dolor magna dolor vero
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutUs