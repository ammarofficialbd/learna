export function fetchAllCourses() {
  return new Promise(async (resolve) =>{
    // TODD: we will not hard code server url here
    const response = await fetch('http://localhost:8080/Data') 
    const data = await response.json()
    resolve({data})
    //console.log(data)
  }
  );
}


export function fetchCoursesByFilters(filter) {

  let queryString = '';
  for( let key in filter){
    queryString += `${key}=${filter[key]}`;
    console.log("queryString", queryString);
  }
  return new Promise(async (resolve) =>{
    // TODD: we will not hard code server url here
    const response = await fetch('http://localhost:8080/Data?'+queryString) 
    const data = await response.json()
    resolve({data})
    //console.log(data)
  }
  );
}
