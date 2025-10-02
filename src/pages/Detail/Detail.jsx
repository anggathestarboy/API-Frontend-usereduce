import React, { useCallback, useEffect, useReducer, } from "react";
import DetailView from "./DetailView";
import { useParams } from "react-router-dom";

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

const Detail = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
const {slug} = useParams();

  const ambil = useCallback(async () => {
    const response = await fetch("https://api.escuelajs.co/api/v1/products/slug/" + slug);
    const data = await response.json();
    dispatch({ type: "Berhasil", payload: data });
  }, []);
  useEffect(() => {
    ambil();
  }, []);

  console.log(state);

  return (
    <div>

      <DetailView state={state} />
    </div>
  );
};

export default Detail;
