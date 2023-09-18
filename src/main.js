//Вам необхідно написати функцію findGCD(a, b), яка приймає на вхід два числа і повертає їхній НСД

const numberA = Number(prompt('Enter operand A'));
const numberB = Number(prompt('Enter operand B'));

const findGCD = (a, b) => {
    while (b !== 0) {
        const temp = b;
        b = a % b;
        a = temp;
    }

    return a;
}

console.log(`НСД для чисел ${numberA} та ${numberB} є число: ${findGCD(numberA, numberB)}`);

