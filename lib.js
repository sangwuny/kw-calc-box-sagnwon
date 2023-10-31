function avg(numbers) {
    let s = numbers.reduce((prev, curr) => prev + curr, 0);
    return s / numbers.length;
}

function prime(numbers){

    let num = numbers-1;

    while(num!== 1){
        if(numbers % num==0) return false;
        num--;
    }

    return true;
}


function fact(numbers){
    if(numbers === 1) return 1;

    return numbers*fact(numbers-1);
}

module.exports = {
    avg,
    prime,
    fact
}
