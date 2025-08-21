import React from "react";
import "./footer.css";

function footer() {
  return (
    <>
      <hr
        style={{
          opacity: "1",
          color: "white",
          padding: "0",
          margin: "0",
          marginTop: "100px",
        }}
      />
      <div className="footer">
        <div>Copyright © 2025 Sirada K. Portfolio</div>
        <div style={{ display: "inline-flex" }}>
          <div>Design and Develop by</div>
          <div style={{ fontWeight: "800", marginLeft: "3px" }}>
            <span>s</span>
            <span style={{ color: "#96F18E", fontStyle: "italic" }}>i</span>
            <span>rada</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default footer;
