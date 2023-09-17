//Вам необхідно написати функцію reverseString(str), яка приймає на вхід рядок і повертає його у зворотному порядку

const getPromptString = () => {
    const string = prompt('Введіть рядок');

    if(string === null) {
        return;
    }

    if(!string.length) {
        alert('Ви ввели некоректне значення. Спробуйте еще раз.');
        return getPromptString();
    }

    return string;
}

const reverseString = (str) => str.split('').reverse().join('');

const string = getPromptString();

reverseString(string);
console.log('Введений рядок у зворотньому порядку', reverseString(string));

//Вам необхідно написати функцію isPalindrome(str), яка приймає на вхід рядок і перевіряє, чи є введений рядок паліндромом.

// Щоб не дублювати код, можна взяти:
// як введений рядок const string (строка 20)
// для порівння використати ф-цію reverseString (строка 18)
// і порівняти введену строку і результат ф-ції reverseString

const isPalindrome = (str) => str === reverseString(str);
console.log('Чи є введений рядок паліндромом?', isPalindrome(string));
