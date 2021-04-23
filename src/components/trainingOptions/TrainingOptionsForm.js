import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTrainingOption } from '../../actions/addTrainingOption';
// import Form from 'react-bootstrap/Form';

class TrainingOptionsForm extends Component {

    state = {
        label: "",
        fee: 0
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.addTrainingOption(this.state)
        this.setState({
            label: "",
            fee: 0
        })
    }

    render() {
        return (
            <div className="form">
                <h4>Set Pricing</h4>
                    <form onSubmit={this.handleSubmit}>
                            <label>Option</label>
                            <input type="text" value={this.state.label} name="label" onChange={this.handleChange} /><br></br>
                            <label>Fee</label>
                            <input type="text" value={this.state.fee} name="fee" onChange={this.handleChange} /><br></br>

                        <input type="submit" value="Add"/>

                    </form>
            </div>
        )
    }
}

export default connect(null, { addTrainingOption })(TrainingOptionsForm);