import React, { PureComponent } from 'react';
import employerservice from '../../services/employerservice';


class Applicants extends PureComponent {

    constructor(props) {
        super(props)

        this.state = {
            jobId:this.props.match.params.jobId,
            js_service: []
        }
    }

    componentDidMount(){
        employerservice.getJobSeekerByJobId(this.state.jobId).then((res)=>
        this.setState({js_service : res.data})
        )
    }


    render() {
        return (
            <div>
                <h2 className="text-center"> List of applicants</h2>
                <table className="table table-striped table-bordered table-hover ">
                    <thead>
                        <tr>
                            <th>Jobseeker Id</th>
                            <th>Jobseeker Name</th>
                            <th>Address</th>
                            <th>Contact</th>
                            <th>Skillset</th>
                            <th>Email</th>
                            {/* <th>Action</th> */}
                        </tr>
                    </thead>
                    <tbody>
                        {/* mapping is used which row is connected to which value in backend*/}
                        {
                            this.state.js_service.map(
                                js_service =>
                                    <tr><td>{js_service.jsId}</td>  {/* take same name as used in back end */}
                                        <td>{js_service.jsName}</td>
                                        <td>{js_service.jsAdd}</td>
                                        <td>{js_service.jsContact}</td>
                                        <td>{js_service.jsSkillSet}</td>
                                        <td>{js_service.jsEmail}</td>
                                        {/* <td>
                                            <button className="btn" >Applicants</button>
                                        </td> */}
                                    </tr>
                            )
                        }

                    </tbody>
                </table>
            </div>
        )
    }
}

export default Applicants