// Циклы
console.log("--- Циклы. ---");

// Задание №1 - В строке "Я стану крутым программистом" сделать первую букву каждого слова в верхнем регистре //
function firstWordToUpperCase(str){
    let word = str.split(' ');
    for (let i = 0; i < word.length; i++) {
	word[i] = word[i].slice(0, 1).toUpperCase() + word[i].slice(1);
    }
    let result = word.join(' ');
    return "1. " + result;
}
 console.log(firstWordToUpperCase('Я стану крутым программистом'));

// Задание №2 - Вычислить факториал числа 9 (факториал числа - это произведение всех натуральных чисел от 1 до n включительно. например, 2! = 21 или 6! = 654321)
function factorial(n) {
    var result = 1;
    while(n){
        result *= n--;
    }
    return '2. '+result;
}
 console.log(factorial(9) );

// Задание №3 - Создать строку "Просветление наступит через: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1"
function newString() {
    let str = 'Просветление наступит через ';
    for (let i=10; i > 0; i--){
        if (i > 1 ) {str += i + ', '; } 
        else { str += i;}
    }
    return '3. '+str;
}
 console.log(newString());

// Задание №4 - Найти и вывести в консоль все нечетные числа от 1 до 20 включительно.
function findOddNum() {
    let str='';
    for (let i = 1; i <= 20; i++) {
        if (i % 2 != 0) {
          str += i + ' ';
        }
      }
      return '4. Нечетные от 1 до 20: '+str;
}
 console.log(findOddNum());

// Задание №5 - На основе строки "теперь я мастер циклов javascript" создать новую строку, где первые буквы каждого слова будут в верхнем регистре и будут отсутствовать пробелы.
function newStringCapitalize(str){
    let localStr = str.split(' ');
    let resultStr = '';
    for(let i = 0; i < localStr.length; i++)
    { resultStr += localStr[i].charAt(0).toUpperCase() + localStr[i].slice(1); }
    return '5. ' + resultStr;
    }    
 console.log(newStringCapitalize('теперь я мастер циклов javascript'));

