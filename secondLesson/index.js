let mid = (a,b) => {
    return (a+b)/2;
};

let pow = (x,n) => {
    return Math.pow(x,n);
};

let questionFunc = () => {
    let a = +prompt('a?', '');
    switch (a) {
        case 0: alert( 0 );
                break;
        case 1: alert( 1 );
                break;
        case 2:

        case 3: alert( '2,3' );
                     break;
        default: alert( 'not found' );
    }
};

let loopWhile = (a,b) => {
    while (a<=b) {
        if (a%2!==0) console.log(a);
        a++;
    }
};

let loopDoWhile = (a,b) => {
    do {
        if (a % 2 !== 0) console.log(a);
        a++;
    } while (a<=b)
};

let loopFor =(a,b) => {
    for (;a<=b; a++) {
        if (a%2!==0) console.log(a);
    }
};