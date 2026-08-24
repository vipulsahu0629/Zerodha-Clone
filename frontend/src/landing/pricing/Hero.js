import React from "react";

function Hero() {
  return (
    <div className="container">
      <div className="row mt-5">
        <div className="mb-5 mt-5 text-center">
          <h3>Charges</h3>
          <h4 className="mt-3" style={{ color: "#9b9b9b" }}>
            List of all charges and taxes
          </h4>
        </div>
        <div className="row mt-5">
          <div className="col-4 text-center">
            <img
              style={{ height: "50%", width: "100%" }}
              src="media/pricing0.svg"
            />
            <div>
              <h2 style={{color:'#424242'}}>Free equity delivery</h2>
              <p style={{ color: "#666", lineHeight:'1.8rem',fontSize:'16px' }}>
                All equity delivery investments (NSE, BSE),
                <br />
                are absolutely free — ₹ 0 brokerage.
              </p>
            </div>
          </div>
          <div className="col-4 text-center">
            <img
              style={{ height: "50%", width: "100%" }}
              src="media/pricing20.svg"
            />
            <div>
              <h2 style={{color:'#424242'}}>Intraday and F&O trades</h2>
              <p style={{ color: "#666", lineHeight:'1.8rem',fontSize:'16px'  }}>
                Flat ₹ 20 or 0.03% (whichever is lower) per
                <br />
                executed order on intraday trades across
                <br />
                equity, currency, and commodity trades. Flat
                <br /> ₹20 on all option trades.
              </p>
            </div>
          </div>
          <div className="col-4 text-center">
            <img
              style={{ height: "50%", width: "100%" }}
              src="media/pricing0.svg"
            />
            <div>
              <h2 style={{color:'#424242'}}>Free direct MF</h2>
              <p style={{ color: "#666", lineHeight:'1.8rem',fontSize:'16px' }}>
                All direct mutual fund investments are
                <br />
                absolutely free — ₹ 0 commissions & DP
                <br />
                charges.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
