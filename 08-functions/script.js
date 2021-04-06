// Функции
console.log("--- Функции. ---");

// Задание №1 - Создать функцию multiply, которая будет принимать любое количество чисел и возвращать их произведение: multiplay(1,2,3) = 6. Если нет ни одного аргумента вернуть ноль.//
function multiply(...args){
    let localArgs = args.slice();
    let result = 1; 
    if  (localArgs.length!=0)
   { 
    for (let arg of args) 
    { result *= arg;}
    return result;
   }
  else { return 0;}
}
 console.log(multiply(1,2,3));

//Задание №2 -  С помощью ри курсе вычислить факториал числа 10.
function factorial (n){
    return (n != 1) ? n * factorial(n - 1) : 1;
}
 console.log(factorial(10));

//Задание №3 - Создать функцию, которая принимает строку и возвращает перевернутую строку ('test') = 'tset'
function revertString(str)
{
    let localStr = str;
    return localStr.split("").reverse().join("");
}
 console.log(revertString('test'));

//Задание №4 - Написать функцию, которая проверяет является ли слово палиндромом
function isPalindrome(str){
   // return Array.prototype.reverse.call(str.split('')).join('') == str;
   let strLen = str.length;
    let result = '';
    for (let i = 0; i < strLen; i++) {
      if (str[i] === str[strLen - 1 - i]) { 
        result = 'Строка '+str+' является палиндромом.';
      } else {
        result = 'Строка '+ str+' не является палиндромом.';
        return result;
      }
    }
    return result;
}
 console.log(isPalindrome('шалаш'));
 
//Задание №5 - Написать функцию-рекурсию, которая выведет каждый символ строки в конcоль ('test') => 't' 'e' 's' 't'

function getStringRecursion(str){
    if (str === '') return '';
    console.log(str[0]);
    getStringRecursion(str.substr(1)) + str[0];
}
  console.log(getStringRecursion('test'));
//Задание №6 - 
// Создать две функции и дать им осмысленные названия:

// первая функция принимает массив и callback, возвращая строку из обработанного массива.
// вторая функция (callback) обрабатывает каждый элемент массива 


const firstFunc = (arr, cb) => `Function result: ${arr.reduce((res,el) => res + cb(el))}`;
const secondFunc = word => word[0].toUpperCase() + word.substr(1);

 console.log(firstFunc(['Hello', 'its', 'me'], secondFunc));




