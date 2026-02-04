console.log("Привет, мир!");

for (let i = 1; i <= 5; i++) {
    console.log("Число:", i);
}

for (let i = 7; i <= 22; i++) {
    console.log("Счет:", i);
}

const salaries = {
    "Коля": '200',
    "Вася": '300', 
    "Петя": '400'
};

for (const name in salaries) {
    console.log(name + " — зарплата " + salaries[name] + " долларов");
}

let number = 1000;
let count = 0;

while (number >= 50) {
    number = number / 2;
    count = count + 1;
}

console.log("Итоговое число:", number);
console.log("Сколько раз делили:", count);

const firstFridayDay = 5;
const totalDays = 31;

for (let day = firstFridayDay; day <= totalDays; day = day + 7) {
    console.log("Сегодня пятница, " + day + "-е число. Необходимо подготовить отчет.");
}

function getMinNumber(a, b) {
    if (a < b) {
        return a;
    } else {
        return b;
    }
}

function checkIfEvenOrOdd(number) {
    if (number % 2 === 0) {
        return 'Число четное';
    } else {
        return 'Число нечетное';
    }
}

function showSquare(number) {
    const square = number * number;
    console.log("Квадрат числа " + number + " равен " + square);
}

function calculateSquare(number) {
    return number * number;
 }

function checkUserAge() {
    const answer = prompt("Сколько вам лет?");
    
    if (answer === null) {
        return "Вы отменили ввод";
    }
    
    const age = Number(answer);
    
    if (isNaN(age) || age < 0) {
        return "Вы ввели неправильное значение";
    } else if (age >= 0 && age <= 12) {
        return "Привет, друг!";
    } else {
        return "Добро пожаловать!";
    }
}

function multiplyTwoNumbers(a, b) {
    const firstNumber = Number(a);
    const secondNumber = Number(b);
    
    if (isNaN(firstNumber) || isNaN(secondNumber)) {
        return "Одно или оба значения не являются числом";
    } else {
        return firstNumber * secondNumber;
    }
}

function calculateCubeNumber() {
    const input = prompt("Введите число для возведения в куб:");
    
    if (input === null) {
        return "Вы отменили ввод";
    }
    
    const number = Number(input);
    
    if (isNaN(number)) {
        return "Переданный параметр не является числом";
    } else {
        const cube = number * number * number;
        return number + " в кубе равняется " + cube;
    }
}

const circleOne = {
    radius: 5,
    getArea: function() {
        return Math.PI * this.radius * this.radius;
    },
    getPerimeter: function() {
        return 2 * Math.PI * this.radius;
    }
};

const circleTwo = {
    radius: 10,
    getArea: function() {
        return Math.PI * this.radius * this.radius;
    },
    getPerimeter: function() {
        return 2 * Math.PI * this.radius;
    }
};

console.log("\nТест функций");
console.log("Меньшее из 5 и 10:", getMinNumber(5, 10));
console.log("Проверка числа 7:", checkIfEvenOrOdd(7));
showSquare(4);
console.log("Квадрат 6:", calculateSquare(6));
console.log("Площадь круга радиусом 5:", circleOne.getArea().toFixed(2));
console.log("Периметр круга радиусом 10:", circleTwo.getPerimeter().toFixed(2));

// Угадай число 
function guessNumberGame() {
    const secretNumber = Math.floor(Math.random() * 100) + 1;
    let attempts = 0;
    let guess;
    
    alert("Добро пожаловать в игру 'Угадай число'!\nЯ загадал число от 1 до 100. Попробуй угадать!");
    
    do {
        guess = prompt("Введите ваше предположение (от 1 до 100):");
        
        if (guess === null) {
            alert("Игра завершена. Было загадано число: " + secretNumber);
            return;
        }
        
        const guessNumber = Number(guess);
        
        if (isNaN(guessNumber) || guessNumber < 1 || guessNumber > 100) {
            alert("Пожалуйста, введите число от 1 до 100!");
            continue;
        }
        
        attempts++;
        
        if (guessNumber < secretNumber) {
            alert("Загаданное число БОЛЬШЕ!");
        } else if (guessNumber > secretNumber) {
            alert("Загаданное число МЕНЬШЕ!");
        } else {
            alert(`Поздравляю! Вы угадали число ${secretNumber} за ${attempts} попыток!`);
            return;
        }
        
    } while (true);
}
// Матека 
function mathGame() {
    alert(`Добро пожаловать в игру "математика"!\nПройдите несколько простых задач.`);
    
    let correctAnswers = 0;
    
    for (let i = 0; i < 3; i++) {
        const num1 = Math.floor(Math.random() * 10) + 1;
        const num2 = Math.floor(Math.random() * 10) + 1;
        
        const operation = Math.random() > 0.5 ? '+' : '-'
        
        let problem = '';
        let correctAnswer = 0;
        
        if (operation === '+') {
            problem = `${num1} + ${num2}`;
            correctAnswer = num1 + num2;
        } else {
            const larger = Math.max(num1, num2);
            const smaller = Math.min(num1, num2);
            if (larger === smaller) {
                problem = `${larger + 1} - ${smaller}`;
                correctAnswer = 1;
            } else {
                problem = `${larger} - ${smaller}`;
                correctAnswer = larger - smaller;
            }
        }
        
        const userAnswer = prompt(`Задача ${i + 1}: ${problem} = ?`);
        
        if (userAnswer === null) {
            alert("Игра остановлена");
            return;
        }
        
        if (userAnswer.trim() === "") {
            alert("Вы не ввели ответ! Попробуйте еще раз.");
            i--;
            continue;
        }
        
        // проверка на число
        const userAnswerNumber = Number(userAnswer);
        if (isNaN(userAnswerNumber)) {
            alert("Пожалуйста, введите число!");
            i--;
            continue;
        }
        
        if (userAnswerNumber == correctAnswer) {
            alert(" Правильно!");
            correctAnswers++;
        } else {
            alert(` Неправильно. Правильный ответ: ${correctAnswer}`);
        }
    }
    
    alert(` Игра окончена! Вы решили правильно ${correctAnswers} из 3 задач.`);
}

// Переверни
function reverseTextGame() {
    const userInput = prompt("Введите текст для переворота:");
    
    if (userInput === null) {
        alert("Игра отменена");
        return;
    }
    
    if (userInput.trim() === "") {
        alert("Вы ввели пустую строку!");
        return;
    }
    
    const reversedText = userInput.split('').reverse().join('');
    alert(`Перевернутый текст: ${reversedText}`);
}

// Камень ножницы бумага 
function rockPaperScissorsGame() {
    const choices = ["камень", "ножницы", "бумага"];
    
    let userChoice;
    let isValidChoice = false;
    
    do {
        userChoice = prompt("Выберите: камень, ножницы или бумага?");
        
        if (userChoice === null) {
            alert("Игра отменена!");
            return;
        }
        
        userChoice = userChoice.toLowerCase().trim();
        
        if (choices.includes(userChoice)) {
            isValidChoice = true;
        } else {
            alert("Пожалуйста, выберите только: камень, ножницы или бумага!");
        }
    } while (!isValidChoice);
    

    const randomIndex = Math.floor(Math.random() * choices.length);
    const computerChoice = choices[randomIndex];
    
    alert(`Ваш выбор: ${userChoice}\nВыбор компьютера: ${computerChoice}`);
    
    let resultMessage;
    
    if (userChoice === computerChoice) {
        resultMessage = "Ничья!";
    } else if (
        (userChoice === "камень" && computerChoice === "ножницы") ||
        (userChoice === "ножницы" && computerChoice === "бумага") ||
        (userChoice === "бумага" && computerChoice === "камень")
    ) {
        resultMessage = "Вы победили! ";
    } else {

        resultMessage = "Компьютер победил!";
    }

    alert(resultMessage);
    
    console.log("=== ИГРА 'КАМЕНЬ, НОЖНИЦЫ, БУМАГА' ===");
    console.log("Выбор пользователя:", userChoice);
    console.log("Выбор компьютера:", computerChoice);
    console.log("Результат:", resultMessage);
    console.log("================================");
}

// Викторина
function quizGame() {
    const quiz = [
        {
            question: "Какой цвет небо?",
            options: ["1. Красный", "2. Синий", "3. Зеленый"],
            correctAnswer: 2 
        },
        {
            question: "Сколько дней в неделе?",
            options: ["1. Шесть", "2. Семь", "3. Восемь"],
            correctAnswer: 2
        },
        {
            question: "Сколько у человека пальцев на одной руке?",
            options: ["1. Четыре", "2. Пять", "3. Шесть"],
            correctAnswer: 2
        }
    ];
    
    let correctAnswers = 0;
    
    for (let i = 0; i < quiz.length; i++) {
        const currentQuestion = quiz[i];
        
        let questionText = `Вопрос ${i + 1}: ${currentQuestion.question}\n`;
        for (let j = 0; j < currentQuestion.options.length; j++) {
            questionText += currentQuestion.options[j] + "\n";
        }
        questionText += "\nВведите номер правильного ответа:";
        
        const userAnswer = prompt(questionText);
        
        if (userAnswer === null) {
            alert("Викторина прервана");
            return;
        }
        
        const answerNumber = parseInt(userAnswer);
        
        if (answerNumber === currentQuestion.correctAnswer) {
            correctAnswers++;
        }
    }
    
    // о результат
    alert(`Викторина завершена!\nКоличество правильных ответов: ${correctAnswers} из ${quiz.length}`);
}


console.log("\n\n10 НОВЫХ ЗАДАНИЙ");

// 1 
console.log("\nзадание 1 ");
const people = [
   { name: 'Глеб', age: 29 },
   { name: 'Анна', age: 17 },
   { name: 'Олег', age: 7 },
   { name: 'Оксана', age: 47 }
];

console.log(people.sort((a, b) => a.age - b.age));
console.log("Отсортированный массив людей по возрасту:");
people.sort((a, b) => a.age - b.age).forEach(person => {
    console.log(`${person.name}: ${person.age} лет`);
});

// 2
console.log("\nзадание 2 ");

function isPositive(number) {
    return number > 0;
}

function isMale(person) {
    return person.gender === 'male';
}

function filter(arr, ruleFunction) {
    const result = [];

    for (let i = 0; i < arr.length; i++) {
        if (ruleFunction(arr[i])) {
            result.push(arr[i]);
        }
    }

    return result;
}

console.log("Положительные числа из [3, -4, 1, 9]:");
console.log(filter([3, -4, 1, 9], isPositive));

const people2 = [
   {name: 'Глеб', gender: 'male'},
   {name: 'Анна', gender: 'female'},
   {name: 'Олег', gender: 'male'},
   {name: 'Оксана', gender: 'female'}
];

console.log("\nМужчины из массива людей:");
console.log(filter(people2, isMale));

// 3 
console.log("\nзадание 3 ");

function showCurrentDate() {
    const now = new Date();
    console.log(`Текущая дата: ${now.toLocaleString()}`);
}

function dateTimer() {
    console.log("Запуск таймера (30 секунд)...");
    let secondsPassed = 0;
    
    const intervalId = setInterval(() => {
        showCurrentDate();
        secondsPassed += 3;
        
        if (secondsPassed >= 30) {
            clearInterval(intervalId);
            console.log("30 секунд прошло");
        }
    }, 3000);
}
// 4 
console.log("\nзадание 4 ");

function delayForSecond(callback) {
    setTimeout(() => {
        callback();
    }, 1000);
}

delayForSecond(function () {
   console.log('Привет, Глеб!');
});

// 5
console.log("\nзадание 5 ");

function delayForSecond2(cb) {
    setTimeout(() => {
        console.log('Прошла одна секунда');
        if(cb) { cb(); }
    }, 1000);
}

function sayHi(name) {
    console.log(`Привет, ${name}!`);
}

delayForSecond2(() => sayHi('Глеб'));

console.log("\nвсе задания выполнены");

document.addEventListener('DOMContentLoaded', function() {
    console.log(" Сайт загружен! Привязываем игры к кнопкам...");
    
    const gameButtons = document.querySelectorAll('.game-detail__button');
    console.log(`Найдено кнопок: ${gameButtons.length}`);
    
    if (gameButtons[0]) {
        gameButtons[0].addEventListener('click', guessNumberGame);
        console.log("Кнопка 1: 'Угадай число' привязана");
    }
    
    if (gameButtons[1]) {
        gameButtons[1].addEventListener('click', mathGame);
        console.log("Кнопка 2: 'Простая арифметика' привязана");
    }
    
    if (gameButtons[2]) {
        gameButtons[2].addEventListener('click', reverseTextGame);
        console.log("Кнопка 3: 'Переверни текст' привязана");
    }
    
    if (gameButtons[3]) {
        gameButtons[3].addEventListener('click', rockPaperScissorsGame);
        console.log("Кнопка 4: 'Камень, ножницы, бумага' привязана");
    }
    
    if (gameButtons[4]) {
        gameButtons[4].addEventListener('click', quizGame);
        console.log("Кнопка 5: 'Викторина' привязана");
    }
    
    
    const headerButton = document.querySelector('.header__button');
    if (headerButton) {
        headerButton.addEventListener('click', function(e) {
            e.preventDefault();
            guessNumberFromArray();
        });
        console.log("Кнопка в шапке привязана к игре 'Угадай число из массива'");
    }
    
    console.log("ВСЕ ИГРЫ ПРИВЯЗАНЫ!");
    console.log("1. Нажмите на кнопку 'Викторина'");
    console.log("2. Проверьте консоль");
    console.log("3. Игра 'Переверни текст'");
});