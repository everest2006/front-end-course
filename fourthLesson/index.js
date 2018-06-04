let isInArray = (arr, el) => {
    return arr.some(value=>value===el);
};

let modifyArr = (arr, el, newEl) => {
  return arr.some(value=>value===el) ? arr.map( value => value === el?newEl:value) : `element ${el} not found in array [${arr}]`
};


