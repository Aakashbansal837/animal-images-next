import { CAT_API_KEY } from "../constants/common";

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

export const fetchData = async (URL: string, limit: number = 10, skip: number = 0) => {
  try {

    const API_URL = URL;
    let data : CatListOB[] = [];
    let resData= [];


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
  
    if(skip + limit > data.length) {
      return { status : 400 , error : new Error('limit out of reach')}
    }
    

    for(let i = skip ; i < skip+limit; i++){
      let ob : CatListOB = {
        name : data[i].name,
        description: data[i].description,
        url : data[i].image?.url,
        temperament : data[i].temperament
      }

      resData.push(ob);
    }

    return { status : 200 , data : resData , total : data.length}
  }
  catch (err) {
    // console.log(err)
    return { status : 500 , error : err};

  }
}