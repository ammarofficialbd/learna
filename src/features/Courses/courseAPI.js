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


export function fetchCoursesByFilters(filter, pagination) {
//paagination = {_page:1, _limit:10} //server : _page=1&,_limit=10
  let queryString = '';
  for( let key in filter){
    queryString += `${key}=${filter[key]}`;
    console.log(queryString);
  }
   for( let key in pagination){
    queryString += `${key}=${pagination[key]}`;
    //console.log("queryString", queryString);
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
