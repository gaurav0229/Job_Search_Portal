import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { retrieveJobs, findJobByjobLocation} from "../actions/jobs";

class JobsList1 extends Component {
  constructor(props) {
    super(props);
    this.onChangeSearchjobLocation = this.onChangeSearchjobLocation.bind(this);
    this.refreshData = this.refreshData.bind(this);
    this.setActiveJob = this.setActiveJob.bind(this);
    this.findByjobLocation = this.findByjobLocation.bind(this);
    

    this.state = {
      currentJob: null,
      currentIndex: -1,
      searchjobLocation: "",
    };
  }

  componentDidMount() {
    this.props.retrieveJobs();
  }

  onChangeSearchjobLocation(e) {
    const searchjobLocation = e.target.value;
    

    this.setState({
      searchjobLocation: searchjobLocation,
    });
  }

  refreshData() {
    this.setState({
      currentJob: null,
      currentIndex: -1,
    });
  }

  setActiveJob(job, index) {
    this.setState({
      currentJob: job,
      currentIndex: index,
    });
  }

  findByjobLocation() {
    this.refreshData();
    console.log(this.state.searchjobLocation);
    this.props.findJobByjobLocation(this.state.searchjobLocation);
  }

  render() {
    const { searchjobLocation, currentJob, currentIndex } = this.state;
    const { jobs } = this.props;

    return (
        <div className="list row">
          <div className="col-md-8">
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Search by job location"
                value={searchjobLocation}
                onChange={this.onChangeSearchjobLocation}                          
              />
            
              {/* <div className="input-group-append">
                <button
                  className="btn btn-outline-secondary"
                  type="button"
                  onClick={this.findByjobLocation}
                >
                  Search
                </button>
              </div> */}
            </div>
          </div>
          <div className="col-md-6">
            <h4>Jobs List</h4>
  
            <ul className="list-group">
              {jobs &&
                 jobs.filter(qae=>qae.jobLocation.toLowerCase().includes(searchjobLocation.toLowerCase())).map((job, index) => (
                  <li
                    className={
                      "list-group-item " +
                      (index === currentIndex ? "active" : "")
                    }
                    onClick={() => this.setActiveJob(job, index)}
                    key={index}
                  >
                    <b>{job.jobTitle}</b><br></br> {job.jobLocation}
                  </li>
                ))}
            </ul>
  
          </div>
          <div className="col-md-6">
            {currentJob ? (
              <div>
                <h4>Jobs</h4>
                <div>
                  <label>
                    <strong>jobTitle:</strong>
                  </label>{" "}
                  {currentJob.jobTitle}
                </div>
                <div>
                  <label>
                    <strong>jobLocation:</strong>
                  </label>{" "}
                  {currentJob.jobLocation}
                </div>
                <div>
                  <label>
                    <strong>jobDescription:</strong>
                  </label>{" "}
                  {currentJob.jobDes}
                </div>
                <div>
                  <label>
                    <strong>jobExp:</strong>
                  </label>{" "}
                  {currentJob.jobExp}
                </div>
                <div>
                  <label>
                    <strong>jobSal:</strong>
                  </label>{" "}
                  {currentJob.jobSal}
                </div>
                <div>
                  <label>
                    <strong>jobNoticePeriod:</strong>
                  </label>{" "}
                  {currentJob.jobNoticePeriod}
                </div>
                <div>
                  <label>
                    <strong>empEmail:</strong>
                  </label>{" "}
                  {currentJob.empEmail}
                </div>
                <div>
                  <label>
                    <strong>jobStatus:</strong>
                  </label>{" "}
                  {currentJob.jobStatus}
                </div>
                <div>
                  <label>
                    <strong>jobSkillSet:</strong>
                  </label>{" "}
                  {currentJob.jobSkillSet}
                </div>
  
                <Link
                  to={"/jobs1/" + currentJob.jobLocation}
                  className="badge badge-warning"
                >
                  Apply
                </Link>

                <Link
                  to={"/addtocart/" + currentJob.jobId}//add to basket
                  className="badge badge-success"
                >
                  Add to Basket
                </Link>
              </div>
            ) : (
              <div>
                <br />
                <p>Please click on a Job...</p>
              </div>
            )}
          </div>
        </div>
      );
    }
  }


const mapStateToProps = (state) => {
  return {
    jobs: state.jobs,
  };
};

export default connect(mapStateToProps, { retrieveJobs, findJobByjobLocation})(JobsList1);