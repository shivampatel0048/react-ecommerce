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
let quaryString = "";

for(let key in filter){
  quaryString += `${key} = ${filter[key]}`
}

  return new Promise(async (resolve) => {
    // TODO: we will not hard-code server url here
    const response = await fetch('http://localhost:8080/products?'+quaryString);
    const data = await response.json();
    resolve(data);
  }
  );
}