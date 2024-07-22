import React, { useState } from 'react';
import AnimalList from '../components/animalLIst';
import { CAT_LIST_URL } from '../constants/common';

const CatsPage = async () => {

  //  add additional functionality later on
  return (
    <div className='max-h-full m-0'><AnimalList URL={CAT_LIST_URL} /></div>
  )
}

export default CatsPage