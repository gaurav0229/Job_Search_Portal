import React from 'react'
import { PureComponent } from 'react'



export default class ContactUs extends PureComponent {

    render (){
        return(
            <div className="container pt-5">
                <div className="row">
                    <div className="col-sm-3" style={{color:"black"}}>
                        <h3 ><b><i>Contact Us</i></b></h3>
                        <i className="fas fa-phone-alt" ></i>
                        <p><b>+91-8177944694
                            <br />+91-9096785835</b></p>
            
                        <hr />
                        <i className="fas fa-map-marker-alt" ><b>Address</b></i>
                        <p><b>Dahanukar Colony<br/>Kothrud<br/>Pune-411043</b></p>
                    </div>
                    <div className="col-sm-3" style={{color:"black"}}>
                        <br />
                        <br />
                        <i className="fas fa-envelope"><b>Email</b></i>
                        <p><b>GetHired@gmail.com</b></p>
                    </div>
            
                    <div className="col-sm-6 pb-5">
                        <div className="card">
                            <div className="card-body">
                                <br />
                                <h2><b /><i>Let's get in touch</i><b /></h2><br/>
                                <form>
                                    <div className="form-group">
                                        <input type="text" class="form-control" placeholder="Full Name" id="fullN" />
                                    </div><br/>
                                </form>
                                <div className="row">
                                    <div className="col-sm-6">
                                        <form>
                                            <div className="form-group">
                                                <input type="text" class="form-control" placeholder="Mobile" id="mobile" />
                                            </div><br/>
                                        </form>
                                    </div>
                                    <div className="col-sm-6">
                                        <form>
                                            <div className="form-group">
                                                <input type="email" class="form-control" placeholder="Enter email" id="email" />
                                            </div><br/>
                                        </form>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <textarea className="form-control" rows="5" placeholder="Message" id="comment"></textarea>
                                </div><br/>
                                <button type="submit" class="btn btn-success ml-4">Submit</button>
                            </div>
                        </div>  
                    </div>
            
                </div>
            </div>
            
                    )
            }
            }