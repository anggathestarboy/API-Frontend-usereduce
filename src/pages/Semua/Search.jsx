import React, { useEffect, useReducer, useState } from "react";
import { useSearchParams } from "react-router-dom";
import SearchView from "./SearchView";

const initialStates = {
  data: [],
  loading: true,
  error: null,
};

const reducerSemua = (state, action) => {
  switch (action.tipe) {
    case "BISA":
      return {
        ...state,
        data: action.isi,
        loading: false,
      };
    case "TIDAKBISA":
      return {
        ...state,
        error: action.isi,
        loading: false,
      };

    default:
      console.log("Error" + action.tipe);
  }
};

const Search = () => {
  const [state, setState] = useReducer(reducerSemua, initialStates);
  const [cari, setCari] = useSearchParams();
  const title = cari.get("title");

  const ambilData = async (tangkap) => {
    try {
      const kirim = await fetch(
        "https://api.escuelajs.co/api/v1/products/?title=" + tangkap
      );
      const data = await kirim.json();
      setState({ tipe: "BISA", isi: data });
    } catch (error) {
      setState({ tipe: "TIDAKBISA", isi: error });
    }
  };

  const fungsiPerubahan = (isi) => {
    const value = isi.target.value;
    if (value) {
      setCari({ title: value });
    } else {
      setCari({});
    }
  };

  useEffect(() => {
    ambilData(title);
  }, [title]);
    if (state.loading) {
    return <h1 className="font-bold text-5xl flex items-center justify-center mt-100">Loading...</h1>;
  }

  return (
    <div>
      <SearchView state={state} loading={state.loading} fungsiPerubahan={fungsiPerubahan} q={title}/>
    </div>
  );
};

export default Search;
