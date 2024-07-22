import { ANIMAL_TYPES, CAT_API_KEY } from "../constants/common";

let map = new Map();

interface CatListOB  {
  name ?: string;
  description ?: string;
  url ?: string;
  image ?: {
    url ?: string
  };
  temperament : string
}

export const fetchData = async (URL: string, limit: number = 10, skip: number = 0, animalType : string) => {
  if(animalType == ANIMAL_TYPES.CAT){
    return await fetchCats(URL, limit, skip);
  } else if(animalType == ANIMAL_TYPES.DOG){
    return await fetchDogs(URL, limit, skip);
  }
}


export const fetchCats = async (URL: string, limit: number = 10, skip: number = 0) => {
  try {

    const API_URL = URL;
    let data : CatListOB[] = [];
    let resData: CatListOB[] = [];
    let total : number = 0;


    // checking if data exist in cache.
    // later we can use some memory database like redis here
    if(map.get(API_URL)) {
      data =  map.get(API_URL);
    }
    else {
      // fetch data since it is not available in cache
      const response = await fetch(API_URL, {
        headers : {
          'x-api-key': CAT_API_KEY
        }
      });
      let tmp = await response.json();
      console.log("before" ,data);
      data = tmp.filter((dt : CatListOB)=> dt.image?.url)

      map.set(URL , data);
      console.log("after",data);

    }
    total = data.length;
  
    if(skip > total) {
      return { status : 400 , error : new Error('limit out of reach')}
    }

    data = data.slice(skip , skip+limit)

    for(let i = 0 ; i < data.length; i++){
      let ob : CatListOB = {
        name : data[i].name,
        description: data[i].description,
        url : data[i].image?.url,
        temperament : data[i].temperament
      }
      resData.push(ob);
    }

    return { status : 200 , data : resData , total}
  }
  catch (err) {
    // console.log(err)
    return { status : 500 , error : err};

  }
}

export const fetchDogs = async (URL: string, limit: number = 10, skip: number = 0) => {
  try {

    const API_URL = URL;
    let data : CatListOB[] = [];
    let resData: CatListOB[] = [];
    let total : number = 0;


    // checking if data exist in cache.
    // later we can use some memory database like redis here
    if(map.get(API_URL)) {
      data =  map.get(API_URL);
    }
    else {
      // fetch data since it is not available in cache
      const response = await fetch(API_URL);
      let tmp = await response.json();
      console.log("before" ,data);
      data = tmp.filter((dt : CatListOB)=> dt.image?.url)

      map.set(URL , data);
      console.log("after",data);

    }
    total = data.length;
  
    if(skip > total) {
      return { status : 400 , error : new Error('limit out of reach')}
    }

    data = data.slice(skip , skip+limit)

    for(let i = 0 ; i < data.length; i++){
      let ob : CatListOB = {
        name : data[i].name,
        description: data[i].description,
        url : data[i].image?.url,
        temperament : data[i].temperament
      }
      resData.push(ob);
    }

    return { status : 200 , data : resData , total}
  }
  catch (err) {
    // console.log(err)
    return { status : 500 , error : err};

  }
}