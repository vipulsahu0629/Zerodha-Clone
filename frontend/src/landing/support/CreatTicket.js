import React from "react";

function CreateTicket() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-8 mt-5" style={{ }}>
          <div style={{ marginLeft:'80px',}}>
            <select style={{height: "50px", width: "80%"  ,marginBottom:'20px'}}>
              <option>Account Opening</option>
              <option>
                <a></a>
              </option>
            </select>
          
          
            <select style={{ height: "50px", width: "80%" }}>
              <option>Account Opening</option>
              <option>
                <a></a>
              </option>
            </select>
          
          
            <select style={{ height: "50px", width: "80%" }}>
              <option>Account Opening</option>
              <option>
                <a></a>
              </option>
            </select>
          </div>
        </div>
        <div
          className="col-4 mt-5"
          style={{
            height: "180px",
            width: "400px",
            backgroundColor: "#ff91001a",
            borderLeft: "10px solid #ff9100",
          }}
        >
          <ul className="" style={{ width: "90%", marginTop: "30px" }}>
            <li>
              <a
                style={{ fontSize: "18px" }}
                href="https://zerodha.com/marketintel/bulletin/454257/surveillance-measure-on-scrips-august-2026"
              >
                Surveillance measure on scrips - August 2026{" "}
              </a>
            </li>
            <li style={{ marginTop: "5px" }}>
              <a
                style={{ fontSize: "18px" }}
                href="https://zerodha.com/marketintel/bulletin/249809/latest-intraday-leverages-mis-bo-co"
              >
                Latest Intraday leverages and Square-off timings
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default CreateTicket;
