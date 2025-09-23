function check (num) {

    if (typeof num !== 'number') return NaN

    if (num % 3 === 0 && num % 5 === 0) return 'FizzBuzz'

    if (num % 3 === 0) return 'Fizz'

    if (num % 5 === 0) return 'Buzz'

    return num
}


console.log('a', check('a'))
for (let i = 0; i <= 100; i++) {
    console.log(i, check(i))
}