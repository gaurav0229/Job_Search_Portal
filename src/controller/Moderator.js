// import React from 'react';
// import { useState } from 'react';
// import ModeratorJava from './ModeratorJava';
// // import Counter from './Counter';

// //**FUNCTION COMPONANT**

// let Moderator = () => {
//     const [modList, setModList] = useState([]); // from axios
    
//     return (
//         <div className="container-fluid" style={{backgroundColor: "red"}}>

//             <h1 >HOME PAGE</h1>
           
            
//         </div>
//     )
// }
// export default Moderator;


import React from 'react';
import { useState } from 'react';
// import './Moderator.css'
import { Button } from '../components/Button'
import '../components/Button.css'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';



let Moderator = () => {
    const [modList, setModList] = useState([]); // from axios
    
    return (
        <div className="container" style={{backgroundColor:"#f7c586"}}>
           
           <Carousel style={{innerHeight: "-35px"}}>
                <div>
                    <img src={"./img3.jpg"} />
                    <p className="legend">Get Ready For Job</p>
                </div>
                <div>
                    <img src={"./img2.jpg"} />
                    <p className="legend">Search job as Per your Interest</p>
                </div>
                <div>
                    <img src={"./img1.jpg"} />
                    <p className="legend">We are Hiring</p>
                </div>
            </Carousel>
             <h1  >Welcome to, Get Hired </h1> 

            <div class="row" >
  <div class="col-sm-6">
    <div class="card" >
      <div class="card-body">
        <h5 class="card-title">Capgemini</h5>
        <p class="card-text">Media and graphic Designer<br/>
        Experience- 1 to 4 year<br/>
        Location : Banglore</p>
        <a href="#" class="btn btn-primary">Apply</a>
      </div>
    </div>
  </div>
  <div class="col-sm-6">
    <div class="card">
    <div class="card-body">
        <h5 class="card-title">Infosys</h5>
        <p class="card-text">Software Developer<br/>
        Experience- 0 to 1 year<br/>
        Location : Pune</p>
        <a href="#" class="btn btn-primary">Apply</a>
      </div>
    </div>
  </div>
</div>
<div class="row">
  <div class="col-sm-6">
    <div class="card">
    <div class="card-body">
        <h5 class="card-title">Tcs</h5>
        <p class="card-text">Sql Developer<br/>
        Experience- 2  year<br/>
        Location : Mumbai</p>
        <a href="#" class="btn btn-primary">Apply</a>
      </div>
    </div>
  </div>
  <div class="col-sm-6">
    <div class="card">
    <div class="card-body">
        <h5 class="card-title">Accenture</h5>
        <p class="card-text">App Developer<br/>
        Experience- 1 year<br/>
        Location : Chennai</p>
        <a href="#" class="btn btn-primary">Apply</a>
      </div>
    </div>
  </div>
</div>
<div class="row">
  <div class="col-sm-6">
    <div class="card">
    <div class="card-body">
        <h5 class="card-title">Cognizant</h5>
        <p class="card-text">Java Full Stack Developer<br/>
        Experience- 1 to 2 year<br/>
        Location : Pune</p>
        <a href="#" class="btn btn-primary">Apply</a>
      </div>
    </div>
  </div>
  <div class="col-sm-6">
    <div class="card">
    <div class="card-body">
        <h5 class="card-title">ThinkTech Opc Cloud pvt. ltd</h5>
        <p class="card-text">FrontEnd Developer<br/>
        Experience- 1 year<br/>
        Location : Pune</p>
        <a href="#" class="btn btn-primary">Apply</a>
      </div>
    </div>
  </div>
</div>


  </div>




 

    );
}
export default Moderator;
















