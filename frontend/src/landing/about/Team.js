import React from "react";

function Team() {
  return (
    <div className="container">
      <div class="row mb-5" style={{textAlign:"center"}}>
        <h3>People</h3>
      </div>
      <div className="row">
        <div class="col-5" style={{textAlign:'center'}}>
          <img src="./media/nithinKamath.jpg" style={{height:'300px', width:'300px', borderRadius:'100%', justifyContent:'center', marginLeft:'100px', marginBottom:'40px'}}/>
          <h4 style={{marginLeft:'100px'}}>Nithin Kamath</h4>
          <p style={{marginLeft:'100px', color:'#666'}}>Founder, CEO</p>
        </div>
        <div class="col-7 about_Link mt-4 text-muted" style={{width:'45%', fontWeight:'500', fontSize:'16px'}} >
          <p>
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry.
          </p>

          <p>
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>

          <p>Playing basketball is his zen.</p>

          <p>Connect on <a href="" >Homepage</a> / <a href="">TradingQnA</a> / <a href="">Twitter</a></p>
          <br />
        </div>
      </div>
    </div>
  );
}

export default Team;
