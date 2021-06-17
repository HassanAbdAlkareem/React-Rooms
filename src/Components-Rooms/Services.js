import React from "react";
import InfoServices from "../DataServices";

const Services = () => {
  return (
    <div>
      <div className="services">
        <div className="container">
          <div className="title-services">
            <h1>Services</h1>
            <div className="underline"></div>
          </div>

          <div className="row">
            {InfoServices.map((serviec, index) => {
              const { icon, title, info } = serviec;
              return (
                <div key={index} className="col-sm-12 col-md-6 col-lg-3">
                  <div className="service">
                    <div className="icon">{icon}</div>
                    <h3>{title}</h3>
                    <p>{info}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
