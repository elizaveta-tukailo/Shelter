// Числа
console.log("--- Числа ---");

// Задание №1 - Получить число Pi из Math и округлить его до двух знаков после точки //
function getPi(){
    let num = Math.PI.toFixed(2);
    return "1. Получить число Pi из Math и округлить: " + num;
}
console.log(getPi());

// Задание №2 - Найти максимальное и минимальное значения из представленного ряда 10, 17, 5, 12, 15, 99, 1 //
function getMinMax(){
    let max = Math.max(10, 17, 5, 12, 15, 99, 1);
    let min = Math.min(10, 17, 5, 12, 15, 99, 1);
    return "2. Найти максимальное и минимальное значения из ряда 10, 17, 5, 12, 15, 99, 1: max = " + max + ", min = " + min;
}
 console.log(getMinMax());

// Задание №3 - С помощью Math.Random получить случайное число и округлить его до двух цифр после запятой //
function randomNumToFixed(){
    let random = Math.random().toFixed(2);
    return "3. С помощью Math.Random получить случайное число и округлить его до двух цифр после запятой: " + random;
}
 console.log(randomNumToFixed());

// Задание №4 - С помощью Math.Random получить случайное число от 0 до Х //
function randomNumToX(min,max){
    let random = Math.random() * (max - min) + min;
    return "4. С помощью Math.Random получить случайное число от 0 до Х: " + random;
}
 console.log(randomNumToX(0,25));

// Задание №5 - Получить число из строки '100$ //
function getNumFromString(str){
    let number = parseInt(str);
    return "5. Получить число из строки '100$: " + number;
}
 console.log(getNumFromString("100$"));