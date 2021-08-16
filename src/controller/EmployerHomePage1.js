import React, { PureComponent } from 'react'
import employerservice from '../services/employerservice';
 
class EmployerHomePage1 extends PureComponent {
    constructor(props) {
        super(props)
      
        this.state = {
            job : []    
        }

        this.applicants=this.applicants.bind(this);
    }
 
    componentDidMount(){
        employerservice.getAllJob().then((res)=>
        this.setState({job : res.data})
        )
    }
    // postjob(){
    //     this.props.history.push('/postjob', { headers: authHeader() });
    // }
    // editjob(jobId){
    //     this.props.history.push(`/updatejob/${jobId}`, { headers: authHeader() });
    // }
    // deletejob(jobId){
    //     this.props.history.push(`/deletejob/${jobId}`, { headers: authHeader() });
    // }
    applicants(jobId){
        this.props.history.push(`/applicants/${jobId}`);
    }
   
    render() {
        return (
            <div>
                <h2 className="text-center"> List of jobs</h2>
                {/* <button className="btn btn-primary" onClick={this.postjob}>Post Job</button> */}
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
                            </tr>  
                             )
                         }
                     
                 </tbody>
                </table>


            </div>
        )
    }
}
 
export default EmployerHomePage1