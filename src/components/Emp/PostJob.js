import React, { PureComponent } from 'react'
import employerservice from '../../services/employerservice';

class PostJob extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            jobTitle: '',
            jobDesc: '',
            jobExp: '',
            jobSal: '',
            jobLocation: '',
            jobNoticePeriod: '',
            empEmail: '',
            jobStatus: '',
            jobSkillSet: '',

            jobTitleError:"",
            jobDescError:"",
            jobExpError:"",
            jobSalError:"",
            jobLocationError:"",
            jobNoticePeriodError:"",
            empEmailError: '',
            jobStatusError: '',
            jobSkillSetError:"",
            disabled:false
            

        }
        this.changejobTitleHandler = this.changejobTitleHandler.bind(this);
        this.changejobDescHandler = this.changejobDescHandler.bind(this);
        this.changejobExpHandler = this.changejobExpHandler.bind(this);
        this.changejobSalHandler = this.changejobSalHandler.bind(this);
        this.changejobLocationHandler = this.changejobLocationHandler.bind(this);
        this.changejobNoticePeriodHandler = this.changejobNoticePeriodHandler.bind(this);
        this.changeempEmailHandler = this.changeempEmailHandler.bind(this);
        this.changejobStatusHandler = this.changejobStatusHandler.bind(this);
        this.changejobSkillSetHandler = this.changejobSkillSetHandler.bind(this);

        this.saveJob = this.saveJob.bind(this);
        this.validate = this.validate.bind(this);

    }
    validate=()=>{
        
        const mediumRegex = new RegExp("^(((?=.[a-z])(?=.[A-Z]))|((?=.[a-z])(?=.[0-9]))|((?=.[A-Z])(?=.[0-9])))(?=.{8,})");
        if(this.state.jobTitle===""){
            this.setState({jobTitleError: "Title cannot be empty"});
            return false;
        }else if(this.state.jobTitle.length<3){
            this.setState({jobTitleError: "Title should have minimum 3 characters"});
            return false;
        }else{
            this.setState({jobTitleError: ""});
        }

        if(this.state.jobDesc===""){
            this.setState({jobDescError: "jobDesc cannot be empty"});
            return false;
        }else if(this.state.jobDesc.length<3){
            this.setState({jobDescError: "jobDesc should have minimum 3 characters"});
            return false;
        }else{
            this.setState({jobDescError: ""});
        }

        if(this.state.jobExp===""){
            this.setState({jobExpError: "jobExp cannot be empty"});
            return false;
        }else if(this.state.jobExp.length<1){
            this.setState({jobExpError: "jobExp must have 1 characters"});
            return false;
        }else{
            this.setState({jobExpError: ""});
        }
       
        if(this.state.jobSal===""){
            this.setState({jobSalError: "jobSal cannot be empty"});
            return false;
        }else if(this.state.jobSal.length<5){
            this.setState({jobSalError: "jobSal must have 5 characters"});
            return false;
        }else{
            this.setState({jobSalError: ""});
        }

        if(this.state.jobLocation===""){
            this.setState({jobLocationError: "jobLocation cannot be empty"});
            return false;
        }else if(this.state.jobLocation.length<3){
            this.setState({jobLocationError: "jobLocation should have minimum 3 characters"});
            return false;
        }else{
            this.setState({jobLocationError: ""});
        }


        if(this.state.jobNoticePeriod===""){
            this.setState({jobNoticePeriodError: "jobNoticePeriod cannot be empty"});
            return false;
        }else if(this.state.jobNoticePeriod.length>10){
            this.setState({jobNoticePeriodError: "jobNoticePeriod must have less than 10 characters"});
            return false;
        }else{
            this.setState({jobNoticePeriodError: ""});
        }

        if(this.state.empEmail===""){
            this.setState({empEmailError: "Email cannot be empty"});
            return false;
        }else if(typeof this.state.empEmail!== "undefined"){
            let pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+))|("[\w-\s]+")([\w-]+(?:\.[\w-]+)))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
            if (!pattern.test(this.state.empEmail)) {
            this.setState({empEmailError: "Please enter valid Email"});
            return false;
        }else{
            this.setState({empEmailError: "Please enter valid Email"});
        }
        }else{
            this.setState({empEmailError: ""});
        }

        if(this.state.jobStatus===""){
            this.setState({jobStatusError: "jobStatus cannot be empty"});
            return false;
        }else if(this.state.jobStatus.length<3){
            this.setState({jobStatusError: "jobStatus should have minimum 3 characters"});
            return false;
        }else{
            this.setState({jobStatusError: ""});
        }

        if(this.state.jobSkillSet===""){
            this.setState({jobSkillSetError: "jobSkillSet cannot be empty"});
            return false;
        }else if(this.state.jobSkillSet.length<3){
            this.setState({jobSkillSetError: "jobSkillSet should have minimum 3 characters"});
            return false;
        }else{
            this.setState({jobSkillSetError: ""});
        }

        return true;
    }

    
    saveJob = e => {
        e.preventDefault();
        const isValid= this.validate();
        if(isValid){
        let job = {
            jobTitle: this.state.jobTitle,
            jobDesc: this.state.jobDesc,
            jobExp: this.state.jobExp,
            jobSal: this.state.jobSal,
            jobLocation: this.state.jobLocation,
            jobNoticePeriod: this.state.jobNoticePeriod,
            jobSkillSet: this.state.jobSkillSet,
            empEmail: this.state.empEmail,
            jobStatus: this.state.jobStatus

        };

        console.log('job=>' + JSON.stringify(job))

        employerservice.postjob(job).then((res) => {
            this.props.history.push('/EmployerhomePage')
        });
            }
            else{
                alert("Invalid input");
            }
        }
    cancel() {
        this.props.history.push('/EmployerhomePage');
    }
    changejobTitleHandler = (event) => {
        this.setState({ jobTitle: event.target.value });
    }
    changejobDescHandler = (event) => {
        this.setState({ jobDesc: event.target.value });
    }
    changejobExpHandler = (event) => {
        this.setState({ jobExp: event.target.value });
    }
    changejobSalHandler = (event) => {
        this.setState({ jobSal: event.target.value });
    }

    changejobLocationHandler = (event) => {
        this.setState({ jobLocation: event.target.value });
    }

    changejobNoticePeriodHandler = (event) => {
        this.setState({ jobNoticePeriod: event.target.value });
    }
    changejobSkillSetHandler = (event) => {
        this.setState({ jobSkillSet: event.target.value });
    }
    changeempEmailHandler = (event) => {
        this.setState({ empEmail: event.target.value });
    }
    changejobStatusHandler = (event) => {
        this.setState({ jobStatus: event.target.value });
    }



    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3">
                            <h3 className="text-center">Post a Job</h3>
                            <div className="card-body">
                                <form>
                                    <div className="form-group">
                                        <label>Job Title</label>
                                        <input placeholder="Ex. Software Developer" className="form-control" name="jobTitle"
                                            value={this.state.jobTitle} onChange={this.changejobTitleHandler} />
                                            {this.state.jobTitleError}

                                        <label>Job Description</label>
                                        <textarea placeholder="Job Description" className="form-control" name="jobDesc"
                                            value={this.state.jobDesc} onChange={this.changejobDescHandler} />
                                            {this.state.jobDescError}

                                        <label>Experience</label>
                                        <input placeholder="Ex. 1 yr" className="form-control" name="jobExp"
                                            value={this.state.jobExp} onChange={this.changejobExpHandler} />
                                            {this.state.jobExpError}

                                        <label>Salary</label>
                                        <input placeholder="Job Salary" className="form-control" name="jobSal"
                                            value={this.state.jobSal} onChange={this.changejobSalHandler} />
                                            {this.state.jobSalError}

                                        <label>Location</label>
                                        <input placeholder="Ex. Pune" className="form-control" name="jobLocation"
                                            value={this.state.jobLocation} onChange={this.changejobLocationHandler} />
                                            {this.state.jobLocationError}

                                        {/* <label>Notice Period</label>
                                        <input placeholder="Notice Period" className="form-control" name="jobSal"
                                            value={this.state.jobNoticePeriod} onChange={this.changejobNoticePeriodHandler} /> */}

                                        <label for="sel1">Notice Period</label>
                                        <select class="form-control" value={this.state.jobNoticePeriod} onChange={this.changejobNoticePeriodHandler} id="sel1">
                                            <option>1 Month</option>
                                            <option>2 Months</option>
                                            <option>3 months</option>
                                        </select>


                                        <label>Employer Email</label>
                                        <input placeholder="Ex. abc@gmail.com" className="form-control" name="employer email"
                                            value={this.state.empEmail} onChange={this.changeempEmailHandler} />
                                            {this.state.empEmailError}

                                        {/* <label>JOb status</label>
                                        <input placeholder="Job Status" className="form-control" name="Job status"
                                            value={this.state.jobStatus} onChange={this.changejobStatusHandler} /> */}
                                        <label for="sel1">Job status</label>
                                        <select className="form-control" value={this.state.jobStatus} onChange={this.changejobStatusHandler} id="sel2">
                                            <option>Available</option>
                                            <option>Unavailable</option>
                                        </select>

                                        <label>Skills</label>
                                        <input placeholder="Ex. Java , Python" className="form-control" name="jobSkillSet"
                                            value={this.state.jobSkillSet} onChange={this.changejobSkillSetHandler} />
                                            {this.state.jobSkillSetError}

                                             {/* <label>Skills</label>
//                                             <DropdownMultiselect className="form-control" name="jobSkillSet" placeholder="Skills" value={this.state.jobSkillSet} onChange={this.changejobSkillSetHandler}
//                                            options={["Java", "Python", "C", "C++", "AWS", "SQL"]}
//                                               name="countries"
//                                              />
//                                              <br/> */}
<br/>
                                        <button className="btn btn-success" disabled={this.state.jobSkillSet.length<1} onClick={this.saveJob}>Save</button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{ marginLeft: "10px" }}>Cancel</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default PostJob































































// import React, { PureComponent } from 'react'
// import employerservice from '../../services/employerservice';
// import 'bootstrap/dist/css/bootstrap.css';
// import {Multiselect} from 'multiselect-react-dropdown'
// import DropdownMultiselect from "react-multiselect-dropdown-bootstrap";



// class PostJob extends PureComponent {
    
  

//     constructor(props) {
//         super(props)

//         this.state = {
//             jobTitle: '',
//             jobDesc: '',
//             jobExp: '',
//             jobSal: '',
//             jobLocation: '',
//             jobNoticePeriod: '',
//             empEmail: '',
//             jobStatus: '',
//             jobSkillSet: ''

//         }
//         this.changejobTitleHandler = this.changejobTitleHandler.bind(this);
//         this.changejobDescHandler = this.changejobDescHandler.bind(this);
//         this.changejobExpHandler = this.changejobExpHandler.bind(this);
//         this.changejobSalHandler = this.changejobSalHandler.bind(this);
//         this.changejobLocationHandler = this.changejobLocationHandler.bind(this);
//         this.changejobNoticePeriodHandler = this.changejobNoticePeriodHandler.bind(this);
//         this.changejobSkillSetHandler = this.changejobSkillSetHandler.bind(this);
//         this.changeempEmailHandler = this.changeempEmailHandler.bind(this);
//         this.changejobStatusHandler = this.changejobStatusHandler.bind(this);

//         this.saveJob = this.saveJob.bind(this);

//     }
//     saveJob = e => {
//         e.preventDefault();
//         let job = {
//             jobTitle: this.state.jobTitle,
//             jobDesc: this.state.jobDesc,
//             jobExp: this.state.jobExp,
//             jobSal: this.state.jobSal,
//             jobLocation: this.state.jobLocation,
//             jobNoticePeriod: this.state.jobNoticePeriod,
//             jobSkillSet: this.state.jobSkillSet,
//             empEmail: this.state.empEmail,
//             jobStatus: this.state.jobStatus

//         };

//         console.log('job=>' + JSON.stringify(job))

//         employerservice.postjob(job).then((res) => {
//             this.props.history.push('/EmployerhomePage')
//         });
//     }
//     cancel() {
//         this.props.history.push('/EmployerhomePage');
//     }
//     changejobTitleHandler = (event) => {
//         this.setState({ jobTitle: event.target.value });
//     }
//     changejobDescHandler = (event) => {
//         this.setState({ jobDesc: event.target.value });
//     }
//     changejobExpHandler = (event) => {
//         this.setState({ jobExp: event.target.value });
//     }
//     changejobSalHandler = (event) => {
//         this.setState({ jobSal: event.target.value });
//     }

//     changejobLocationHandler = (event) => {
//         this.setState({ jobLocation: event.target.value });
//     }

//     changejobNoticePeriodHandler = (event) => {
//         this.setState({ jobNoticePeriod: event.target.value });
//     }
//     changejobSkillSetHandler = (event) => {
//         this.setState({ jobSkillSet: event.target.value });
//     }
//     changeempEmailHandler = (event) => {
//         this.setState({ empEmail: event.target.value });
//     }
//     changejobStatusHandler = (event) => {
//         this.setState({ jobStatus: event.target.value });
//     }

//     render() {
//         return (
//             <div>
//                 {/* <Multiselect
//                 option={data}
//                 displayValue="name" /> */}
//                 <div className="container">
//                     <div className="row">
//                         <div className="card col-md-6 offset-md-3">
//                             <h3 className="text-center">Post a Job</h3>
//                             <div className="card-body">
//                                 <form>
//                                     <div className="form-group">
//                                         <label>Job Title</label>
//                                         <input placeholder="Ex. Software Developer" className="form-control" name="jobTitle"
//                                             value={this.state.jobTitle} onChange={this.changejobTitleHandler} />

//                                         <label>Job Description</label>
//                                         <textarea placeholder="Job description" className="form-control" name="jobDesc"
//                                             value={this.state.jobDesc} onChange={this.changejobDescHandler} />

//                                         <label>Experience</label>
//                                         <input placeholder="Ex. 1 yr" className="form-control" name="jobExp"
//                                             value={this.state.jobExp} onChange={this.changejobExpHandler} />

//                                         <label>Salary</label>
//                                         <input placeholder="Ex.4 lpa" className="form-control" name="jobSal"
//                                             value={this.state.jobSal} onChange={this.changejobSalHandler} />

//                                         <label>Location</label>
//                                         <input placeholder="Ex. Pune" className="form-control" name="jobLocation"
//                                             value={this.state.jobLocation} onChange={this.changejobLocationHandler} />

//                                         {/* <label>Notice Period</label>
//                                         <input placeholder="Notice Period" className="form-control" name="jobSal"
//                                             value={this.state.jobNoticePeriod} onChange={this.changejobNoticePeriodHandler} /> */}
//                                         <label for="sel1">Notice Period</label>
//                                         <select class="form-control" placeholder="In Months" value={this.state.jobNoticePeriod} onChange={this.changejobNoticePeriodHandler} id="sel1">
//                                             <option>1 Month</option>
//                                             <option>2 Months</option>
//                                             <option>3 months</option>
//                                         </select>

//                                         <label>Employer Email</label>
//                                         <input placeholder="abc@gmail.com" className="form-control" name="employer email"
//                                             value={this.state.empEmail} onChange={this.changeempEmailHandler} />

//                                         <label for="sel1">Job status</label>
//                                         <select class="form-control" value={this.state.jobStatus} onChange={this.changejobStatusHandler} id="sel2">
//                                             <option>Available</option>
//                                             <option>Unavailable</option>
//                                         </select>

//                                         <label>Skills</label>
//                                         <input placeholder="Ex. C , C++ , Java" className="form-control" name="jobSkillSet"
//                                             value={this.state.jobSkillSet} onChange={this.changejobSkillSetHandler} />
//                                             <br/>

//                                             {/* <label>Skills</label>
//                                             <DropdownMultiselect className="form-control" name="jobSkillSet" placeholder="Skills" value={this.state.jobSkillSet} onChange={this.changejobSkillSetHandler}
//                                            options={["Java", "Python", "C", "C++", "AWS", "SQL"]}
//                                               name="countries"
//                                              />
//                                              <br/> */}

//                                         <button className="btn btn-success" onClick={this.saveJob}>Save</button>
//                                         <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{ marginLeft: "10px" }}>Cancel</button>
//                                     </div>
//                                 </form>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         )
//     }
// }
// export default PostJob