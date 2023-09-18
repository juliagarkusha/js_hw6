// Вам необхідно написати функцію doubleLetter(str),
// яка приймає на вхід рядок і повертає новий рядок,
// у якому кожен символ повторюється двічі hello ⇒ hheelllloo

const string = prompt('Enter string');

const doubleLetter = (str) => {
    let chars = str.split('');
    let doubledChars = chars.map(char => char + char);

    return doubledChars.join('');
}

console.log(`Ось новий рядок, в якому кожен введений символ повторюється двічі: ${doubleLetter(string)}`);
