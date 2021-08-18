// 1. Создать функцию, генерирующую шахматную доску.
// При этом можно использовать любые html-теги по своему
// желанию. Доска должна быть разлинована соответствующим образом,
//  т.е. чередовать черные и белые ячейки. Строки должны нумероваться числами
//   от 1 до 8, столбцы – латинскими буквами A, B, C, D, E, F, G, H. (использовать createElement / appendChild)



{
  document.body.insertAdjacentHTML('beforeend', '<table id=table class=chess></table>')
  const table = document.getElementById('table')
  const arr = [' ','a','b','c','d','e','f','g','h'];
  

  for (let row = 0; row < 9; row++){
    const trEl = document.createElement('tr')
    table.appendChild(trEl)
    col: for (let col = 0; col < 9; col++) {
      const td = document.createElement('td')
      if (row === 0) {
        if (col === 0) {
          table.appendChild(td)
          continue col
        } else {
          td.innerText = col
        }
      } else {
      if (col === 0) {
         td.innerText = arr[row]
      } else {
        if (row % 2 != 0) {
          if (col % 2 != 0) {
            td.style.backgroundColor = 'grey'
          }
        } else {
          if (col % 2 === 0) {
            td.style.backgroundColor = 'grey'
          }
      }
    }
  }
    
      table.appendChild(td)
    }
  }
}


// 2. Сделать генерацию корзины динамической: верстка корзины не должна
// находиться в HTML-структуре. Там должен быть только div, в который будет вставляться корзина, сгенерированная на базе JS:
// 2.1. Пустая корзина должна выводить строку «Корзина пуста»;
// 2.2. Наполненная должна выводить «В корзине: n товаров на сумму m рублей».


