const Why = () => {
    return (
        <div id="why-us">
           <h1><span className="plus">+</span>WHY US</h1> 
           <p>The new Company in IT industry. We can help to make amazing web sites for your awesome projects.</p>
           <div className="box">
               <div className="col-md-4">
                   <i className="fas fa-network-wired fa-3x"></i>
                   <h3 style={{marginTop: '5px'}}>We are connected</h3>
                   <p>We are a united team and fulfill all customer requests</p>
               </div>
               <div className="col-md-4">
                   <i className="fas fa-infinity fa-3x"></i>
                   <h3 style={{marginTop: '5px'}}>We haven't got any limits</h3>
                   <p>Tell us about your project and we will resolve it as best we can</p>
               </div>
               <div className="col-md-4">
                   <i className="far fa-lightbulb fa-3x"></i>
                   <h3 style={{marginTop: '5px'}}>Great Ideas</h3>
                   <p>We have great ideas for your awesome projects and we can help to you </p>
               </div>
           </div>
        </div>
    )
}

export default Why
