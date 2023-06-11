import React from "react";

function StudentRegistrationForm() {
  return (
    <>
      <h2>Enter Your Information Below</h2>
      <table align="center" cellpadding="10">
        {/* First Name */}
        <tr>
          <td>First Name</td>
          <td>
            <input
              type="text"
              name="FirstName"
              maxLength="50"
              placeholder="First Name"
            />
            (Max 50 Characters Allowed)
          </td>
        </tr>
        {/* Last Name */}
        <tr>
          <td>Last Name</td>
          <td>
            <input
              type="text"
              name="LastName"
              maxLength="50"
              placeholder="Last Name"
            />
            (Max 50 Characters Allowed)
          </td>
        </tr>
        {/* Email */}
        <tr>
          <td>Email</td>
          <td>
            <input
              type="email"
              name="Email"
              maxLength="100"
              placeholder="fg@st.ug.edu.gh"
            />
          </td>
        </tr>
        {/* Student ID */}
        <tr>
          <td>Student ID</td>
          <td>
            <input
              type="text"
              name="Student ID"
              maxLength="10"
              placeholder="10956332"
            />
            (Max 10 Digits Allowed)
          </td>
        </tr>
        {/* Mobile Number */}
        <tr>
          <td>Mobile Number</td>
          <td>
            <input
              type="text"
              name="MobileNumber"
              maxLength="10"
              placeholder="0541xxxxxx"
            />
            (10 Digits Allowed)
          </td>
        </tr>
        {/* Level */}
        <tr>
          <td>Level</td>
          <td>
            <input
              type="text"
              name="Level"
              maxLength="10"
              placeholder="Level 200"
            />
            (Max 10 Characters Allowed)
          </td>
        </tr>
        {/* Department */}
        <tr>
          <td>Department</td>
          <td>
            <input
              type="text"
              name="Department"
              maxLength="50"
              placeholder="Department"
            />
            (Max 50 Characters Allowed)
          </td>
        </tr>
        {/* Gender */}
        <tr>
          <td>Gender</td>
          <td>
            <input type="radio" name="Gender" value="Male" />
            Male
            <input type="radio" name="Gender" value="Female" />
            Female
          </td>
        </tr>
        {/* Date of Birth */}
        <tr>
          <td>Date of Birth(DOB)</td>
          <td>
            <select name="Day" id="Birthday_Day">
              <option value="-1">Day:</option>
              <option value="1">1</option>
              {/* Rest of the day options */}
            </select>
            <select name="Month" id="Birthday_Month">
              <option value="-1">Month:</option>
              <option value="January">Jan(1)</option>
              {/* Rest of the month options */}
            </select>
            <select name="Year" id="Birthday_Year">
              <option value="-1">Year:</option>
              <option value="2019">2019</option>
              {/* Rest of the year options */}
            </select>
          </td>
        </tr>
        {/* Address */}
        <tr>
          <td>Address</td>
          <td>
            <textarea name="Address" rows="10" cols="50"></textarea>
          </td>
        </tr>
        {/* Pin */}
        <tr>
          <td>Pin</td>
          <td>
            <input
              type="text"
              name="Pin"
              maxLength="10"
              placeholder="Pin"
            />
            (Max 10 Characters Allowed)
          </td>
        </tr>
        {/* Submit and Reset */}
        <tr>
          <td colSpan="2" align="center">
            <input type="submit" value="Submit" />
            <input type="reset" value="Reset" />
          </td>
        </tr>
      </table>
    </>
  );
}

export default StudentRegistrationForm;
