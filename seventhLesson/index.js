let mul = (value) => {
    let result = value;
    return function next(value) {
        if (value) {
            result *= value;
            return next;
        }
        return result;
    }
};

let sumStringArgs = (...values) => {
    let result = {
        count: 0,
        errStrings: []
    };
    values.map( (value) => {
        parseInt(value) ? result.count+=parseInt(value) : result.errStrings.push(value)
    });
    return result;
};

