import React from "react";

function universe() {
  return (
    <div className="container">
      <div className=" row text-center mt-5 mb-5">
        <h4>The Zerodha Universe</h4>
        <p className="mt-2">
          Extend your trading and investment experience even further with our
          partner platforms
        </p>
        <div className="col-4 p-3 mt-5 ">
          <a
            href="https://www.zerodhafundhouse.com/"
            target="_blank"
            style={{ textDecoration: "none", fontSize: "13px" }}
          >
            <img
              style={{ width: "max-width", height: "55px" }}
              src="/media/zerodhafundhouse.png"
            />
            <p
              className="mt-3 text-muted"
              style={{ fontSize: "13px", fontWeight: "500" }}
            >
              Our asset management venture <br />
              that is creating simple and transparent index <br />
              funds to help you save for your goals.
            </p>
          </a>
        </div>
        <div className="col-4 p-3 mt-5">
          <a
            href="https://sensibull.com/"
            target="_blank"
            style={{ textDecoration: "none", fontSize: "13px" }}
          >
            <img
              src="/media/sensibullLogo.svg"
              style={{ width: "max-width", height: "40px" }}
            />
            <p
              className="mt-3 text-muted"
              style={{ fontSize: "13px", fontWeight: "500" }}
            >
              Options trading platform that lets you
              <br /> create strategies, analyze positions, and examine
              <br /> data points like open interest, FII/DII, and more.
            </p>
          </a>
        </div>
        <div className="col-4 p-3 mt-5">
          <a href="" target="_blank" style={{ textDecoration: "none" }}>
            <img
              src="/media/tijori.svg"
              style={{ width: "max-width", height: "55px" }}
            />
            <p
              className="mt-3 text-muted"
              style={{ fontSize: "13px", fontWeight: "500" }}
            >
              Investment research platform
              <br /> that offers detailed insights on stocks,
              <br /> sectors, supply chains, and more.
            </p>
          </a>
        </div>
        <div className="col-4 p-3 mt-5">
          <a href="" target="_blank" style={{ textDecoration: "none" }}>
            <img
              style={{ width: "max-width", height: "55px" }}
              src="/media/streakLogo.png"
            />
            <p
              className="mt-3 text-muted"
              style={{ fontSize: "13px", fontWeight: "500" }}
            >
              Systematic trading platform
              <br /> that allows you to create and backtest
              <br />
              strategies without coding.
            </p>
          </a>
        </div>
        <div className="col-4 p-3 mt-5">
          <a href="" target="_blank" style={{ textDecoration: "none" }}>
            <img
              src="/media/smallcaseLogo.png"
              style={{ width: "max-width", height: "55px" }}
            />
            <p
              className="mt-3 text-muted"
              style={{ fontSize: "13px", fontWeight: "500" }}
            >
              Thematic investing platform
              <br /> that helps you invest in diversified
              <br />
              baskets of stocks on ETFs.
            </p>
          </a>
        </div>
        <div className="col-4 p-3 mt-5">
          <a
            href=""
            target="_blank"
            style={{ textDecoration: "none", fontSize: "13px" }}
          >
            <img
              style={{ width: "max-width", height: "55px" }}
              src="/media/dittoLogo.png"
            />
            <p
              className="mt-3 text-muted"
              style={{ fontSize: "13px", fontWeight: "500" }}
            >
              Personalized advice on life
              <br /> and health insurance. No spam
              <br /> and no mis-selling.
            </p>
          </a>
        </div>
        <div className="mt-5">
          <button
            className="p-2 fs-5 mb-5 product-btn"
            style={{ width: "20%", margin: "0 auto"}}
          >
            Sign up for free
          </button>
        </div>
      </div>
    </div>
  );
}

export default universe;
