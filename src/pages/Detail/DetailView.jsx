import React, { memo } from "react";
import { Link } from "react-router-dom";

const DetailView = ({ state }) => {
  const data = state?.data; 

  if (!data) {
    return (
      <div className="p-8 text-center text-gray-600">
        Loading detail produk...
      </div>
    );
  }

  return (
    <div className="flex flex-col md:flex-row gap-8 p-8">
      <div className="flex-1 flex items-center justify-center">
        <img
          src={data.images?.[0]}
          alt={data.title}
          className="w-full max-w-md aspect-square object-cover rounded-2xl shadow-md"
        />
      </div>


      <div className="flex-1 space-y-4">

        

        <h1 className="text-3xl font-bold">{data.title}</h1>
        <p className="text-gray-700">{data.description}</p>

        <div className="space-y-1">
          <p className="text-xl font-semibold text-green-600">
            ${data.price}
          </p>
          <p className="text-gray-600">Kategori: {data.category?.name}</p>
          <p className="text-gray-600">
            Dibuat: {new Date(data.creationAt).toLocaleString()}
          </p>
          <p className="text-gray-600">
            Diupdate: {new Date(data.updatedAt).toLocaleString()}
          </p>
        </div>

        <div className="flex gap-3 mt-4">
          {data.images?.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Thumbnail ${index + 1}`}
              className="w-20 h-20 object-cover rounded-lg shadow"
            />
          ))}
        </div>
        <Link to={'/'}>     <button className="px-19 py-8 bg-gray-200 hover:bg-gray-300 text-gray-700 font-medium rounded-lg shadow w-fit">
          ← Back
        </button></Link>
   
      </div>
      
    </div>
  );
};

export default memo( DetailView);
