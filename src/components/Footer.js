import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container' style={{backgroundColor: "#242424"}}>
      <section className='footer-subscription'>
       
        <p className='footer-subscription-heading' style={{color: "white"}}>
         <b> Join the Get Hired and be one step ahead of your dreams</b>
        </p>
      
        <p className='footer-subscription-text'>
          You can unsubscribe at any time.
        </p>
      
        <div className='input-areas'>
          <form>
           
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Your Email'/>
            
            <Button buttonStyle='btn--outline'>Subscribe</Button>
          
          </form>
        </div>
      </section>
   
   <div class="row">
     <div className="col-sm-4">
        <div className='footer-link-wrapper footer-links footer-link-items' >
            <h2>About Us</h2>
            
          </div>
          </div>
          <div className="col-sm-4">
          <div class='footer-link-items'>
            <h2>Contact Us</h2>
            <Link to='/'>Contact</Link>
           
          </div>
        </div>
     
     <div className="col-sm-4">  
          <div className='footer-link-items'>
            <h2>Social Media</h2>
            <Link to='/'>Instagram</Link>
            <Link to='/'>Facebook</Link>
            <Link to='/'>Youtube</Link>
            <Link to='/'>Twitter</Link>
          </div>
          </div>

      </div>
   
      <section className='social-media'>
        <div className='social-media-wrap'>
          <div className='footer-logo'>
           
            <Link to='/' className='social-logo'>
              Get Hired
              {/* for adding logo */}
              <i class='fab fa-typo3' /> 
            </Link>
         
          </div>
          <small className='website-rights'>Get Hired © 2021</small>
          <div className='social-icons'>
           
            <Link
              className='social-icon-link facebook'
              to='/'
              target='_blank'
              aria-label='Facebook'>
              <i className='fab fa-facebook-f' />
            </Link>
           
            <Link
              class='social-icon-link instagram'
              to='/'
              target='_blank'
              aria-label='Instagram'
            >
              <i class='fab fa-instagram' />
            </Link>
           
            <Link
              class='social-icon-link youtube'
              to='/'
              target='_blank'
              aria-label='Youtube'
            >
              <i class='fab fa-youtube' />
            </Link>
            
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='Twitter'
            >
              <i class='fab fa-twitter' />
            </Link>

            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='LinkedIn'>
              <i class='fab fa-linkedin' />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;