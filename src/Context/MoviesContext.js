import React, { createContext, useReducer } from "react";

export const MovieContext = createContext();

export const MovieReducer = (state, action) => {
  console.log("this is reducer", state, action);
  switch (action.type) {
    case "SETDATA":
      return [ ...action.payload ];
      case "UNSETDATA":
        return {...state, data:{}};
    default:
      return state;
  }
};

const MovieContextProvider = props => {
  const [Movie, MovieDispatch] = useReducer(MovieReducer, []);

  return (
    <MovieContext.Provider
      value={{ Movie, MovieDispatch }}
    >
      {props.children}
    </MovieContext.Provider>
  );
};

export default MovieContextProvider;