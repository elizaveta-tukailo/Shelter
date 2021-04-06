document.addEventListener('DOMContentLoaded', function () {
    console.clear();
    // Создать функцию которая принимает два. Функция проверяет является ли первый элемент родителям для второго элемента isParent(parent, child) => true || false
    function isParent(parent,child){
        let parentElement = document.querySelector(parent);
        let childElement = document.querySelector(child);
        return parentElement.contains(childElement);
    }
    console.log("Функция, проверяющая родитель ли:");
    console.log(isParent("article", "p"));

    // Найти элемент который находится перед списком ul
    console.log("Элемент перед списком:");
    var parentList = document.querySelector("ul").previousElementSibling; //Это элемент от которого мы начнём поиск
    console.log(parentList); 

    // Найти параграф и получить его текстовые содержимое
    var text = document.querySelector("p").textContent;
    console.log("Текстовое содержимое параграфа:");
    console.log(text);

    // Создать функцию, которая принимает в качестве аргумента узел DOM и возвращает информацию виде объекта о типе узла, имени узла и количестве дочерних узлов.
    function getNodeInfo(node){
        let element = document.querySelector(node);
        const elementInfo = new Object();
        elementInfo.nType = element.nodeType;
        elementInfo.nName  = element.nodeName;
        elementInfo.childLength = element.children.length;
        return elementInfo;
    }
    console.log("Получить информацию об узле:");
    console.log(getNodeInfo("ul"));
    // Найти список и добавить ему класс "list"
    document.querySelector("ul").classList.add('list');
  });