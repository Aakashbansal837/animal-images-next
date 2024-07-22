'use client';
import Navbar from '../components/Navbar';
import { ANIMAL_TYPES, DOG_API_URL } from '../constants/common';

const DogsPage = () => {
  //  add additional functionality later on
  return (
    <div className='h-screen m-0 overflow-hidden'>
    <Navbar />
    <div className='h-full text-4xl flex justify-center items-center'>
      
      This content will be available in future versions.
      {/* <AnimalList animalType={ANIMAL_TYPES.DOG} URL={DOG_API_URL} /> */}
      
      </div>
    </div>
  )
}

export default DogsPage