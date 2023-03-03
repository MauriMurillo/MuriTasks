import React, {useState} from "react";

function useLocalStorage(itemName, initialValue) {
  const localStorageItem = localStorage.getItem(itemName);
  let parsedItem;
  // console.log(JSON.stringify([...defaultTodos]));
  if (!localStorageItem || localStorageItem === JSON.stringify(initialValue)) {
    localStorage.setItem(itemName, JSON.stringify(initialValue));
    parsedItem = initialValue;
  }
  parsedItem = JSON.parse(localStorage.getItem(itemName));
  const [item, setItem] = useState(parsedItem);
  const saveItem = (newItem) => {
    setItem(newItem);
    const stringUpdated = JSON.stringify(newItem);
    localStorage.setItem(itemName, stringUpdated);
  };

  return [item, saveItem];
}

export {useLocalStorage}