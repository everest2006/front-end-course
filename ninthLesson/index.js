let getElementsById =(id)=>{
  return [...new Set([...document.querySelectorAll(`#${id}`)].map((item)=>{return item.tagName}))];
};

let whichMouseButtonPressed = (event) => {
    switch (event.which) {
        case 1:
            return 'left mouse button';
            break;
        case 2:
            return 'middle mouse button';
            break;
        case 3:
            return 'right mouse button';
            break;
    }
};

let getElementsById1 =(id)=>{
    return new Promise((resolve, reject)=>{
       try{
           resolve([...new Set([...document.querySelectorAll(`#${id}`)].map((item)=>{return item.tagName}))]);
       }catch(err) {
           reject(err);
       }

    })
};