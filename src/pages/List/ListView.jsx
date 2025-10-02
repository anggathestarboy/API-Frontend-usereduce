import React, { memo } from 'react'
import { Link } from 'react-router-dom'

const ListView = ({ state, loading }) => {

  return (
    <div className="p-6">
      {
            loading ?? "Masih Loading"
        }
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {state.data.map((item) => (
          <div key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
           {item.images.length >= 1 && (
  <img 
    src={item.images[0]} 
    className="w-full h-100 object-cover" 
    alt={item.title} 
  />
)}
        




            <div className="p-4">
              <h4 className="text-xl font-semibold mb-2">{item.title}</h4>
              <span className="inline-block bg-gray-200 text-gray-700 text-sm px-3 py-1 rounded-full mb-2">
                {item.category.name}
              </span>
              <p className="text-gray-600 mb-3 line-clamp-3">{item.description}</p>
              <p className="text-2xl font-bold text-green-600 mb-3">${item.price}</p>

          <Link to={'/detail/' + item.slug}><button className="px-4 py-2 rounded-lg bg-gray-800 text-white font-medium shadow-md hover:bg-gray-700 active:translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-blue-300">
  Lihat Detail
</button></Link>    <br /><br />
              <div className="text-xs text-gray-500">
                <p>Dibuat: {new Date(item.creationAt).toLocaleString()}</p>
          
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default memo(ListView)