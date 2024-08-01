import React, { Component } from "react";

class SignupForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      age: "",
      dob: "",
      contact: "",
      email: "",
      password: "",
      message: "",
      errors: {},
    };
  }

  validateForm = () => {
    const { name, age, dob, contact, email, password } = this.state;
    let errors = {};
    let formIsValid = true;

    if (!name) {
      formIsValid = false;
      errors["name"] = "Please enter your name.";
    }

    if (!age || isNaN(age) || age <= 0) {
      formIsValid = false;
      errors["age"] = "Please enter a valid age.";
    }

    if (!dob) {
      formIsValid = false;
      errors["dob"] = "Please enter your date of birth.";
    }

    if (!contact || !/^\d{10}$/.test(contact)) {
      formIsValid = false;
      errors["contact"] = "Please enter a valid 10-digit contact number.";
    }

    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      formIsValid = false;
      errors["email"] = "Please enter a valid email.";
    }

    if (!password || password.length < 6) {
      formIsValid = false;
      errors["password"] = "Password must be at least 6 characters.";
    }

    this.setState({ errors });
    return formIsValid;
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    if (this.validateForm()) {
      this.setState({
        message: "Form is submitted!",
        errors: {},
      });
    } else {
      this.setState({ message: "" });
    }
  };

  render() {
    const { name, age, dob, contact, email, password, message, errors } = this.state;

    return (
      <div className="max-w-md  mx-auto mt-8 p-4 border border-gray-300 shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Signup Form</h2>
        <form onSubmit={this.handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700">Name</label>
            <input
              type="text"
              name="name"
              value={name}
              onChange={this.handleChange}
              className="w-full p-2 border border-gray-300 rounded"
            />
            <div className="text-red-500">{errors.name}</div>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Age</label>
            <input
              type="number"
              name="age"
              value={age}
              onChange={this.handleChange}
              className="w-full p-2 border border-gray-300 rounded"
            />
            <div className="text-red-500">{errors.age}</div>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Date of Birth</label>
            <input
              type="date"
              name="dob"
              value={dob}
              onChange={this.handleChange}
              className="w-full p-2 border border-gray-300 rounded"
            />
            <div className="text-red-500">{errors.dob}</div>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Contact</label>
            <input
              type="text"
              name="contact"
              value={contact}
              onChange={this.handleChange}
              className="w-full p-2 border border-gray-300 rounded"
            />
            <div className="text-red-500">{errors.contact}</div>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={this.handleChange}
              className="w-full p-2 border border-gray-300 rounded"
            />
            <div className="text-red-500">{errors.email}</div>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Password</label>
            <input
              type="password"
              name="password"
              value={password}
              onChange={this.handleChange}
              className="w-full p-2 border border-gray-300 rounded"
            />
            <div className="text-red-500">{errors.password}</div>
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
          >
            Submit
          </button>
        </form>
        {message && <div className="mt-4 text-green-500">{message}</div>}
      </div>
    );
  }
}

export default SignupForm;
