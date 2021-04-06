
// Работа с DOM
console.log("--- DOM. ---");

// Получить и вывести в консоль:
// head
let head = document.querySelector("head");
console.log("Вывод head:");
console.log(head);

// body
let body = document.body;
console.log("Вывод body:");
console.log(body);

// все дочерние элементы body
//let childrenBody = document.body.children;
console.log("Все дочерние элементы body:");
for (var i = 0; i < document.body.childNodes.length; i++) {
    console.log( document.body.childNodes[i] ); // Text, DIV, Text, UL, ..., SCRIPT
}
//console.log(document.body.children);

// первый div и все его дочерние узлы
let fisrtDiv = document.querySelector("div");
console.log("Первый div и все его дочерние узлы:");
console.log(fisrtDiv);

 //4.1 вывести все дочерние узлы в консоль 
let firstDivChildNodes = fisrtDiv.children;
console.log("Все дочерние узлы div:");
console.log(firstDivChildNodes);

 //4.2 вывести все дочерние узлы в консоль кроме первого
let nodes = Array.prototype.slice.call( document.body.children, 1);
console.log("Все дочерние узлы в консоль кроме первого:");
console.log(nodes);



