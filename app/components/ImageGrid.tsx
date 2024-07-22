import React from 'react'
import style from './ImageGrid.module.css';


interface ImageDataOb {
  name?: string;
  description?: string;
  url?: string;
}


const ImageGrid = ({ data = [] }) => {
  return (
    <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 sm:m-4 grid-cols-1 m-4 gap-4'>{
      data.map((dt: ImageDataOb , index) => 
        <div className="card bg-base-100  shadow-xl min-h-full" key={index}>
          <figure>
            <img
              src={dt.url}
              alt={dt.name} />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {dt.name}
            </h2>
            <p>{dt.description}</p>
          </div>
        </div>)
    }</div>
  )
}

export default ImageGrid