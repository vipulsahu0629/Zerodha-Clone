import React from "react";

function Hero() {
  return (
    <div className="container-gluid" style={{ backgroundColor: "#dedee33a", height:'250px'}}>
      <div className="row" style={{width:'90%'}}>
            <div className="col-6 mt-5">
              <a href="" style={{fontSize:'40px', fontWeight:'500', color:'black', textDecoration:'none', marginLeft:'80px', color:'#424242'}}>Support Portal</a>
            </div>
            <div className="col-6 mt-5" style={{ textAlign:'end'}}>
              <button className="" style={{height:'40px', width:'120px',borderRadius:'none', backgroundColor:'#397dd0', color:'white', fontSize:'18px', fontWeight:'500', borderRadius:'5px',}}>My Tickets</button>
            </div>
          <div className='mt-3'>
          <input type='search' style={{width:'92%', margin:'10px', marginLeft:'90px', height:'50px', border:'none',                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           }} placeholder="Eg: How do I open my account, How do i activate F&O..."></input>
        </div>
        </div>
    </div>
  );
}

export default Hero;
