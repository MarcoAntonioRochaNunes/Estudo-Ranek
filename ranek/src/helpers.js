export function serialize(objeto) {
  let queryString = "";

  for(let key in objeto){
    queryString += `&${key}=${objeto[key]}`
  }
  return queryString
}