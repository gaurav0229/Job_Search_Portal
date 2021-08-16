import React, { PureComponent } from 'react'
import authHeader from '../../services/auth-header';
import employerservice from '../../services/employerservice';
 
class EmployerHomePage extends PureComponent {
    constructor(props) {
        super(props)
        // The bind() method allows an object to borrow a 
        // method from another object without making a copy of that method.
        this.state = {
            job : []    
        }
        this.postjob=this.postjob.bind(this);
        this.editjob=this.editjob.bind(this);
        this.deletejob=this.deletejob.bind(this);
        this.applicants=this.applicants.bind(this);
    }
 
    componentDidMount(){
        employerservice.getAllJob().then((res)=>
        this.setState({job : res.data})
        )
    }
    postjob(){
        this.props.history.push('/postjob', { headers: authHeader() });
    }
    editjob(jobId){
        this.props.history.push(`/updatejob/${jobId}`, { headers: authHeader() });
    }
    deletejob(jobId){
        this.props.history.push(`/deletejob/${jobId}`, { headers: authHeader() });
    }
    applicants(jobId){
        this.props.history.push(`/applicants/${jobId}`, { headers: authHeader() });
    }
   
    render() {
        return (
            <div>
                <h2 className="text-center"> List of jobs</h2>
                <button className="btn btn-primary" onClick={this.postjob}>Post Job</button>
                <table className="table table-striped table-bordered table-hover ">
                 <thead>
                     <tr>
                     <th>Job Id</th>
                     <th>Job Title</th>
                     <th>Job Desc</th>
                     <th>Experience (Yrs)</th>
                     <th>Salary (Rs)</th>
                     <th>Location</th>
                     <th>Employer Email</th>
                     <th>Notice period (months)</th>
                     <th>Skills</th>
                     <th>Status</th>
                     <th>Action</th>
                     </tr>
                 </thead>
                 <tbody>
                    {/* mapping is used which row is connected to which value in backend*/}
                         {
                             this.state.job.map(      
                                 job =>
                                 <tr><td>{job.jobId}</td>  {/* take same name as used in back end */}
                                     <td>{job.jobTitle}</td>
                                     <td>{job.jobDesc}</td>
                                     <td>{job.jobExp}</td>
                                     <td>{job.jobSal}</td>
                                     <td>{job.jobLocation}</td>
                                     <td>{job.empEmail}</td>
                                     <td>{job.jobNoticePeriod}</td>
                                     <td>{job.jobSkillSet}</td>
                                     <td>{job.jobStatus}</td>
                                     <td>
                                     <div class="btn-group-vertical">
                                     <button className="btn btn-primary" onClick={()=>this.applicants(job.jobId)}>Applicants</button>
                                     <button className="btn btn btn-secondary" onClick={()=>this.editjob(job.jobId)}>Update</button>
                                     <button className="btn btn-danger" onClick={()=>this.deletejob(job.jobId)}>Delete</button>
                                     </div>
                                     </td>
                                 </tr>  
                             )
                         }
                     
                 </tbody>
                </table>


            </div>
        )
    }
}
 
export default EmployerHomePage
