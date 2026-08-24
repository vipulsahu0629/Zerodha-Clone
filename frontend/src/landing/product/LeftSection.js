import React from "react";

function LeftSection({
  imageURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-3 mt-5">
          <img src={imageURL} />
        </div>
        <div className="col-3"></div>
        <div className="col-6 mt-5" style={{padding:"10%"}}>
          <h1 style={{fontSize:"25px", color:"#424242", lineHeight:"1.5rem", fontWeight:"500"}}>{productName}</h1>
          <p style={{fontSize:"17px", lineHeight:"1.8", color:"#424242", fontWeight:"400"}}>{productDescription}</p>
          <div className="mt-3">
            <a href={tryDemo} style={{textDecoration:"none"}}>Try Demo →</a>
            <a href={learnMore} style={{marginLeft:'30%', textDecoration:"none"}}>Learn More →</a>
          </div>

          <div className="mt-3">
            <a href={googlePlay}>
              <img src="/media/googlePlayBadge.svg" />
            </a>
            <a href={appStore}>
              <img src="/media/appstoreBadge.svg" style={{marginLeft:'15%'}} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
