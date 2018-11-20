const HashUtilities = {
  hashToJson: () => {
    const hashState = new Object;
    window.location.search
      .slice(1,-1)
      .split("&")
      .map(param => param.split("="))
      .forEach(([key,value]) => hashState[key] = value);
    return hashState;
  },
  jsonToHash: (json:Object) => {
    let searchString = "?"
    Object.entries(json)
      .forEach(([key, value]) => {
        searchString+= `${key}=${value}&`
      });
    window.location.search = searchString;
  }
}

export default HashUtilities;
