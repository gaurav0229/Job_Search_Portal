import React, { PureComponent } from 'react';
import employerservice from '../../services/employerservice';

class Deletejob extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      jobId: this.props.match.params.jobId,
      jobTitle: '',
      jobDesc: '',
      jobExp: '',
      jobSal: '',
      jobLocation: '',
      jobNoticePeriod: '',
      jobSkillSet: ''

    }



    this.DeleteJob = this.DeleteJob.bind(this);

  }

  componentDidMount() {
    employerservice.getJobByJobId(this.state.jobId).then((res) => {
      // take data from response using res
      let job = res.data;
      this.setState({ jobTitle: job.jobTitle, jobDesc: job.jobDesc, jobExp: job.jobExp, jobSal: job.jobSal, jobLocation: job.jobLocation, jobNoticePeriod: job.jobNoticePeriod, jobSkillSet: job.jobSkillSet });
    });
  }
  DeleteJob = e => {

    e.preventDefault();//preventDefault is called on the event when submitting the form to prevent a browser reload/refresh. 

    let job = { jobTitle: this.state.jobTitle, jobDesc: this.state.jobDesc, jobExp: this.state.jobExp, jobSal: this.state.jobSal, jobLocation: this.state.jobLocation, jobNoticePeriod: this.state.jobNoticePeriod, jobSkillSet: this.state.jobSkillSet };

    console.log('job=>' + JSON.stringify(job));

    employerservice.deleteJob(job, this.state.jobId).then((res) => {
      this.props.history.push("/EmployerhomePage");
      console.log("successfully completed");
    });


  }
  cancel() {
    this.props.history.push('/EmployerhomePage');
  }




  render() {
    return (
      <div>
        <div className=" center card " >
          <h2 className="text-center">Are You Sure? </h2>
          <div className="card-body">
            <h4 className="text-center" style={{ margin: "3rem" }}>This process cannot be reversed</h4>
            <form>
              <div className="form-group ">
                <button className="btn btn-danger " onClick={this.DeleteJob} style={{ marginLeft: "120px" }}>Confirm Delete</button>
                <button className="btn btn-success " onClick={this.cancel.bind(this)} style={{ marginLeft: "30px" }}>Cancel</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default Deletejob