function avg(numbers) {
    let s = numbers.reduce((prev, curr) => prev + curr, 0);
    return s / numbers.length;
}

function prime(numbers) {

    for(let i=2; i<numbers;i++){
        if(numbers%i==0){
            return false;
        }
    }

    return true;
}


function fact(numbers) {
    if (numbers <= 1) {
        return 1;
    }
    else {
        return numbers * fact(numbers - 1);
    }
}

module.exports = {
    avg,
    prime,
    fact
}
