// Строки
console.log("--- Строки ---");
let string = 'string test example';
console.log("Исходная строка: " + string);
// Задание №1 - Получить первую и последнюю букву строки //
function getLetter(str){
    let localStr = str;
    let firstLetter = localStr[0];
    let lastLetter = localStr[localStr.length-1];
    return "1. Первая буква строки: " + firstLetter + ". Вторая буква строки: "+ lastLetter;
}
 console.log(getLetter(string));

// Задание №2 - Сделать первую и последнюю буквы в верхнем регистре //
function stringTransform(str){
    let localStr = str;
    let firstLetter = localStr[0].toLocaleUpperCase();
    let lastLetter = localStr[localStr.length-1].toLocaleUpperCase();
    let resultString = firstLetter + localStr.slice(1,-1) + lastLetter;
    return "2. Итоговая строка: " +  resultString;
}
 console.log(stringTransform(string));

// Задание №3 - Найти положение слова string в строке //
function wordPosition(str){
    let localStr = str;
    let position = localStr.indexOf("string", 0);
    return "3. Положение слова string: " + position;
}
 console.log(wordPosition(string));

// Задание №4 - Найти положение второго пробела //
function secondSpacePosition(str){
    let localStr = str;
    let position = localStr.indexOf(' ', localStr.indexOf(' ') + 1);
    return "4. Положение второго пробела: " + position;
}
 console.log(secondSpacePosition(string));

// Задание №5 - Получить строку со 2-ого символа длинной 6 букв //
function getStringFromSecondChar(str){
    let localStr = str;
    let resultStr = localStr.replace(/[^A-Za-zА-Яа-яЁё]/g, "").substr(1,6);
    return "5. Строка со 2-го символа длиной 6 букв: " + resultStr;
}
console.log(getStringFromSecondChar(string));

// Задание №6 - Получить строку 1 по 7 символ //
function getStringFromFirstChar(str){
    let localStr = str;
    let resultStr = localStr.slice(0, 7);
    return "6. Строка с 1 по 7 символ: " + resultStr;
}
 console.log(getStringFromFirstChar(string));

// Задание №7 - Получить из 2ух переменных типа number x = 20, y = 21 получить строку '2021' //
function getStringFromNumber(a,b){
    let resultString = String(a) + String(b);
    return "7. Строка из двух переменных типа number: " + resultString;
}
 console.log(getStringFromNumber(20,21));