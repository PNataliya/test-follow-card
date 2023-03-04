// import { useState, useEffect } from 'react';

// function getSavedValue(key, initialValue) {
//   const savedValue = JSON.parse(localStorage.getItem(key));

//   if (savedValue) return savedValue;

//   if (initialValue instanceof Function) return initialValue();
//   return initialValue;
// }

// export default function useLocalStorage(key, initialValue) {
//   const [value, setValue] = useState(() => {
//     return getSavedValue(key, initialValue);
//   });

//   useEffect(() => {
//     localStorage.setItem(key, JSON.stringify(value));
//   }, [value]);

//   return [value, setValue];
// }
//==============

import { useState, useEffect } from "react";

const useLocalStorage = (key, defaultValue) => {
  const [state, setState] = useState(() => {
    return JSON.parse(window.localStorage.getItem(key)) ?? defaultValue;
  });

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  return [state, setState];
};

export default useLocalStorage;
