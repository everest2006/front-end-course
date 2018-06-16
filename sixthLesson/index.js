const array = [[1,2,3], true, null, 123, {"a": "b","c": "d","e": "f"}];
let tryToParseJSON = (array) => {
    return array.map(item => {
        try {
            return JSON.stringify(item);
        } catch (err) {
            return err;
        }
    })
};

setTimeout(tryToParseJSON,500,array);