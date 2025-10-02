import React, { useCallback, useEffect, useReducer, useState } from "react";
import ListView from "./ListView";

const initialState = {
  data: [],
  loading: true,
  error: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "Berhasil":
      return {
        ...state,
        data: action.payload,
        loading: false,
        error: null,
      };
    case "Gagal":
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    default:
      throw new Error("Error Disini" + action.type);
  }
};

const List = () => {
  const [state, dispatch] = useReducer(reducer, initialState);


  const ambil = useCallback(async () => {
    const response = await fetch("https://api.escuelajs.co/api/v1/products");
    const data = await response.json();
    dispatch({ type: "Berhasil", payload: data });
  }, []);
  useEffect(() => {
    ambil();
  }, []);

  console.log(state);




      if (state.loading) {
    return <h1 className="font-bold text-5xl flex items-center justify-center mt-100">Loading...</h1>;
  }
  return (
    <div>

      <ListView state={state} loading={state.loading} />
    </div>
  );
};

export default List;
