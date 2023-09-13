const getPromptNumber = () => {
    const number = prompt('Введіть число, яке буде висотою ялинки');

    if(number === null) {
        return;
    }

    if(!number.length || isNaN(Number(number))) {
        alert('Ви ввели некоректне число. Спробуйте еще раз.');
        return getPromptNumber();
    }

    return parseFloat(number);
}

const drawChristmasTreeHandler = (height, currentHeight = 1) => {
    if (currentHeight > height) {
        return '';
    }
    const spaces = ' '.repeat(height - currentHeight);
    const stars = '*'.repeat(2 * currentHeight - 1);
    const nextLine = drawChristmasTreeHandler(height, currentHeight + 1);

    return spaces + stars + '\n' + nextLine;
}

const drawChristmasTreeViewHandler = () => {
    const drawChristmasTreeHeight = getPromptNumber();

    if(!drawChristmasTreeHeight) {
        return;
    }

    alert(drawChristmasTreeHandler(drawChristmasTreeHeight));
}

drawChristmasTreeViewHandler();
