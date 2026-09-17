import React from "react";
import Summary from "./Summary";
import { Route, Routes } from "react-router-dom";
import Orders from "./Orders";
import Holdings from "./Holdings";
import Positions from "./Positions";
import Funds from "./Funds";
import Apps from "./Apps";
// import {GeneralContextProvider} from './GeneralContext'
import WatchList from "./WatchList";
function Dashboard() {
  return (
    <div className="dashboardContainer">
      {/* <GeneralContextProvider> */}
      <WatchList />
      {/* </GeneralContextProvider> */}
      <div className="content">
        <Routes>
          <Route path="/" element={<Summary />}></Route>
          <Route path="/order" element={<Orders />}></Route>
          <Route path="/holdings" element={<Holdings />}></Route>
          <Route path="positions" element={<Positions />}></Route>
          <Route path="/funds" element={<Funds />}></Route>
          <Route path="/apps" element={<Apps />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default Dashboard;
