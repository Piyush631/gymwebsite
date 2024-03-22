 export const exerciseOption={
  method: 'GET',
  url: 'https://exercisedb.p.rapidapi.com/exercises/bodyPartList',
  params: {limit: '10'},
  headers: {
   
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
    'X-RapidAPI-Key': '2639c27cedmshca5528421e9db65p1984f4jsn2d838a8090a0'
  }
};

export const fetchData=async (url,options) =>{
    const response=await fetch(url,options);
    const data=await response.json();
    return data;
}