import React, { useState } from "react";
import "./ServiceForm.css";
import { Store } from "react-notifications-component";

function ServiceForm(props) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    address: "",
    service: "",
    outReachType: "",
    additionalInfo: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(formData);
    await fetch("http://localhost:3001", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
    Store.addNotification({
      title: "Request Successfully Submited!",
      message:
        "You have successfully submited your request! We will respond within 48 hours",
      type: "success",
      insert: "top",
      container: "top-right",
      animationIn: ["animate__animated", "animate__fadeIn"],
      animationOut: ["animate__animated animate__fadeOut"],
      dismiss: {
        duration: 5000,
        onScreen: true,
      },
    });
  };

  return (
    <form
      className="form"
      id="form"
      method="post"
      encType="multipart/form-data"
      action="http://localhost:3001"
    >
      <div className="form-group">
        <select
          name="service"
          id="service"
          className="form-input"
          value={formData.service}
          onChange={handleInputChange}
        >
          <option value="">Select Service Type</option>

          {props.data.map((value, index) => (
            <option value={value.header} key={index}>
              {value.header}
            </option>
          ))}
        </select>
      </div>
      <div className="form-group">
        <label className="form-label" htmlFor="firstName">
          First Name:
        </label>
        <input
          type="text"
          name="firstName"
          id="firstName"
          className="form-input"
          value={formData.firstName}
          onChange={handleInputChange}
        />
      </div>
      <div className="form-group">
        <label className="form-label" htmlFor="lastName">
          Last Name:
        </label>
        <input
          type="text"
          name="lastName"
          id="lastName"
          className="form-input"
          value={formData.lastName}
          onChange={handleInputChange}
        />
      </div>
      <div className="form-group">
        <label className="form-label" htmlFor="email">
          Email:
        </label>
        <input
          type="email"
          name="email"
          id="email"
          className="form-input"
          value={formData.email}
          onChange={handleInputChange}
        />
      </div>
      <div className="form-group">
        <label className="form-label" htmlFor="phoneNumber">
          Phone Number:
        </label>
        <input
          type="tel"
          name="phoneNumber"
          id="phoneNumber"
          className="form-input"
          value={formData.phoneNumber}
          onChange={handleInputChange}
        />
      </div>
      <div className="form-group">
        <label className="form-label" htmlFor="address">
          Address:
        </label>
        <input
          name="address"
          id="address"
          className="form-input"
          value={formData.address}
          onChange={handleInputChange}
          type="text"
        />
      </div>
      <div className="form-group">
        <textarea
          name="additionalInfo"
          id="additionalInfo"
          className="form-input"
          value={formData.additionalInfo}
          onChange={handleInputChange}
          placeholder="Additional Information"
        />
      </div>
      <div className="form-group">
        <select
          name="outReachType"
          id="outReachType"
          className="form-input"
          value={formData.outReachType}
          onChange={handleInputChange}
        >
          <option value="">How did you hear about us?</option>
          <option value="facebook">Facebook</option>
          <option value="instagram">Instagram</option>
          <option value="wordOfMouth">Word of Mouth</option>
        </select>
      </div>
      <input type="submit" className="form-button" value="Submit for Quote" />
    </form>
  );
}

export default ServiceForm;
