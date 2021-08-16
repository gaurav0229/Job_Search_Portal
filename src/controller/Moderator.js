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
import EmployerHomePage1 from './EmployerHomePage1'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';



let Moderator = () => {
    const [modList, setModList] = useState([]); // from axios
    
    return (
        <div className="container-fluid">
           
           <Carousel>
                <div>
                    <img src={"./img1.jpg"} />
                    <p className="legend">We Are Hiring</p>
                </div>
                <div>
                    <img src={"./img2.jpg"} />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src="assets/3.jpeg" />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>

            <h1  style={{backgroundColor: "red"}} >Welcome to, Get Hired </h1>
           
            
     
  <div className='hero-container  container-fluid'>
  <h1>Want  job ? #Achive you Dream's </h1>
  <p>Lets do it.</p>
  <div className='hero-btns'>


<div className='container '>
    <h2><b>Hiring and Onboarding ,</b> </h2>
    <br/>
   <h5>Post a job to top job boards and social media sites in one click,<br/>
    send interview requests and quickly find the perfect fit for you position.
  </h5>
  </div>
<br/>


    </div>

    </div>
    <div className='container '>
   <div>  <EmployerHomePage1/> </div>
    </div>


    
  <div className="card">
  <div className="card-header">
  <b>JobSeeker And Employer</b>  
  </div>
  <div className="card-body">
    <h5 className="card-title">More JOb Opportunity</h5>
    <p className="card-text">With Get Hired , try it Like  it !!!!</p>
    <a href="#" class="btn btn-primary">
    For apply Register here</a>
    
    {/* <Link to="/register"><button>
              Go to Page 2 
            </button>
            </Link> */}


  </div>

</div>



    </div>


 

    );
}
export default Moderator;
















// import React from 'react';
// import { useState, useEffect } from 'react';
// import ModeratorJava from './ModeratorJava';
// // import Counter from './Counter';

// //**FUNCTION COMPONANT**

// let Moderator = () => {
//     const [mod, setMod] = useState('');
//     const [parentMod, setParentMod] = useState({}); // parent state  
//     const [parentModHike, setParentModHke] = useState(0); // parent state  
//     // const [childEmp, setChildEmp] = useState({}); // from callback    

//     useEffect(() => {

//         setParentMod({
//             mid: 201,
//             mname: 'Monu',
//             memail: 'monu@gmail.com'
//         }
//         );

//         setParentModHke(10);
//     }, []);

//     // const handleCallback = (childEmpData) => {
//     //     setChildEmp(childEmpData);
//     //     console.log(childEmpData);
//     // }

//     return (
//         <div>
//             <h1 >Moderator Component</h1>
//             <p> parent {parentMod.mname}</p>
//             <p> parent {parentModHike}</p>
//             {/* <JavaData></JavaData> */}
//             {/* <p>parent {childEmp.name}</p> */}
//             <ModeratorJava
//                 parentMod={parentMod}
//                 parentModHike={parentModHike}
//                 // parentCallback={handleCallback}
//             ></ModeratorJava>
//             {/* <Counter></Counter> */}
//         </div>
//     )
// }
// export default Moderator;