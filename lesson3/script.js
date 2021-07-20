// 1. С помощью цикла while вывести все простые числа в промежутке от 0 до 100.
console.log('----------task1-----------')
{
  function isSimple(number) {
    if (number === 0 || number === 1){
      return false;
    } else{
      for (var i = 2; i < number; i++) {
        if (number % i === 0) {
          return false;
        }
      }
      return true;
    }
  }

  let i = 1;
  let arr = [];
  while (i < 101) {
    if (isSimple(i)) arr.push(i);
    i++;
  }
  console.log(arr);
}

// 2. С этого урока начинаем работать с функционалом интернет-магазина.
// Предположим, есть сущность корзины. Нужно реализовать функционал подсчета
// стоимости корзины в зависимости от находящихся в ней товаров.
// Товары в корзине хранятся в массиве. Задачи:

console.log('----------task2-----------')
{
  // a) Организовать такой массив для хранения товаров в корзине;

  console.log('----------a-----------')
  let basket = [
    {
      name: 'banana',
      price: 50,
      count: 2
    },
    {
      name: 'apple',
      price: 40,
      count: 4
    }
  ]
  console.log(basket);

  // b) Организовать функцию countBasketPrice, которая будет считать стоимость корзины.
  console.log('----------b-----------')

  function countBasketPrice(basket) {
    let basketPrice = 0;
    for (let product of basket){
      basketPrice += product.price * product.count
    }
    return basketPrice
  }

  console.log('Стоимость корзины: '+countBasketPrice(basket));
}
// 3.*Вывести с помощью цикла for числа от 0 до 9, не используя тело цикла. Выглядеть это должно так:
//
// for(…){// здесь пусто}

console.log('----------task4-----------')
{
  for (let i = 0; i < 10; console.log(i++)) {}
}
// 4. *Нарисовать пирамиду с помощью console.log, как показано на рисунке, только у вашей пирамиды должно быть 20 рядов, а не 5:
//
// x
// xx
// xxx
// xxxx
// xxxxx
console.log('----------task4-----------')
{
  let str = ''
  for (let i = 0; i < 21; i++){
    str += 'x'
    console.log(str);
  }
}
