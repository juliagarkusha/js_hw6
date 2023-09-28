// logArguments
// Вам необхідно написати функцію-декоратор logArguments(fn), яка приймає на вхід функцію
// і додає можливість логувати всі аргументи, передані у функцію-аргумент.

function logArguments(fn) {
    return function (...args) {
        console.log("Arguments:", args);
        return fn(...args);
    };
}

function feedCat(catName, food) {
    console.log(`${catName} їсть ${food}`);
}

const loggedFeedCat = logArguments(feedCat);

// Викликаємо функцію з логуванням аргументів
loggedFeedCat("Сімона", "паштет"); // "Arguments: ["Сімона", "паштет"]" і "Сімона їсть паштет"

// validate
// Вам необхідно написати функцію-декоратор validate(fn, validator), яка приймає на вхід функцію
// і додає можливість перевіряти аргументи, передані у функцію fn, на відповідність заданому validator.
// Якщо аргументи не проходять перевірку, то декоратор має викидати виняток.

function validate(fn, validator) {
    return function (...args) {
        for (const arg of args) {
            if (!validator(arg)) {
                throw new Error(`Invalid argument: ${arg}`);
            }
        }
        return fn(...args);
    };
}

function isCat(cat) {
    return cat && typeof cat === 'object' && cat.hasOwnProperty('name') && typeof cat.name === 'string';
}

// Приклад функції для роботи з котиками
function petCat(cat) {
    console.log(`Ваш котик - ${cat.name}!`);
}

// Застосовуємо декоратор до функції petCat
const validatedPetCat = validate(petCat, isCat);

// Приклади використання
const validCat = { name: 'Сімона' };
const invalidCat = { age: 3 };

validatedPetCat(validCat);
validatedPetCat(invalidCat);
