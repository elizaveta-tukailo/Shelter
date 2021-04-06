// Массивы
console.log("--- Массивы. ---");

// Задание №1 - Используя функцию, найти последний элемент массива, не изменяя его. //
function getLastElement(array){
    let localArray = array.slice();
    if (Array.isArray(localArray))
    {return '1. Последний элемент массива: '+ localArray[localArray.length - 1];}
    else {return '1. Введен не массив!'}
}
// console.log(getLastElement([1, 2, 4, 5, 7, 8]));

// Задание №2 -  Создать такую функцию, которая принимала бы массив [1,3,6], а возвращала новый массив с дублированными элементами [1,3,6,1,3,6]. //
function getDuplicateArray(array){
    let localArray = array.slice();
    if (Array.isArray(localArray))
    {return '2. Элемент с дублированными элементами: '+  localArray.concat(localArray);}
    else {return '2. Введен не массив!'}
}
// console.log(getDuplicateArray([1,3,6]));

// Задание №3 -  Создать такую функцию, которая принимала бы любое число, а возвращала массив, заполненный числами от 1 до n //
function getFilledArray(n){
    let localArray = new Array();
    if (!isNaN(n))
    {
        for (let i = 1; i < n + 1; i++)
        {localArray[i-1] = i;}
        return '3. Заполненный массив от 1 до n: '+  localArray;
    }
    else{ return '3. Неверные входные данные! ';}
}
// console.log(getFilledArray(10));

// Задание №4 - Создать такую функцию, которая принимала бы любое число массивов и удаляла из каждого массива первый элемент, 
//              а возвращала массив оставшихся значений ([1, 2, 3], ["x", "y", "z"] → [[2, 3], ["y", "z"]])"

function deleteFirstElementInArray(...array){
    let localeArr = array.slice();
    let result;
    for (let arr of localeArr)
    { 
        //console.log(arr);
        for (let i=0; i <= localeArr.length; i++ ){
           arr[i].shift();
        }
    }
    return localeArr;
}
//console.log(deleteFirstElementInArray([[1, 2, 3], ["x", "y", "z"]]));

// Задание №5 - Создать функцию, которая упорядочит буквы в строке "екважбигёзд" в алфавитном порядке и возвратит строку в обратном порядке ("кизжёедгвба")
function getRevertString(str){ 
    if( typeof str === "string")
    {
    let result = '';
    let localeStr = str.split('');
    let collator = new Intl.Collator();
    localeStr.sort(function(a, b) {
        return collator.compare(a, b);
    });
    result = localeStr.reverse().join('');
    return '5. Строка в обратном порядке: ' + result;
    }
    else {return '5. Неверные входные данные!';}
}
// console.log(getRevertString('екважбигёзд'));

// Задание №6 - Используя функцию, отсортировать массив [5, 2, -1, 6, 9, -9, 3] в обратном порядке.
function getRevertArray(array){ 
    let localeArr = array.slice();
    if (Array.isArray(localeArr))
    {
        localeArr.sort(function(a, b) { return a - b; }).reverse();
    return '6. Отсортированный массив: ' + localeArr;
    }
    else {return '6. Неверные входные данные!'; }
}
// console.log(getRevertArray([5, 2, -1, 6, 9, -9, 3]));

// Задание №7 - // Создать функцию, которая принимает 3 аргумента: любой произвольный массив, начальный номер элемента в массиве, конечный номер

// Ваша функция должна вернуть новый массив, состоящий из элементов исходного массива согласно аргументам (с-по) (getNewArray(“а, б, в, г, д, е”, 1,3) → [б, в, г]),
// не изменяя исходный массив и не используя циклы.

function getNewArray(array, startNumber, endNumber){ 
    let localArray = array.slice();
    if (Array.isArray(array) && startNumber != undefined && endNumber != undefined)
    {
        arr = localArray.slice(startNumber, endNumber+1);
        return '7. Функция с 3 аргументами:' + arr;
    }
    else {'7. Проверьте входные данные!';}
    //console.log(localArray);
}
// console.log(getNewArray(['а', 'б', 'в', 'г', 'д', 'е'], 1,3));

// Задание №8 - Удвоить элементы массива, не используя циклы
// Удвоить элементы массива, не используя циклы.,
function getDoubleElements(array)
{
    if (Array.isArray(array)){
    let localeArr = array.slice();
    let result = localeArr.map(el => el * 2);
    return '8. Удвоить элементы массива: ' + result;}
    else {'8. Проверьте входные данные!';}
}
// console.log(getDoubleElements([1,2,3,4,5]));

// Задание №9 - Удалить из массива [1, 2, 3, 4, 5] второй и третий элементы.
function deleteElements(array)
{
    if (Array.isArray(array)){
    let localeArr = array.slice();
    let result;
    localeArr.splice(1,2);
    result = localeArr;
    return '9. Удалить второй и третий элементы: ' + result;
}
    else {'9. Проверьте входные данные!';}
}
// console.log(deleteElements([1,2,3,4,5]));

// Задание №10 -  Удалить из массива [1, 2, 3, 4, 5] второй и третий элементы и на их место вставить “три” и “четыре” соответственно.
function deleteAndPasteElements(array)
{
    if (Array.isArray(array)){
    let localeArr = array.slice();
    let result;
    localeArr.splice(1,2,'три', 'четыре');
    result = localeArr;
    return '10. Удалить второй и третий элементы и вставить: ' + result;
}
    else {'10. Проверьте входные данные!';}
}
// console.log(deleteAndPasteElements([1,2,3,4,5]));

// Задание №11 -  Вставить в произвольный массив любое значение после второго элемента.
function pasteInArray(array)
{
    if (Array.isArray(array)){
    let localeArr = array.slice();
    let result;
    localeArr.splice(2,0,'привет');
    result = localeArr;
    return '11. Вставить значение после второго элемента: ' + result;
}
    else {'11. Проверьте входные данные!';}
}
// console.log(pasteInArray([1,2,3,4,5]));

// Задание №12 - Отсортировать массив массив таким образом, чтобы вначале шли массивы с наименьшей длиной. Создать копию произвольного массив"
function sortArray(array)
{
    if (Array.isArray(array)){
    let localeArr = array.slice();
    let result;
        result = localeArr.sort(compare1);
        function compare1(a, b){
          return a.length - b.length
        }
        return result;
    }
    else {'12. Проверьте входные данные!';}
}
//console.log(sortArray([[5,7,2,3],[4,7],[1,2,3]]));

// Задание №13 - // Отсортировать массив объектов по возрастающему количеству ног животных: 
//[ {kind: "tarantula", info: {legs: 8, eyes: 8}}, 
//{kind: "french bulldog", info: {legs: 4, eyes: 2}}, 
//{kind: "human", info: {legs: 2, eyes: 2}}, 
//{kind: "lobster", info: {legs: 10, eyes: 2}},]
function sortObjectsArray(array)
{
    if (Array.isArray(array)){
    let localeArr = array.slice();
    localeArr.sort(function(a, b) {
        if (a.info.legs > b.info.legs) {
            return 1;
          } else if ( a.info.legs == b.info.legs) {
            return 0;
          }
          return -1
    });
    return localeArr;
    }
    else {'13. Проверьте входные данные!';}
}
//console.log(sortObjectsArray([{kind: "tarantula", info: {legs: 8, eyes: 8}}, {kind: "french bulldog", info: {legs: 4, eyes: 2}}, {kind: "human", info: {legs: 2, eyes: 2}}, {kind: "lobster", info: {legs: 10, eyes: 2}},]));

//Задание №14 - // Написать функцию, которая принимает массив услуг и два числа, представляющих собой время исполнения услуг,
 //а также возвращает все услуги, находящиеся в диапазоне времени исполнения и отсортированные от меньшего времени исполнения к большему. 
 //const services = [ {service: "service1", executionTime: 56}, 
 //                   {service: "service2", executionTime: 97}, 
 //                   {service: "service3", executionTime: 23}, 
 //                   {service: "service4", executionTime: 65}, 
 //                   {service: "service5", executionTime: 2}, 
 //                   {service: "service6", executionTime: 73}, 
 //                   {service: "service7", executionTime: 82},
 //                   {service: "service8", executionTime: 19}, 
//                    {service: "service9", executionTime: 33}, 
//                    {service: "service10", executionTime: 42}, ]
// Например, filterServices(services, 20, 60).'
const services = [ {service: "service1", executionTime: 56}, {service: "service2", executionTime: 97}, {service: "service3", executionTime: 23}, {service: "service4", executionTime: 65}, {service: "service5", executionTime: 2}, {service: "service6", executionTime: 73}, {service: "service7", executionTime: 82}, {service: "service8", executionTime: 19}, {service: "service9", executionTime: 33}, {service: "service10", executionTime: 42}, ];
function filterServices(array, startTime, endTime)
{
    let localArray = array.slice();
    let serv = {
        minTime: startTime,
        maxTime: endTime,
        execution(services) {
          return services.executionTime >= this.minTime && services.executionTime < this.maxTime;
        }
      };
      let service = services.filter(serv.execution, serv).sort(function(a, b) {
        if (a.executionTime > b.executionTime) {
            return 1;
          } else if ( a.executionTime == b.executionTime) {
            return 0;
          }
          return -1
    });
    console.log(service);
}
//filterServices(services, 20, 60);








