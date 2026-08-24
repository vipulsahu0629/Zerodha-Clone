import React from "react";

function RightSection({
  imageURL,
  productName,
  productDescription,
  KiteConnect,
}) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-6 mt-5" style={{ padding: "10%" }}>
          <div className="mt-5">
          <h1 style={{fontSize: "25px", color: "#424242", lineHeight: "1.5rem", fontWeight: "500",}}>
            {productName}
          </h1>
          <p style={{ fontSize: "17px", lineHeight: "1.8", color: "#424242", fontWeight: "400",}}>
            {productDescription}
          </p>
          </div>
          <div className="mt-3">
            <a href={KiteConnect} style={{ textDecoration: "none" }}>
              Kite Connect →
            </a>
          </div>
        </div>
        <div className="col-6 mt-5">
          <img src={imageURL} />
        </div>
      </div>
    </div>
  );
}

export default RightSection;
