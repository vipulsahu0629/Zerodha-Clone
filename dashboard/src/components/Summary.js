import React from "react";

function Summary() {
  return (
    <>
      <div className="userName">
        <h6>Hi Users!</h6>
        <hr className="divider"></hr>
      </div>
      <div className="section">
        <span>
          <p>Equity</p>
        </span>
      
      <div className="data">
        <div className="first">
          <h3>3.74k</h3>
          <p>Margin available</p>
        </div>
        <div className="second">
          <p>Margin Used <span>0</span>{" "}</p>
          <p>Opening Balance <span>3.74k</span>{" "} </p>
        </div>
      </div>
      <hr className="divider"></hr>
      </div>
      <div className="section">
        <span><p>Holdings (13)</p></span>
        <div className="data">
          <div className="first">
            <h3 className="profit">
              1.55k <small>+5.20%</small>{" "}
            </h3>
            <p>P&L</p>
          </div>
          <hr/>
          <div className="second">
            <p>Curret Value <soan>31.43k</soan>{" "}</p>
            <p>Investment <span>29.88k</span>{""}</p>
          </div>
        </div>
        <hr className="divider"></hr>
      </div>
    </>
  );
}

export default Summary;
