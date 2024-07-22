import AnimalList from '../components/animalLIst';
import { ANIMAL_TYPES, CAT_LIST_URL } from '../constants/common';

const CatsPage = async () => {

  //  add additional functionality later on
  return (
    <div className=' h-screen m-0'><AnimalList animalType={ANIMAL_TYPES.CAT} URL={CAT_LIST_URL} /></div>
  )
}

export default CatsPage