// src/components/HomePage.js
import React from "react";

function HomePage() {
  return (
    <div style={{ background: "white", padding: "20px", fontSize: "40px" }}>
      <div className="card mb-3" style={{ textAlign: "left" }}>
        <div className="row g-0">
          <div className="col-md-4">
            <img
              className="img-fluid"
              src="/images/vision.png"
              alt="Our Vision"
              style={{
                width: "200px",
                height: "200px",
                marginLeft: "30px",
                padding: "10px",
              }}
            />
          </div>
          <div className="col-md-8">
            <p style={{ color: "navy", marginTop: "20px" }}>
              Our Vision: Future-proof Kenya through creative leadership
              strategies to de-risk and optimize sustainable economy in Kenya's
              development agenda.
            </p>
          </div>
        </div>
      </div>
      <div className="card mb-3" style={{ textAlign: "left" }}>
        <div className="row g-0">
          <div className="col-md-4">
            <img
              className="img-fluid"
              src="/images/mission.png"
              alt="Our Mission"
              style={{
                width: "200px",
                height: "200px",
                marginLeft: "30px",
                padding: "10px",
              }}
            />
          </div>
          <div className="col-md-8">
            <p style={{ color: "navy", marginTop: "20px" }}>
              Our Mission:To energize Kenyans, to inspire moments of
              patriotism,optimism and happiness in sustainable transformation of
              their country.
            </p>
          </div>
        </div>
      </div>
      <div className="card mb-3" style={{ textAlign: "left" }}>
        <div className="row g-0">
          <div className="col-md-4">
            <img
              className="img-fluid"
              src="/images/goal.png"
              alt="Our Goal"
              style={{
                width: "200px",
                height: "200px",
                marginLeft: "30px",
                padding: "10px",
              }}
            />
          </div>
          <div className="col-md-8">
            <p style={{ color: "navy", marginTop: "20px" }}>
              Our Goal: Get Kenya Moving
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
