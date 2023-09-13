const getPromptNumber = () => {
    const number = prompt('Введіть число');

    if(!number.length || isNaN(Number(number))) {
        alert('Ви ввели некоректне число. Спробуйте еще раз.');
        return getPromptNumber();
    }

    return parseFloat(number);
}

const isPerfectNumber = (number) => {
    if (number <= 1) {
        return false;
    }

    let sum = 1;

    for (let divisor = 2; divisor * divisor <= number; divisor++) {
        if (number % divisor === 0) {
            sum += divisor;

            if (divisor !== number / divisor) {
                sum += number / divisor;
            }
        }
    }

    return sum === number;
}

const findPerfectNumbersHandler = (number) => {
    const perfectNumbers = [];

    for (let i = 1; i <= number; i++) {
        if (isPerfectNumber(i)) {
            perfectNumbers.push(i);
        }
    }

    return perfectNumbers;
}

const number = getPromptNumber();
const perfectNumbers = findPerfectNumbersHandler(number);

console.log(`Досконалі числа в діапазоні від 1 до ${number}:`, perfectNumbers);
