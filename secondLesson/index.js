let mid = (a,b) => {
    return (a+b)/2;
};

let pow = (x,n) => {
    return Math.pow(x,n);
};

let questionFunc = (a) => {
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

