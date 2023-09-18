// Вам необхідно написати функцію padString(str, length, symbol, toLeft),
// яка приймає на вхід рядок, число, що є довгим рядком, який ми хочемо
// отримати в результаті та символ, яким доповниться рядок, якщо це буде
// потрібно, четвертим параметром є буремний «прапор», чи додавати символи
// зліва або справа(за замовчуванням). Якщо 2 параметр менше, ніж довжина
// вихідного рядка, то виводимо вихідний рядок без змін. Приклад виклику:
// padString('Ivan', 6, '*') // 'Ivan**'.

const string = prompt('Введіть рядок');
const number = Number(prompt('Введіть число'));
const symbol = prompt('Введіть символ');

const padString = (str, length, symbol, toLeft = false) => {
    if (toLeft) {
        while (str.length < length) {
            str = symbol + str;
        }
    } else {
        while (str.length < length) {
            str = str + symbol;
        }
    }

    return str;
}

const result = padString(string, number, symbol);

console.log(result);
