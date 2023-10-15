export function fetchAllProducts() {
  return new Promise(async (resolve) => {
    // TODO: we will not hard-code server url here
    const response = await fetch('http://localhost:8080/products');
    const data = await response.json();
    resolve(data);
  }
  );
}

export function fetchAllProductsByFilters(filter) {
  //filter = {"category": "smartphone"}
  // TODO: on server we will support multi values
  let queryString = "";

  for (let key in filter) {
    queryString += `${key}=${filter[key]}&`
  }
  console.log(queryString);

  return new Promise(async (resolve) => {
    // TODO: we will not hard-code server url here
    const response = await fetch('http://localhost:8080/products?' + queryString);
    const data = await response.json();
    resolve(data);
  }
  );
}