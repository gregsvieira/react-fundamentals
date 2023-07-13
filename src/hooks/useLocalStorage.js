import React, { useState ,useEffect } from "react";

export default function useLocalStorage(key, initialValue = ''){
  const [state, setState] = useState(() => {

    const storedData = localStorage.getItem(key);

    if (storedData) {
     return JSON.parse(storedData)
    }

    return initialValue;
  });


  useEffect(() => {
      localStorage.setItem(key, JSON.stringify(state))
  }, [key, state])

  return [state, setState];
}