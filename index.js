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

function mathGame() {
    alert(`Добро пожаловать в игру "математика"!\nПрийти несколько простых задач.`);
    
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

// "Переверни текст" 
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

//"Камень, ножницы, бумага"
function rockPaperScissorsGame() {
    const choices = ["камень", "ножницы", "бумага"];
    const userChoice = prompt("Выберите: камень, ножницы или бумага?").toLowerCase();
    
    if (!choices.includes(userChoice)) {
        alert("Пожалуйста, выберите камень, ножницы или бумага!");
        return;
    }
    
    const computerChoice = choices[Math.floor(Math.random() * 3)];
    
    alert(`Вы выбрали: ${userChoice}\nКомпьютер выбрал: ${computerChoice}`);
    
    if (userChoice === computerChoice) {
        alert("Ничья!");
    } else if (
        (userChoice === "камень" && computerChoice === "ножницы") ||
        (userChoice === "ножницы" && computerChoice === "бумага") ||
        (userChoice === "бумага" && computerChoice === "камень")
    ) {
        alert("Вы победили!");
    } else {
        alert("Компьютер победил! ");
    }
}

// "Викторина"
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


console.log("\n\n=== 10 НОВЫХ ЗАДАНИЙ ===");

// Задание 1
console.log("\nЗадание 1:");
console.log("'js' в верхнем регистре:", 'js'.toUpperCase());

// Задание 2
console.log("\nЗадание 2:");
function filterStringsByPrefix(arr, prefix) {
    const result = [];
    const lowerPrefix = prefix.toLowerCase();
    
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].toLowerCase().startsWith(lowerPrefix)) {
            result.push(arr[i]);
        }
    }
    
    return result;
}
console.log("Пример использования:", filterStringsByPrefix(["JavaScript", "Java", "Python", "JQuery"], "ja"));

// Задание 3
console.log("\nЗадание 3:");
const numToRound = 32.58884;
console.log("Исходное число:", numToRound);
console.log("До меньшего целого:", Math.floor(numToRound));
console.log("До большего целого:", Math.ceil(numToRound));
console.log("До ближайшего целого:", Math.round(numToRound));

// Задание 4
console.log("\nЗадание 4:");
const numbersForMinMax = [52, 53, 49, 77, 21, 32];
console.log("Числа:", numbersForMinMax);
console.log("Минимальное значение:", Math.min(...numbersForMinMax));
console.log("Максимальное значение:", Math.max(...numbersForMinMax));

// Задание 5
console.log("\nЗадание 5:");
function getRandomNumber1To10() {
    const randomNum = Math.floor(Math.random() * 10) + 1;
    console.log("Случайное число от 1 до 10:", randomNum);
}
getRandomNumber1To10();

// Задание 6
console.log("\nЗадание 6:");
function generateRandomArray(n) {
    const arrayLength = Math.floor(n / 2);
    const result = [];
    
    for (let i = 0; i < arrayLength; i++) {
        result.push(Math.floor(Math.random() * (n + 1)));
    }
    
    return result;
}
console.log("Массив для n=10:", generateRandomArray(10));

// Задание 7
console.log("\nЗадание 7:");
function getRandomInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log("Случайное число от 5 до 15:", getRandomInRange(5, 15));

// Задание 8
console.log("\nЗадание 8:");
const currentDate = new Date();
console.log("Текущая дата:", currentDate);

// Задание 9
console.log("\nЗадание 9:");
function getDateAfter73Days() {
    const date = new Date();
    date.setDate(date.getDate() + 73);
    return date;
}
const dateIn73Days = getDateAfter73Days();
console.log("Дата через 73 дня:", dateIn73Days.toLocaleDateString());

// Задание 10
console.log("\nЗадание 10:");
function formatDateTime(date) {
    const months = [
        "января", "февраля", "марта", "апреля", "мая", "июня",
        "июля", "августа", "сентября", "октября", "ноября", "декабря"
    ];
    
    const daysOfWeek = [
        "воскресенье", "понедельник", "вторник", "среда",
        "четверг", "пятница", "суббота"
    ];
    
    const day = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear();
    const dayOfWeek = daysOfWeek[date.getDay()];
    
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');
    
    return `Дата: ${day} ${month} ${year} года — это ${dayOfWeek}.\nВремя: ${hours}:${minutes}:${seconds}`;
}
console.log("Форматированная дата:");
console.log(formatDateTime(new Date()));


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
    
    console.log("ВСЕ ИГРЫ ПРИВЯЗАНЫ! Теперь:");
    console.log("1. Нажмите на кнопку 'Викторина' (5-я кнопка снизу)");
    console.log("2. Проверьте консоль - все 10 заданий выполнены");
    console.log("3. Игра 'Переверни текст' на 3-й кнопке");
});