import "./App.css";
import { useState } from "react";
function App() {
  const [values, setValues] = useState({
    firstname: "",
    lastname: "",
    email: "",
    contact: "",
    // gender: "",
    subject: "",
    resume: "",
    url: "",
    about: "",
  });

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const resetValues = () => {
    // ariaChecked = false;
    setValues({
      firstname: "",
      lastname: "",
      email: "",
      contact: "",
      gender: "",
      subject: "",
      resume: "",
      url: "",
      about: "",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values);
  };

  return (
    <>
      <div className="container">
        <h1>Form in React</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="firstname">First Name *</label>
          <input
            type="text"
            placeholder="Enter First Name"
            name="firstname"
            required
            // onChange={(e) => handleChange(e)}
            onChange={handleChange}
            value={values.firstname}
          />
          <label htmlFor="lastname">Last Name *</label>
          <input
            type="text"
            placeholder="Enter Last Name"
            name="lastname"
            required
            onChange={handleChange}
            value={values.lastname}
          />
          <label htmlFor="email">Email *</label>
          <input
            type="email"
            placeholder="Enter Email"
            name="email"
            required
            onChange={handleChange}
            value={values.email}
          />
          <label htmlFor="contact">Contact </label>
          <input
            type="text"
            placeholder="Enter Phone Number"
            name="contact"
            required
            onChange={handleChange}
            value={values.contact}
          />
          <label htmlFor="gender">Gender </label>
          {/* <input type="radio" id="male" name="gender" />
          Male
          <input type="radio" id="female" name="gender" />
          Female
          <input type="radio" id="other" name="gender" />
          Other */}
          <div className="genders">
            <input
              type="radio"
              id="male"
              name="gender"
              value="male"
              checked={values.gender === "male"}
              // checked={values.gender === "male" ? true : false}
              onChange={handleChange}
              aria-checked={values.gender === "male"}
              // aria-checked={values.gender === "male" ? true : false}
            />
            <label htmlFor="male">Male </label>
            <input
              type="radio"
              id="female"
              name="gender"
              value="female"
              checked={values.gender === "female"}
              onChange={handleChange}
              aria-checked={values.gender === "female"}
            />
            <label htmlFor="female">Female </label>
            <input
              type="radio"
              id="other"
              name="gender"
              value="other"
              checked={values.gender === "other"}
              onChange={handleChange}
              aria-checked={values.gender === "other"}
            />
            <label htmlFor="other">Other</label>
          </div>
          <label htmlFor="subject">Subject</label>
          <select
            name="subject"
            id="subject"
            value={values.subject}
            // placeholder="Select subject..."
            onChange={handleChange}
          >
            <option value="" disabled selected>
              {/* <option value="" disabled selected> */}
              {/* <option value="" disabled hidden selected> */}
              Select subject...
            </option>
            <option value="math">Math</option>
            <option value="physics">Physics</option>
            <option value="english">English</option>
          </select>
          <label htmlFor="resume">Resume *</label>
          <input
            type="file"
            placeholder="Select Resume"
            name="resume"
            onChange={handleChange}
            value={values.resume}
          />
          <label htmlFor="url">URL</label>
          <input
            type="text"
            name="url"
            placeholder="Enter image URL"
            onChange={handleChange}
            value={values.url}
          />
          <label htmlFor="about">About</label>
          <textarea
            name="about"
            id="about"
            cols="52"
            rows="8"
            placeholder="Enter description"
            onChange={handleChange}
            value={values.about}
          ></textarea>
          <button type="button" onClick={resetValues}>
            Reset
          </button>
          <button type="submit">Submit</button>
          {/* <div className="buttons">
            <button type="button">Reset</button>
            <button type="submit">Submit</button>
          </div> */}
        </form>
      </div>
    </>
  );
}

export default App;

// const Form = () => {
//   const [gender, setGender] = React.useState(null);

//   const handleChange = (event) => {
//     setGender(event.target.value);
//   };

//   return (
//     <form>
//       <p>Gender</p>
//       <div>
//         <input
//           type="radio"
//           value="male"
//           checked={gender === 'male'}
//           onChange={handleChange}
//         /> Male
//       </div>
//       <div>
//         <input
//           type="radio"
//           value="female"
//           checked={gender === 'female'}
//           onChange={handleChange}
//         /> Female
//       </div>
//       <div>
//         <input
//           type="radio"
//           value="transgender"" "}
//           checked={gender === 'transgender'}
//           onChange={handleChange}
//         /> Transgender
//       </div>
//     </form>
//   );
// };

// export default Form;

// import React from "react";

// const Form = () => {
//   const [gender, setGender] = React.useState("male");

//   const handleChange = (event) => {
//     setGender(event.target.value);
//   };
//   return (
//     <form>
//       <p>Gender</p>
//       <div>
//         <input
//           type="radio"
//           value="male"
//           checked={gender === "male"}
//           onChange={handleChange}
//         />{" "}
//         Male
//       </div>
//       <div>
//         <input
//           type="radio"
//           value="female"
//           checked={gender === "female"}
//           onChange={handleChange}
//         />{" "}
//         Female
//       </div>
//       <div>
//         <input
//           type="radio"
//           value="transgender"
//           checked={gender === "transgender"}
//           onChange={handleChange}
//         />{" "}
//         Transgender
//       </div>
//     </form>
//   );
// };
