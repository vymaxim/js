// 1. Написать функцию, преобразующую число в объект. Передавая на вход число от 0 до 999,
//  мы должны получить на выходе объект, в котором в соответствующих свойствах описаны единицы, десятки и сотни.
//   Например, для числа 245 мы должны получить следующий объект: {‘единицы’: 5, ‘десятки’: 4, ‘сотни’: 2}.
//    Если число превышает 999, необходимо выдать соответствующее сообщение с помощью console.log и вернуть пустой объект.
{
  console.log('----------task1------------');

  function getObject(num) {
    if (num > 0 && num < 1000) {
      return {
        'сотни': parseInt(num / 100),
        'десятки': parseInt(num / 10) % 10,
        'единицы': num % 10,
      }
    } else {
        return {}
      }
  }

  console.log(getObject(783)); // {сотни: 7, десятки: 8, единицы: 3}
  console.log(getObject(1001)); // {}
}

// 2.Продолжить работу с интернет-магазином:
// 2.1. В прошлом домашнем задании вы реализовали корзину на базе массивов. Какими объектами можно заменить их элементы?
// 2.2. Реализуйте такие объекты.
// 2.3. Перенести функционал подсчета корзины на объектно-ориентированную базу.

{
  console.log('----------task2------------');

  function getProductObj(name, price, balance) {
    return {
      name: name,
      properties: {
        price: price
      },
      balance: balance
    }
  }


  let apple = getProductObj('apple', 20, 30)
  let banana = getProductObj('banana', 50, 10)

  let basket = {
    products:[
      {
        product: apple,
        count: 10,
      },
      {
        product: banana,
        count: 3,
      }
    ],
    getBasketPrice() {
      let basketPrice = 0;
      for (let i = 0; i < this.products.length; i++) {
        basketPrice += this.products[i].product.properties.price * this.products[i].count
      };
      return basketPrice;
    }
  }

  console.log(apple);
  console.log(basket);
}
// 3.* Подумать над глобальными сущностями. К примеру, сущность «Продукт» в интернет-магазине
//  актуальна не только для корзины, но и для каталога. Стремиться нужно к тому, чтобы объект
//   «Продукт» имел единую структуру для различных модулей сайта, но в разных местах давал возможность вызывать разные методы.
