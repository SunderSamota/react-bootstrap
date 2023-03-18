import React from "react";
import { NavLink } from "react-router-dom";
import { CardData } from "./CardData";

const Service = () => {
  return (
    <>
      <div className="my-5">
        <h1 className="text-center">Our Services</h1>
      </div>
      <div className="container-fluid my-5">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row gy-4">
              {CardData.map((data, index) => (
                <div className="col-md-4" key={index}>
                  <div className="card">
                    <img
                      src={data.image}
                      className="card-img-top"
                      alt={data.image}
                    />
                    <div className="card-body">
                      <h5 className="card-title">{data.title}</h5>
                      <p className="card-text">{data.desc}</p>
                      <NavLink to="#">
                        <button className="btn btn-outline-primary">{data.btnName}</button>
                        
                      </NavLink>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Service;
