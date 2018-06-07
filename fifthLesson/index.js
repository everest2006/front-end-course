const middleAgeBySex = (infoArray, sex) => {
    let currentArray = infoArray.filter(item=>item.sex===sex);
    return currentArray.reduce((sum, current)=>sum+current.age,0) / currentArray.length;
};