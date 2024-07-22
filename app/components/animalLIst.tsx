'use client';
import React, { useEffect, useState } from 'react'
import { fetchData } from '../helpers/api.helper';
import ImageGrid from './ImageGrid';


interface AnimalListProps {
  URL : string,
}

const AnimalList: React.FC<AnimalListProps> = ({ URL }) => {
  let [showloading, setShowLoading] = useState(false);
  let [data ,setData] = useState([]);
  let [total , setTotal] = useState(0);

  const fetchCats = async () => {
    setShowLoading(true);
    try {  
      let res : any = await fetchData(URL, 10);

      console.log("[AnimalList]", res);

      if (res.status == 200) {
        setData(res.data);
        setTotal(res.total);
      } else {
        console.error("Error fetching cats:", res.error);
      }
    } catch (err) { 
      console.log("Unexpected error:", err);
    } finally {
      setShowLoading(false);
    }
};

  useEffect(() => {
    fetchCats();
  },[])



  return (
    showloading ?
      <div>Loading ...</div> :
      <div>
        <ul>
          <ImageGrid data={data} />
        </ul>
      </div>
  )
}

export default AnimalList;