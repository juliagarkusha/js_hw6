// Вам необхідно написати функцію camelCase(str, separator),
// яка приймає на вхід рядок і перетворює його до формату «camelCase»

const string = 'приклад_рядку_з_роздільником';
const separator = '_';

const camelCase = (str, separator) => {
    const words = str.split(separator).map((word, index) => {
        if (index !== 0) {
            return word.charAt(0).toUpperCase() + word.slice(1);
        }
        return word;
    });

    return words.join('');
}

const result = camelCase(string, separator);

console.log(result);
