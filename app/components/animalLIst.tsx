'use client';
import React, { useEffect, useState, useCallback } from 'react'
import { fetchData , fetchCatsByCategory } from '../helpers/api.helper';
import ImageGrid from './ImageGrid';
import logger from '../helpers/logger';
import Navbar from './Navbar';
import { debounce } from '../helpers/utils';

interface AnimalListProps {
  URL : string,
  animalType : string
}

const AnimalList: React.FC<AnimalListProps> = ({ URL , animalType }) => {
  let [showloading, setShowLoading] = useState(false);
  let [data ,setData] = useState([]);
  let [total , setTotal] = useState(0);
  let [currPage , setCurrPage] = useState(0);
  let [error , setError] = useState(false);
  let [filter, setFilter] = useState('');

  const fetchAmimals = async () => {
    setShowLoading(true);
    setError(false);
    try {  
      let res : any = await fetchData(URL, 10, currPage*10 , animalType);

      logger.info("[AnimalList]", res);

      if (res.status == 200) {
        setData(res.data);
        setTotal(res.total);
      } else {
        setError(true);
        logger.error("Error fetching cats:", res.error);
      }
    } catch (err) { 
      setError(true);
      logger.error("Unexpected error:", err);
    } finally {
      setShowLoading(false);
    }
};

const fetchAmimalsByCategory = async () => {
  setShowLoading(true);
  setError(false);
  try {  
    let res : any = await fetchCatsByCategory(10, currPage*10 , filter.substring(0,4));

    logger.info("[fetchAmimalsByCategory] res", res);

    if (res.status == 200) {
      setData(res.data);
      setTotal(res.total);
    } else {
      setError(true);
      logger.error("[fetchAmimalsByCategory] Error fetching cats:", res.error);
    }
  } catch (err) { 
    setError(true);
    logger.error("[fetchAmimalsByCategory] Unexpected error:", err);
  } finally {
    setShowLoading(false);
  }
};

  useEffect(() => {
    if(filter.length > 0) {
      fetchAmimalsByCategory();
    } else {
      fetchAmimals();
    }
  },[currPage])

  useEffect(() => {
    if(filter.length > 0) {
      fetchAmimalsByCategory();
    } else {
      fetchAmimals();
    }
  },[filter])


  const handleSearch = async (searchString : string) => {
    console.log('working', searchString)
    setFilter(searchString)
  }

  const debouncedSave = debounce((input: string) => handleSearch(input), 500);

  return (
      <div>
        <Navbar showSearch={true} doSearch={debouncedSave} />
        <hr />
        {
          showloading ?
          <div className='flex items-center justify-center h-screen'>Loading ...</div> :
          error ? <div className='flex items-center justify-center h-screen' > No Data Found </div> :
        <>
          <ul>
            <ImageGrid data={data} />
          </ul>
          <hr className='h-4' />
          <div className='flex justify-around max-w-full'>
            <button onClick={() => setCurrPage((prev) => prev-1)} className='btn btn-square text-2xl w-40 btn-accent' disabled={currPage == 0}> prev</button>
            <span className='text-3xl'>{currPage+1}</span>
            <button onClick={() => setCurrPage((prev) => prev+1)} className='btn btn-square text-2xl w-40 btn-accent mb-10' disabled={currPage * 10 + 10 > total}> next</button>
          </div>
        </>
        }
      </div>
  )
}

export default AnimalList;