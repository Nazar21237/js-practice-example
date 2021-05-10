"use strict";

// task1) Даны числа 4, -2, 5, 19, -130, 0, 10. Найдите минимальное и максимальное число.
// task 1.1) minValue
function min (){
  let minValue = arguments[0];
  for(let i = 1; i < arguments.length; i++){
    if(arguments[i] < minValue){
      minValue = arguments[i];
    }
  }
  return minValue
}
console.log("Min value is:", min(4, -2, 5, 19, -130, 0, 10));

// task 1.2) maxValue

function max (){
  let maxValue = arguments[0];
  for(let i = 1; i < arguments.length; i++){
    if(arguments[i] > maxValue){
      maxValue = arguments[i];
    }
  }
  return maxValue
}
console.log("Max value is:", max(4, -2, 5, 19, -130, 0, 10));

//Task2 Дан массив arr. Найдите среднее арифметическое его элементов. Проверьте задачу на массиве с элементами 12, 15, 20, 25, 59, 79.

function averageValue(){
  let sum = 0;
  for(let i = 0; i < arguments.length; i++){
    sum += arguments[i];
  }
  return sum / arguments.length;
}
console.log("Average value is:", averageValue(12, 15, 20, 25, 59, 79));

// Task3 Даны два массива: [1, 2, 3] и [4, 5, 6]. Объедините их вместе.

 const a = [1, 2, 3];
 const b = [4, 5, 6];
 const c = a.concat(b);

 console.log(c);

//  task4 Дан массив [1, 2, 3]. Сделайте из него массив [3, 2, 1].

const d = [1, 2, 3];
const reverse = d.reverse();

console.log( "reverse:",reverse);

// task5 
//  5.1) Дан массив [1, 2, 3]. Добавьте ему в конец элементы 4, 5, 6.
//  5.2)Дан массив [1, 2, 3]. Добавьте ему в начало элементы 4, 5, 6.

//  5.1)
const t51 = [1, 2, 3];
const t511 = t51.push(4, 5, 6);

console.log("Push example:", t51);

// 5.2
const t52 = [1, 2, 3];
t52.unshift(4, 5, 6);
 
console.log("Unshift example:",t52);

// task6 
// Дан массив ['js', 'css', 'jq']. Выведите на экран первый элемент и удалите его.
// Дан массив ['js', 'css', 'jq']. Выведите на экран последний элемент.

// 6.1)
const t61 = ['js', 'css', 'jq'];
console.log("before:",t61);

const shifted = t61.shift();

console.log("after to shift:", t61);
console.log("Delete this element:", shifted);

// 6.2)
const t62 = ['js', 'css', 'jq'];
console.log("before:",t62);

const pop = t62.pop();

console.log("after to pop:",t62);

// task7 
// 7.1)Дан массив [1, 2, 3, 4, 5]. С помощью метода slice запишите в новый элементы [1, 2, 3].
// 7.2)Дан массив [1, 2, 3, 4, 5]. С помощью метода slice запишите в новый элементы [4, 5].

// 
const t7 = [1, 2, 3, 4, 5];

const t71Slice = t7.slice(0, 3);
console.log(t71Slice);

const t72Slice = t7.slice(3);
console.log(t72Slice);

// task8  
// 8.1)Дан массив [1, 2, 3, 4, 5]. С помощью метода splice преобразуйте массив в [1, 4, 5].
// 8.2)Дан массив [1, 2, 3, 4, 5]. С помощью метода splice запишите в новый массив элементы [2, 3, 4].
// 8.3)Дан массив [1, 2, 3, 4, 5]. С помощью метода splice сделайте из него массив [1, 2, 3, 'a', 'b', 'c', 4, 5].
// 8.4)Дан массив [1, 2, 3, 4, 5]. С помощью метода splice сделайте из него массив [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e'].

// "8.1)" 
const t81 = [1, 2, 3, 4, 5];
t81.splice(1, 2);
console.log(t81);

// 8.2)
const t82 = [1, 2, 3, 4, 5];
t82.splice(0, 1);
t82.splice(-1, 1);
console.log(t82);

// 8.3)
const t83 = [1, 2, 3, 4, 5];
t83.splice(3, 0,'a', 'b', 'c');
console.log(t83);

// 8.4)
const t84 = [1, 2, 3, 4, 5];
t84.splice(1, 0,'a', 'b',);
t84.splice(6, 0,'c');
t84.splice(8,0,'e')
console.log(t84);

// task 9
// Дан массив [3, 4, 1, 2, 7]. Отсортируйте его.

const t9 = [3, 4, 1, 2, 7];
console.log(t9)
t9.sort()

console.log("Sort:",t9)

// task10
// Дан объект {js:'test', jq: 'hello', css: 'world'}. Получите массив его ключей.

const object = {
  js:'test',
  jq: 'hello',
  css: 'world'
};

console.log(Object.keys(object));


// task11
// необходимо создать функцию hasElem, которая параметрами будет принимать массив и строку, и возвращать true, если строка есть в массиве, и false - если нет

function hasElem(arr, value){
  for(let i = 0; i < arr.length; i++){
    if(arr[i] === value){
      return true;
    }
  }
  return false;
}
console.log(".....Function husElem testing string.......");
console.log(hasElem(["somthing wrong!", "Somthing else?"],"Another day....."));
console.log(hasElem(["somthing wrong!", "Another day.....", "Somthing else?"],"Another day....."));

// task12
// Дан массив с числами. Проверьте, что в этом массиве есть указанное число. Если есть - вернуть true, а если нет - вернуть false.

console.log(".....Function husElem testing number.......");
console.log(hasElem([1, 3, 5, 7, 9, 11],17));
console.log(hasElem([2, 4, 6, 8, 10, 12],22));
console.log(hasElem([13, 14, 15, 16, 18, 19, 20],21));


// task13
// Дан массив с числами. Проверьте, есть ли в нем два одинаковых числа подряд. Если есть -  вернуть true, а если нет - вернуть false.

function checkArray(arr){
  for(let i = 0; i < arr. length - 1; i++){
    if(arr[i] === arr[i+1]){
      return true;
    }
  }
  return false
}

console.log(".....Function checkArray testing .......");
console.log(checkArray([1, 3, 5, 7, 9, 11, 11]));
console.log(checkArray([2, 4, 6, 8, 10, 12],22));
console.log(checkArray([13, 14, 15, 15, 16, 18, 19, 20]));
console.log(checkArray([2, 4, 6, 8, 10, 12],22));
