import React from "react";
import Menu from "./Menu";

function TopBar() {
  return (
    <div className="topbarContainer">
      <div className="indicesContainer">
        <div className="nifty">
          <p className="index">Nifty 50</p>
          <p className="indexPoint">{100.2}</p>
                <p className="percent"> </p>  
        </div>
        <div className="sensex">
          <p className="index">Sensex</p>
          <p className="indexPoints">{100.2}</p>
          <p className="percent"></p>
        </div>
      </div>
      
      <Menu />
    </div>
  );
}

export default TopBar;
