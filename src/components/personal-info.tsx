import React from "react";
import "./personal-info.css";

type PersonalInfoState = {
  firstName: string;
  lastName: string;
};

export class PersonalInfo extends React.Component {
  state: PersonalInfoState = { firstName: "", lastName: "" };
  constructor(prop: {}) {
    super(prop);

    this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
    this.handleLastNameChange = this.handleLastNameChange.bind(this);
    this.hadleSubmit = this.hadleSubmit.bind(this);
  }

  handleFirstNameChange = (event: React.FormEvent<HTMLInputElement>) => {
    this.setState({ firstName: event.currentTarget.value });
  };

  handleLastNameChange = (event: React.FormEvent<HTMLInputElement>) => {
    this.setState({ lastName: event.currentTarget.value });
  };

  hadleSubmit = () => {
    alert("User Name: " + this.state.firstName + " " + this.state.lastName);
  };

  render() {
    return (
      <div className="personal-info-form">
        <h2 className="personal-info">| Personal Info</h2>
        <form className="input-form" onSubmit={this.hadleSubmit}>
          <label>
            <div className="title-text">First Name:</div>
            <input
              className="input-field"
              type="text"
              name="firstName"
              onChange={this.handleFirstNameChange}
            />
          </label>
          <label>
            <div className="title-text">Last Name:</div>
            <input
              type="text"
              className="input-field"
              name="lastName"
              onChange={this.handleLastNameChange}
            />
          </label>
          <div>
            <input
              className="submit-button"
              disabled={!this.state.firstName || !this.state.lastName}
              type="submit"
              value="Submit"
            />
          </div>
        </form>
      </div>
    );
  }
}
