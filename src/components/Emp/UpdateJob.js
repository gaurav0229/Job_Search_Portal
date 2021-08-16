import React, { PureComponent } from 'react'
import '../../App.css'
import employerservice from '../../services/employerservice';

class Updatejob extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            jobId:this.props.match.params.jobId,
            jobTitle: '',
            jobDesc: '',
            jobExp: '',
            jobSal: '',
            jobLocation:'',
            jobNoticePeriod:'',
            empEmail:'',
            jobStatus:'',
            jobSkillSet:''

        }
        // this.changejobTitleHandler = this.changejobTitleHandler.bind(this);
        this.changejobDescHandler = this.changejobDescHandler.bind(this);
        this.changejobExpHandler =this.changejobExpHandler.bind(this);
        this.changejobSalHandler =this.changejobSalHandler.bind(this);
        this.changejobLocationHandler =this.changejobLocationHandler.bind(this);
        this.changejobNoticePeriodHandler =this.changejobNoticePeriodHandler.bind(this);
        this.changejobSkillSetHandler =this.changejobSkillSetHandler.bind(this);
        this.changeempEmailHandler =this.changeempEmailHandler.bind(this);
        this.changejobStatusHandler =this.changejobStatusHandler.bind(this);
       

        this.UpdateJob = this.UpdateJob.bind(this);

    }
    
    componentDidMount(){
        employerservice.getJobByJobId(this.state.jobId).then((res)=>{
            // take data from response using res
        let job=res.data;
        this.setState({
            jobTitle:job.jobTitle,
            jobDesc:job.jobDesc,
            jobExp:job.jobExp,
            jobSal:job.jobSal,
            jobLocation:job.jobLocation,
            jobNoticePeriod:job.jobNoticePeriod,
            jobSkillSet:job.jobSkillSet,
            empEmail:job.empEmail,
            jobStatus:job.jobStatus
        }
            );
        });
    }
    UpdateJob = e => {

        e.preventDefault();//preventDefault is called on the event when submitting the form to prevent a browser reload/refresh. 
      
        let job ={
             jobTitle: this.state.jobTitle,
             jobDesc: this.state.jobDesc,
             jobExp: this.state.jobExp, 
             jobSal: this.state.jobSal,
             jobLocation:this.state.jobLocation,
             jobNoticePeriod:this.state.jobNoticePeriod,
             jobSkillSet:this.state.jobSkillSet ,
             empEmail:this.state.empEmail,
             jobStatus:this.state.jobStatus
            };

        console.log('job=>' + JSON.stringify(job));

        employerservice.updateJob(job,this.state.jobId).then((res)=>{
         this.props.history.push("/EmployerhomePage");
         console.log("successfully completed");
        });

        
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
                        <div className=" center card " >
                            <h3 className="text-center">Update Job</h3>
                            <div className="card-body">
                                <form>
                                    <div className="form-group">
                                        <label>Job Title</label>
                                        <input placeholder="Job title" className="form-control" name="jobTitle"
                                            value={this.state.jobTitle} disabled />
                                    </div>
                                    <div className="form-group">
                                        <label>Job Desc</label>
                                        <textarea placeholder="Job desc" className="form-control" name="jobDesc"
                                            value={this.state.jobDesc} onChange={this.changejobDescHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label>Experience</label>
                                        <input placeholder="Job Exp" className="form-control" name="jobExp"
                                            value={this.state.jobExp} onChange={this.changejobExpHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label>Salary</label>
                                        <input placeholder="Job Salary" className="form-control" name="jobSal"
                                            value={this.state.jobSal} onChange={this.changejobSalHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label>Location</label>
                                        <input placeholder="Job Location" className="form-control" name="jobLocation"
                                            value={this.state.jobLocation} onChange={this.changejobLocationHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label>Notice Period</label>
                                        <input placeholder="Notice Period" className="form-control" name="job notice "
                                            value={this.state.jobNoticePeriod} onChange={this.changejobNoticePeriodHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label>Employer Email</label>
                                        <input placeholder="Employer Email" className="form-control" name="employer email"
                                            value={this.state.empEmail} onChange={this.changeempEmailHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label>JOb status</label>
                                        <input placeholder="Job Status" className="form-control" name="Job status"
                                            value={this.state.jobStatus} onChange={this.changejobStatusHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label>Skills</label>
                                        <input placeholder="Skills" className="form-control" name="jobSkillSet"
                                            value={this.state.jobSkillSet} onChange={this.changejobSkillSetHandler} />
                                    </div>
                                    <button className="btn btn-success" onClick={this.UpdateJob}>Save</button>
                                    <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{ marginLeft: "10px" }}>Cancel</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Updatejob