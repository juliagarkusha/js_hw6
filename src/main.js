// Вам необхідно написати функцію, яка приймає на вхід масив чисел
// і повертає новий масив, що містить тільки ті числа, які є простими числами.

const isPrime = (number) => {
    if (number <= 1) {
        return false;
    }

    if (number <= 3) {
        return true;
    }

    if (number % 2 === 0 || number % 3 === 0) {
        return false;
    }

    for (let i = 5; i * i <= number; i += 6) {
        if (number % i === 0 || number % (i + 2) === 0) {
            return false;
        }
    }

    return true;
}

const getPrimes = (array) => array.filter(isPrime);

const numbers = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
const primeNumbers = getPrimes(numbers);
console.log(`Массив простих чисел: ${primeNumbers}`);

// Вам необхідно написати функцію, яка приймає на вхід масив об'єктів, де кожен об'єкт описує
// сповіщення та має поля source / text / date. Вам необхідно перетворити цей масив на об'єкт,
// де ключем буде джерело сповіщення, а значенням - масив сповіщень із цього джерела.

const groupCatsBySource = (cats) => {
    const catsBySource = {};

    for (const cat of cats) {
        const { source, name, breed, age } = cat;

        if (!catsBySource[source]) {
            catsBySource[source] = [];
        }

        catsBySource[source].push({ name, breed, age });
    }

    return catsBySource;
}

const cats = [
    { source: 'Приют', name: 'Мурчик', breed: 'Персидська', age: 2 },
    { source: 'Вулиця', name: 'Барсик', breed: 'Невідома', age: 3 },
    { source: 'Приют', name: 'Вася', breed: 'Сіамська', age: 1 },
    { source: 'Друг', name: 'Мурка', breed: 'Британська', age: 4 },
];

const groupedCats = groupCatsBySource(cats);
console.log('Котики, згруповані за джерелом, з якого отримали котика: ', groupedCats);

// Вам необхідно написати функцію, яка приймає на вхід масив і повністю повторює поведінку методу масиву group (якби він був)

const groupBy = (arr, keyFn) => {
    return arr.reduce((acc, item) => {
        const key = keyFn(item);

        if (!acc[key]) {
            acc[key] = [];
        }

        acc[key].push(item);

        return acc;
    }, {});
}

const catsArray = [
    { name: 'Мурчик', breed: 'Персидська', color: 'сірий' },
    { name: 'Барсик', breed: 'Невідома', color: 'чорний' },
    { name: 'Вася', breed: 'Сіамська', color: 'коричневий' },
    { name: 'Мурка', breed: 'Британська', color: 'білий' },
    { name: 'Леопольд', breed: 'Сіамська', color: 'коричневий' },
    { name: 'Ромка', breed: 'Персидська', color: 'чорний' },
    { name: 'Міша', breed: 'Британська', color: 'сірий' },
    { name: 'Том', breed: 'Невідома', color: 'рожевий' },
    { name: 'Сімка', breed: 'Персидська', color: 'білий' },
    { name: 'Вовка', breed: 'Британська', color: 'чорний' },
    { name: 'Рижик', breed: 'Невідома', color: 'рудий' },
    { name: 'Лізка', breed: 'Сіамська', color: 'коричневий' },
];

const groupedByBreed = groupBy(catsArray, cat => cat.breed);
console.log('Котики, згруповані за породами: ', groupedByBreed);
