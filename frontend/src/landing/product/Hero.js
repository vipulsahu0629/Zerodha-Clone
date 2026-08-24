import React from "react";

function Hero() {
  return (
    <div className="container">
      <div
        className="row"
        class="mt-5 mb-5 p-5"
        style={{ textAlign: "center", color: "#424242", padding: "50px" }}
      >
        <h2 style={{fontSize:'30px', marginBottom:'20px'}}>Zerodha Products </h2>
        <p style={{fontSize:'21px', fontWeight:'400',}}>Sleek, modern, and intuitive trading platforms</p>
        <p style={{fontWeight:'400', fontSize:'17px'}} >
            Check out our <a style={{textDecoration:'none'}} href="">investment offerings →</a></p>
      </div>
      <hr className="mb-5" style={{color:'#616060cc'}}/>
    </div>
  );
}

export default Hero;
