const getPromptNumber = () => {
    const number = prompt('Введіть число');

    if(number === null) {
        return;
    }

    if(!number.length || isNaN(Number(number))) {
        alert('Ви ввели некоректне число. Спробуйте еще раз.');
        return getPromptNumber();
    }

    return parseFloat(number);
}

const isPrimeNumber = (number) => {
    if (number === 2 || number === 3) {
        return true;
    }

    if (number <= 1 || number % 2 === 0) {
        return false;
    }

    const sqrtNumber = Math.sqrt(number);

    for (let divisor = 3; divisor <= sqrtNumber; divisor += 2) {
        if (number % divisor === 0) {
            return false;
        }
    }

    return true;
}

const number = getPromptNumber();

if(isPrimeNumber(number)) {
    console.log(`Число ${number} є простим числом`);
} else {
    console.log(`Число ${number} не є простим числом`);
}
