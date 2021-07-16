
// задание №1

// var a = 1, b = 1, c, d;
// c = ++a; alert(c);           // 2
// d = b++; alert(d);           // 1
// c = (2+ ++a); alert(c);      // 5
// d = (2+ b++); alert(d);      // 4
// alert(a);                    // 3
// alert(b);                    // 3

//++a сначала присваивает потом возвращает значение, a++ возвращает вернет исходное значение потом присваивает

// задание №2
console.log('----------task2-----------')
var a = 2;
var x = 1 + (a *= 2);
console.log(x);

// возвращает 5, a *= 2  ==  a = a * 2


// задание №3


//    Объявить две целочисленные переменные a и b и задать им произвольные начальные значения.
//    Затем написать скрипт, который работает по следующему принципу:
//
//     если a и b положительные, вывести их разность;
//     если а и b отрицательные, вывести их произведение;
//     если а и b разных знаков, вывести их сумму; ноль можно считать положительным числом.
console.log('----------task3-----------')
var min = -10;
var max = 10;
var b = Math.floor(Math.random() * (max - min + 1)) + min;
console.log('b: '+b)
var c = Math.floor(Math.random() * (max - min + 1)) + min;
console.log('c: '+c);
if (a > 0 && b > 0) {
  console.log('b - c : ' + (b - c));
} else if (a < 0 && b < 0) {
  console.log('b * c : ' + (b * c));
} else {
  console.log('b + c : ' + (b + c));
}



// 4. Присвоить переменной а значение в промежутке [0..15]. С
 // помощью оператора switch организовать вывод чисел от a до 15.
console.log('----------task4-----------')
var y = parseInt(prompt('Введите y от 0 до 15: '))
console.log(y);

switch (y) {
  case 1: console.log('1');
  case 2: console.log('2');
  case 3: console.log('3');
  case 4: console.log('4');
  case 5: console.log('5');
  case 6: console.log('6');
  case 7: console.log('7');
  case 8: console.log('8');
  case 9: console.log('9');
  case 10: console.log('10');
  case 11: console.log('11');
  case 12: console.log('12');
  case 13: console.log('13');
  case 14: console.log('14');
  case 15: console.log('15'); break;
  default: console.log('увы');

}


// 5. Реализовать основные 4 арифметические операции в виде функций с двумя параметрами.
 // Обязательно использовать оператор return.
console.log('----------task5-----------')

function sum(a, b) {
  return a + b
}
function sub(a, b) {
    return a - b;
}
function div(a, b) {
    return a / b;
}
function mul(a, b) {
    return a * b;
}
a = 10;
b = 5;
console.log('sum: ' + sum(a,b));
console.log('sub: ' + sub(a,b));
console.log('div: ' + div(a,b));
console.log('mul: ' + mul(a,b));


// 6. Реализовать функцию с тремя параметрами:
 // function mathOperation(arg1, arg2, operation), где arg1, arg2 – значения аргументов,
 // operation – строка с названием операции. В зависимости от переданного значения операции
 // выполнить одну из арифметических операций (использовать функции из пункта 5) и вернуть
 // полученное значение (использовать switch).
 console.log('----------task6-----------')

 function mathOperation(arg1, arg2, operation) {
   switch (operation) {
     case '+': return sum(arg1, arg2);
      break;
     case '-': return sub(arg1, arg2);
      break;
     case '/': return div(arg1, arg2);
      break;
     case '*': return mul(arg1, arg2);
      break;
     default: console.log('введите операци: + - / *')

   }
 }
console.log(mathOperation(a,b,'*'));
