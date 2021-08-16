import React, { PureComponent } from 'react';
import JobDataService from '../services/job.service';

class Addtocart extends PureComponent {
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

        this.Addtocart = this.Addtocart.bind(this);
    }

    componentDidMount() {
        JobDataService.findByjobId(this.state.jobId).then((res) => {
            // take data from response using res
            let job = res.data;
            this.setState({  
                
                jobTitle:job.jobTitle,
                jobDesc:job.jobDesc,
                jobExp:job.jobExp,
                jobSal:job.jobSal,
                jobLocation:job.jobLocation,
                jobNoticePeriod:job.jobNoticePeriod,
                jobSkillSet:job.jobSkillSet,
                empEmail:job.empEmail,
                jobStatus:job.jobStatus});
        });
    }
    Addtocart = e => {

        e.preventDefault();//preventDefault is called on the event when submitting the form to prevent a browser reload/refresh. 

        let job = {  jobTitle: this.state.jobTitle,
            jobDesc: this.state.jobDesc,
            jobExp: this.state.jobExp, 
            jobSal: this.state.jobSal,
            jobLocation:this.state.jobLocation,
            jobNoticePeriod:this.state.jobNoticePeriod,
            jobSkillSet:this.state.jobSkillSet ,
            empEmail:this.state.empEmail,
            jobStatus:this.state.jobStatus };

        console.log('job=>' + JSON.stringify(job));

        JobDataService.AddToCart(job, this.state.jobId).then((res) => {
            this.props.history.push("/JobseekerHomePage");//viewallinbasket=>basketjob
            console.log("successfully completed");
        });


    }


    render() {
        return (
            <div>
                <div className=" center card " >
                    <h2 className="text-center">Job Added To Cart ! </h2>
                    <div className="card-body">
                        <form>
                            <div className="form-group ">
                                <button className="btn btn-danger " onClick={this.Addtocart} style={{ marginLeft: "120px" }}>Ok</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Addtocart
