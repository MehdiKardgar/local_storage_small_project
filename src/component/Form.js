import React from "react";

import "./Form.css"; // Import the CSS file

import { useLocalStorage } from "../hooks/useLocalStorage";

const Form = () => {
  const [userName, setUserName] = useLocalStorage("Username", ""); // Use useLocalStorage hook
  const [checked, setChecked] = useLocalStorage("Checkbox", false);

  const handleUsernameChange = (e) => {
    if (checked) {
      // Update userName only when the checkbox is checked
      setUserName(e.target.value);
    }
  };

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <input
        type="text"
        value={userName}
        onChange={handleUsernameChange}
        placeholder="Username"
      />

      <label>
        <input
          type="checkbox"
          checked={checked}
          onChange={(e) => setChecked(e.target.checked)}
        />
        Remember me
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
};

export default Form;
