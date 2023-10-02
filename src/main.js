// Вам необхідно написати функцію summarize(num), яка приймає на вхід число і повертає функцію,
// яка під час виклику додає це число до аргументу і повертає результат.
// Якщо аргумент не передано, то додається одиниця.
// Наприклад, якщо функція викликається з аргументом 5, то функція, що повертається,
// повинна при виклику з аргументом 3 повернути 8 (тому що 3 + 5 = 8) або 6, якщо аргумент не буде передано.

/**
 *
 * @param num
 * @returns {function(x: number): number}
 */
const summarize = (num) => (x = 1) => x + num;

console.log('debug : ', summarize(5)(3)); // Виведе 8 (3 + 5)
console.log('debug : ', summarize(5)()); // Виведе 6 (5 + 1)

// Вам необхідно написати функцію counter(startValue, step), яка приймає на вхід два параметри -
// стартове значення лічильника і його крок. Функція повертає нову функцію,
// яка при кожному виклику збільшує лічильник на значення і повертає його поточне значення.
// Лічильник повинен мати методи increment, decrement і reset,
// які збільшують або зменшують значення на step і скидають значення до стартового, відповідно.

const counter = (startValue, step) => {
    let currentValue = startValue;

    const event = () => {
        currentValue += step;
        return currentValue;
    };

    event.increment = () => {
        currentValue += step;
        return currentValue;
    };

    event.decrement = () => {
        currentValue -= step;
        return currentValue;
    };

    event.reset = () => {
        currentValue = startValue;
        return currentValue;
    };

    return event;
}

const myCounter = counter(0, 1); // Початкове значення - 0, крок - 1
console.log(myCounter()); // 1
console.log(myCounter()); // 2
console.log(myCounter()); // 3
console.log(myCounter()); // 4
console.log(myCounter()); // 5
console.log(myCounter.decrement()); // 4
console.log(myCounter.reset());     // Повертає 0
