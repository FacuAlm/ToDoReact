import { useState } from "react";

export const useForm = (initialState = {}) => {
  const [Values, setValues] = useState(initialState);

  const reset=()=>{
    setValues(initialState)
  }

  const handleInput = ({target}) => {
    setValues({
      ...Values,
      [target.name]: target.value,
    });
  };

  return [Values, handleInput, reset];
};
