export function fetchAllBooks() {
  return new Promise(async (resolve) =>{
    // TODD: we will not hard code server url here
    const response = await fetch('http://localhost:8080/Data') 
    const data = await response.json()
    resolve({data})
    //console.log(data)
  }
  );
}
