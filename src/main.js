//Напишіть функцію capitalizeStrings, яка приймає на вхід масив рядків і повертає новий масив,
// у якому кожен рядок має першу літеру у верхньому регістрі, а решту літер - у нижньому регістрі.

const words = ["apple", "banaNA", "kiWi", "ORANGE"];

const capitalizeStrings = (wordArr) => wordArr.map((wordItem) => {
    return wordItem.charAt(0).toUpperCase() + wordItem.slice(1).toLowerCase();
});

console.log(capitalizeStrings(words)); // ["Apple", "Banana", "Kiwi", "Orange"]

// Напишіть функцію findCommonElements, яка приймає на вхід два масиви і
// повертає новий масив, що містить елементи, які є в обох вихідних масивах.

const array1 = [1, 2, 3, 4, 5];
const array2 = [3, 4, 5, 6, 7];

const findCommonElements = (array1, array2) => array1.filter(arrayItem => array2.includes(arrayItem));

console.log(findCommonElements(array1, array2)); // [3, 4, 5]

// Напишіть функцію analyzeArray, яка приймає на вхід масив чисел і повертає об'єкт з такими властивостями:
// sum - сума всіх елементів масиву
// average - середнє значення елементів масиву
// min - мінімальне значення в масиві
// max - максимальне значення в масиві

const numbers = [1, 2, 3, 4, 5];

const analyzeArray = (numbers) => {
    if (numbers.length === 0) {
        return {
            sum: 0,
            average: 0,
            min: undefined,
            max: undefined
        };
    }

    const sum = numbers.reduce((acc, num) => acc + num, 0);
    const average = sum / numbers.length;
    const min = Math.min(...numbers);
    const max = Math.max(...numbers);

    return { sum, average, min, max };
}

console.log(analyzeArray(numbers)); // { sum: 15, average: 3, min: 1, max: 5 }
