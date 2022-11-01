let riddle = {
    question: 'Висит груша нельзя скушать',
    correctAnswer: 'лампочка',
    hints: ['это несъедобное', 'это не фрукт'],
    tries: 3,
    checkAnswer(yourAnswer) {
        if (this.tries) {
            let answer = yourAnswer.toLowerCase();

            if (answer === this.correctAnswer) {
               return console.log(`Ваш ответ: ${yourAnswer}\nПравильный ответ!`);
            }

            if (answer !== this.correctAnswer && this.tries >= 1) {
                --this.tries;
                console.log(`Ваш ответ: ${yourAnswer}\nНеправильный ответ!`);
                return getMsgWithTries.call(this);
            }
        }
    },
}

window.onload = function () {
    document.getElementById('riddle').innerText = riddle.question;
}

function check() {
    let input = document.getElementsByTagName('input')[0];
    let guessedAnswer = input.value;

    if (guessedAnswer) {
        riddle.checkAnswer(guessedAnswer);
        clearInput();
    }

    function clearInput() {
        input.value = null;
    }
}

function getMsgWithTries() {
    if (this.tries === 1) {
        return console.log(`Осталась последняя попытка.`);
    } else if (this.tries === 0) {
        return console.log('Попыток больше не осталось. Игра окончена.');
    }

    return console.log(`Осталось ${this.tries} попытки.`);
}