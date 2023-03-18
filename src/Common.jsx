import React from "react";
import { NavLink } from "react-router-dom";

const Common = (props) => {
  return (
    <>
      <section id="header" className="d-flex align-items-center">
        <div className="container-fluid py-md-5">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">
                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex flex-column justify-content-center">
                  <h1>
                    {props.name}
                    <strong className="brand-name"><br/> Riyansh Technologies</strong>
                  </h1>
                  <p className="my-3">
                    We are team of talatend developer making websites
                  </p>
                  <div className="mt-3">
                    <NavLink to={props.visit} className="btn btn-outline-primary">
                      {props.btName}
                    </NavLink>
                  </div>
                </div>
                <div className="col-lg-6 order-1 order-lg-2">
                  <img
                    className="img-fluid animated"
                    src={props.imgSrc}
                    alt={props.imgSrc}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Common;
