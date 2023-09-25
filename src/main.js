// Вам необхідно використовувати масив нотифікацій з минулих занять.
// До отриманого під час групування об'єкта notifications, вам необхідно додати ітератор,
// щоб під час перебору в циклі for of ми отримували кожен елемент із вкладених
// списків об'єкта notifications таким чином, немов працюємо з "плоским" масивом.

const groupCatsBySource = (cats) => {
    const catsBySource = {};

    for (const cat of cats) {
        const { source, name, breed, age } = cat;

        if (!catsBySource[source]) {
            catsBySource[source] = [];
        }

        catsBySource[source].push({ name, breed, age });
    }

    return Object.values(catsBySource).reduce((acc, catGroup) => {
        return acc.concat(catGroup);
    }, []);
}

const cats = [
    { source: 'Приют', name: 'Мурчик', breed: 'Персидська', age: 2 },
    { source: 'Вулиця', name: 'Барсик', breed: 'Невідома', age: 3 },
    { source: 'Приют', name: 'Вася', breed: 'Сіамська', age: 1 },
    { source: 'Друг', name: 'Мурка', breed: 'Британська', age: 4 },
    { source: 'Друг', name: 'Рижик', breed: 'Невідома', age: 2 },
    { source: 'Приют', name: 'Сімка', breed: 'Персидська', age: 3 },
    { source: 'Вулиця', name: 'Том', breed: 'Невідома', age: 1 },
    { source: 'Приют', name: 'Міша', breed: 'Британська', age: 5 },
    { source: 'Друг', name: 'Лізка', breed: 'Сіамська', age: 2 },
    { source: 'Приют', name: 'Вовка', breed: 'Британська', age: 4 },
    { source: 'Вулиця', name: 'Леопольд', breed: 'Сіамська', age: 3 },
    { source: 'Приют', name: 'Ромка', breed: 'Персидська', age: 2 },
];

const allCats = groupCatsBySource(cats);
console.log('Усі котики, згруповані за джерелом, з якого отримали котика: ', allCats);

// Вам необхідно реалізувати функцію memoize(fn), яка приймає вхід функцію і додає їй можливість
// кешування результатів виконання, щоб уникнути повторних обчислень. Це означає, що в разі,
// коли функція викликається з однаковими параметрами, то результат необхідно брати з кешу.
//(Тільки примітиви у параметрах та використовуйте Map)

const memoize = (fn) => {
    const cache = new Map();

    return function (...args) {
        const key = JSON.stringify(args);

        if (cache.has(key)) {
            return cache.get(key);
        } else {
            const result = fn(...args);
            cache.set(key, result);
            return result;
        }
    };
}

function processCats(cats) {
    console.log('Обробка котиків...');
    return cats.length;
}

const memoizedProcessCats = memoize(processCats);

const cats1 = [{ name: 'Мурчик', age: 3 }, { name: 'Барсик', age: 2 }];
const cats2 = [{ name: 'Вася', age: 1 }, { name: 'Мурка', age: 4 }];

console.log(memoizedProcessCats(cats1)); // Обробка котиків...
console.log(memoizedProcessCats(cats1)); // Результат взятий з кешу
console.log(memoizedProcessCats(cats2)); // Обробка котиків...
console.log(memoizedProcessCats(cats2)); // Результат взятий з кешу
