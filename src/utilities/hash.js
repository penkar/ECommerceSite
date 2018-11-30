const hashToJson = () => {
  const hashState = new Object;
  window.location.hash
    .slice(1,-1)
    .split("&")
    .map(param => param.split("="))
    .forEach(([key,value]) => hashState[key] = value);
  return hashState;
}
const jsonToHash = (json:Object) => {
  const currentURL = hashToJson(), searchString = [];
  Object.entries(json).forEach(([key, value]) => {
    searchString.push(`${key}=${value}`);
  });
  return `#${searchString.join("&")}`;
}

const HashUtilities = {
  hashToJson,
  jsonToHash
}

export default HashUtilities;
