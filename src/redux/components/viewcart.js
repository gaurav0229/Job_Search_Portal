import React, { PureComponent } from 'react';
import { Button } from '../../components/Button';
import JobDataService from '../services/job.service';
import authHeader from '../../services/auth-header';

class Viewcart extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            // id:this.props.match.params.id,
            
            job:[]
           
        }
        // this.removejob=this.removejob.bind(this);
    }
    componentDidMount(){
        JobDataService.viewCart().then((res)=>{
        this.setState({job : res.data});
        // console.log("job=>"+job);
        }) 
    }
    
    removejob(jobId){
        this.props.history.push(`/removejob/${jobId}`, { headers: authHeader() });
    }

    render() {
        return (
            <div>
                <h2 className="text-center"> jobs in cart</h2>
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
                                     <button className="btn btn-danger" onClick={()=>this.removejob(job.jobId)}>Remove</button>
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

export default Viewcart