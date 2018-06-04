let isInArray = (arr, el) => {
    return arr.some(value=>value===el);
};

let modifyArr = (arr, el, newEl) => {
  return arr.some(value=>value===el) ? arr.map( value => value === el?newEl:value) : `element ${el} not found in array [${arr}]`
};

let transformString = (str, el, newEl) => {
  return str.toLowerCase().indexOf(el.toLowerCase())!==-1 ? str.replace(new RegExp(el, 'gi'), newEl) : `element ${el} not found in string ${str}`;
};

