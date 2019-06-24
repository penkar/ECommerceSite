const hashToJson = ():Object => {
  const hashState = {};
  const hash = window.location.hash;
  hash.slice(1, hash.length)
    .split("&")
    .map(param => param.split("="))
    .forEach(([key,value]) => hashState[key] = value);
  return hashState;
}
const jsonToHash = (json:Object):string => {
  const currentURL = hashToJson(), searchString = [];
  Object.entries(json).forEach(([key, value]) => {
    searchString.push(`${key}=${value}`);
  });
  return `#${searchString.join("&")}`;
}

const HashUtilities = {
  hashToJson,
  jsonToHash,
}

export default HashUtilities;
