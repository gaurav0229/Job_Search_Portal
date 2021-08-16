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
            jobSkillSet: ''

        }
        this.changejobTitleHandler = this.changejobTitleHandler.bind(this);
        this.changejobDescHandler = this.changejobDescHandler.bind(this);
        this.changejobExpHandler = this.changejobExpHandler.bind(this);
        this.changejobSalHandler = this.changejobSalHandler.bind(this);
        this.changejobLocationHandler = this.changejobLocationHandler.bind(this);
        this.changejobNoticePeriodHandler = this.changejobNoticePeriodHandler.bind(this);
        this.changejobSkillSetHandler = this.changejobSkillSetHandler.bind(this);
        this.changeempEmailHandler = this.changeempEmailHandler.bind(this);
        this.changejobStatusHandler = this.changejobStatusHandler.bind(this);

        this.saveJob = this.saveJob.bind(this);

    }
    saveJob = e => {
        e.preventDefault();
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
                                        <input placeholder="Job title" className="form-control" name="jobTitle"
                                            value={this.state.jobTitle} onChange={this.changejobTitleHandler} />

                                        <label>Job Description</label>
                                        <textarea placeholder="Job desc" className="form-control" name="jobDesc"
                                            value={this.state.jobDesc} onChange={this.changejobDescHandler} />

                                        <label>Experience</label>
                                        <input placeholder="Job Exp" className="form-control" name="jobExp"
                                            value={this.state.jobExp} onChange={this.changejobExpHandler} />

                                        <label>Salary</label>
                                        <input placeholder="Job Salary" className="form-control" name="jobSal"
                                            value={this.state.jobSal} onChange={this.changejobSalHandler} />

                                        <label>Location</label>
                                        <input placeholder="Job Location" className="form-control" name="jobLocation"
                                            value={this.state.jobLocation} onChange={this.changejobLocationHandler} />

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
                                        <input placeholder="Employer Email" className="form-control" name="employer email"
                                            value={this.state.empEmail} onChange={this.changeempEmailHandler} />

                                        {/* <label>JOb status</label>
                                        <input placeholder="Job Status" className="form-control" name="Job status"
                                            value={this.state.jobStatus} onChange={this.changejobStatusHandler} /> */}
                                        <label for="sel1">Job status</label>
                                        <select class="form-control" value={this.state.jobStatus} onChange={this.changejobStatusHandler} id="sel2">
                                            <option>Available</option>
                                            <option>Unavailable</option>
                                        </select>

                                        <label>Skills</label>
                                        <input placeholder="Skills" className="form-control" name="jobSkillSet"
                                            value={this.state.jobSkillSet} onChange={this.changejobSkillSetHandler} />
<br/>
                                        <button className="btn btn-success" onClick={this.saveJob}>Save</button>
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