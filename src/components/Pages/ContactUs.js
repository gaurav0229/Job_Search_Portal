import React from 'react'
import { PureComponent } from 'react'



export default class ContactUs extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            fullN: '',
            mobile: '',
            email: '',
            comment: '',
           

            fullNError:"",
            mobileError:"",
            emailError:"",
            commentError:"",
            disabled:false
        }

        this.changefullNHandler = this.changefullNHandler.bind(this);
        this.changemobileHandler = this.changemobileHandler.bind(this);
        this.changeemailHandler =this.changeemailHandler.bind(this);
        this.changecommentHandler =this.changecommentHandler.bind(this);

        this.savemsg = this.savemsg.bind(this);
        this.validate = this.validate.bind(this);
    }

        validate=()=>{
        
            const mediumRegex = new RegExp("^(((?=.[a-z])(?=.[A-Z]))|((?=.[a-z])(?=.[0-9]))|((?=.[A-Z])(?=.[0-9])))(?=.{8,})");
            if(this.state.fullN===""){
                this.setState({fullNError: "Name cannot be empty"});
                return false;
            }else if(this.state.fullN.length<3){
                this.setState({fullNError: "Name should have minimum 3 characters"});
                return false;
            }else{
                this.setState({fullNError: ""});
            }    
    
            if(this.state.mobile===""){
                this.setState({mobileError: "mobile cannot be empty"});
                return false;
            }else if(this.state.mobile.length<10){
                this.setState({mobileError: "mobile must have more than 10 characters"});
                return false;
            }else{
                this.setState({mobileError: ""});
            }
    
            if(this.state.email===""){
                this.setState({emailError: "Email cannot be empty"});
                return false;
            }else if(typeof this.state.email!== "undefined"){
                let pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+))|("[\w-\s]+")([\w-]+(?:\.[\w-]+)))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
                if (!pattern.test(this.state.email)) {
                this.setState({emailError: "Please enter valid Email"});
                return false;
            }else{
                this.setState({emailError: "Please enter valid Email"});
            }
            }else{
                this.setState({emailError: ""});
            }
    
            if(this.state.comment===""){
                this.setState({commentError: "comment cannot be empty"});
                return false;
            }else if(this.state.comment.length<3){
                this.setState({commentError: "comment should have minimum 3 characters"});
                return false;
            }
            // else{
            //     this.setState({commentError: ""});
            // }
            return true;
        }

        savemsg = (e)=>{
            e.preventDefault();
            const isValid= this.validate();
            if(isValid){
                alert("Messege Recived");
            }
            else{ alert("Invalid input");}
        }

        cancel() {
            this.props.history.push('/aboutus');
        }
        changefullNHandler = (event) => {
            this.setState({ fullN: event.target.value });
        }
        changemobileHandler = (event) => {
            this.setState({ mobile: event.target.value });
        }
        changeemailHandler = (event) => {
            this.setState({ email: event.target.value });
        }
        changecommentHandler = (event) => {
            this.setState({ comment: event.target.value });
        }
    



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
                                        <input type="text" className="form-control" placeholder="Full Name" id="fullN" 
                                         value={this.state.fullN} onChange={this.changefullNHandler}/>
                                         {this.state.fullNError}
                                    </div><br/>
                                </form>
                                <div className="row">
                                    <div className="col-sm-6">
                                        <form>
                                            <div className="form-group">
                                                <input type="text" className="form-control" placeholder="Mobile" id="mobile"
                                                  value={this.state.mobile} onChange={this.changemobileHandler}/>
                                                  {this.state.mobileError}
                                            </div><br/>
                                        </form>
                                    </div>
                                    <div className="col-sm-6">
                                        <form>
                                            <div className="form-group">
                                                <input type="email" className="form-control" placeholder="Enter email" id="email"
                                                 value={this.state.email} onChange={this.changeemailHandler} />
                                                 {this.state.emailError}
                                            </div><br/>
                                        </form>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <textarea className="form-control" rows="5" placeholder="Message" id="comment"
                                    value={this.state.comment} onChange={this.changecommentHandler}></textarea>
                                    {this.state.commentError}
                                </div><br/>
                                <button type="submit" className="btn btn-success ml-4" disabled={this.state.mobile.length<1} onClick={this.savemsg}>Submit</button>
                            </div>
                        </div>  
                    </div>
            
                </div>
            </div>
            
                    )
            }
         }



















// import React from 'react'
// import { PureComponent } from 'react'



// export default class ContactUs extends PureComponent {

//     render (){
//         return(
//             <div className="container pt-5">
//                 <div className="row">
//                     <div className="col-sm-3" style={{color:"black"}}>
//                         <h3 ><b><i>Contact Us</i></b></h3>
//                         <i className="fas fa-phone-alt" ></i>
//                         <p><b>+91-8177944694
//                             <br />+91-9096785835</b></p>
            
//                         <hr />
//                         <i className="fas fa-map-marker-alt" ><b>Address</b></i>
//                         <p><b>Dahanukar Colony<br/>Kothrud<br/>Pune-411043</b></p>
//                     </div>
//                     <div className="col-sm-3" style={{color:"black"}}>
//                         <br />
//                         <br />
//                         <i className="fas fa-envelope"><b>Email</b></i>
//                         <p><b>GetHired@gmail.com</b></p>
//                     </div>
            
//                     <div className="col-sm-6 pb-5">
//                         <div className="card">
//                             <div className="card-body">
//                                 <br />
//                                 <h2><b /><i>Let's get in touch</i><b /></h2><br/>
//                                 <form>
//                                     <div className="form-group">
//                                         <input type="text" class="form-control" placeholder="Full Name" id="fullN" />
//                                     </div><br/>
//                                 </form>
//                                 <div className="row">
//                                     <div className="col-sm-6">
//                                         <form>
//                                             <div className="form-group">
//                                                 <input type="text" class="form-control" placeholder="Mobile" id="mobile" />
//                                             </div><br/>
//                                         </form>
//                                     </div>
//                                     <div className="col-sm-6">
//                                         <form>
//                                             <div className="form-group">
//                                                 <input type="email" class="form-control" placeholder="Enter email" id="email" />
//                                             </div><br/>
//                                         </form>
//                                     </div>
//                                 </div>
//                                 <div className="form-group">
//                                     <textarea className="form-control" rows="5" placeholder="Message" id="comment"></textarea>
//                                 </div><br/>
//                                 <button type="submit" class="btn btn-success ml-4">Submit</button>
//                             </div>
//                         </div>  
//                     </div>
            
//                 </div>
//             </div>
            
//                     )
//             }
//             }