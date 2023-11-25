import { useEffect, useState } from "react";

// Function to retrieve data from local storage
const getStorageData = (keyName, defaultValue) => {
  const savedItem = localStorage.getItem(keyName); // Retrieves the item from local storage
  const parsedItem = JSON.parse(savedItem); // Parses the retrieved item
  return parsedItem || defaultValue; // Returns the parsed item or default value if no item is found
};

// Custom hook for managing data in local storage
export const useLocalStorage = (keyName, initialValue) => {
  const [value, setValue] = useState(() => {
    return getStorageData(keyName, initialValue); // Initializes state with data from local storage or initial value
  });

  // Effect to update local storage whenever the value changes
  useEffect(() => {
    localStorage.setItem(keyName, JSON.stringify(value)); // Sets the value in local storage as a JSON string
  }, [keyName, value]); // Triggers the effect when keyName or value changes

  return [value, setValue]; // Returns the stored value and a function to update it
};
