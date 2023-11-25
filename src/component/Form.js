import React from "react";

import "./Form.css"; // Import the CSS file

import { useLocalStorage } from "../hooks/useLocalStorage";

const Form = () => {
  // Define states for username and checkbox using the useLocalStorage hook
  const [userName, setUserName] = useLocalStorage("Username", "");
  const [checked, setChecked] = useLocalStorage("Checkbox", false);

  // Function to handle changes in the username field
  const handleUsernameChange = (e) => {
    // Update userName only when the checkbox is checked
    if (checked) {
      setUserName(e.target.value);
    }
  };

  return (
    // Form structure with input fields and submit button
    <form onSubmit={(e) => e.preventDefault()}>
      <input
        type="text"
        value={userName} // Binds the value of the input field to the username state
        onChange={handleUsernameChange} // Executes the handleUsernameChange function on input change
        placeholder="Username"
      />

      <label>
        <input
          type="checkbox"
          checked={checked} // Binds the checked state of the checkbox
          onChange={(e) => setChecked(e.target.checked)} // Updates the checked state based on checkbox interaction
        />
        Remember me
      </label>

      <input type="submit" value="Submit" />
    </form>
  );
};

export default Form;
