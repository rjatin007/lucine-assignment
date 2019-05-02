import React, { Component } from "react";
import './Form.css';
export default class Form extends Component {
  state = {
    analytical_id: "",
    target_residue_type: "",
    reason: ""
  };
  handleInputChange = event => {
    const value = event.target.value;
    const name = event.target.name;
    let isValid =true;
    
    if(name === 'analytical_id' ){
      const reg= new RegExp(/^\d+$/);
      isValid = reg.test(value)
    }
    if(isValid){
      this.setState(state => ({
        ...state,
        [name]: value
      }));
    }
   
  };
  formSubmitHandler = () => {
    
    this.props.update({
      ...this.state
    });
    this.setState({
      analytical_id: "",
      target_residue_type: "",
      reason: ""
    })
  };
  render() {
    const { analytical_id, target_residue_type, reason } = this.state;
    
    return (
      <div className="form">
        <h2>ADD ENTRY</h2>
        <div className="form-control">
          <div className="input-container">
            <label>Analytical ID</label> : <br />
            <input
            className="input"
              type="text"
              value={analytical_id}
              name="analytical_id"
              placeholder="should be a number"
              onChange={this.handleInputChange}
            />
          </div>
          <div className="input-container">
            <label>Target Residue Type</label> : <br />
            <select className ='input'
              name="target_residue_type"
              onChange={this.handleInputChange}
              value={target_residue_type}
            >
              <option>Type A </option>
              <option>Type B </option>
              <option>Type C </option>
            </select>
          </div>
          <div className="input-container">
            <label>Reason</label> : <br />
            <textarea
              className ="input"
              type="text"
              value={reason}
              name="reason"
              onChange={this.handleInputChange}
            />
          </div>
        </div>
        <button onClick={this.formSubmitHandler}> Submit</button>
      </div>
    );
  }
}
