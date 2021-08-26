const catalogItem = {
  render(good) {
    return `<div class="good_catalog">
                <div><b>Наименование</b>: ${good.name}</div>
                <div><b>Цена за шт.</b>: ${good.price}</div>
                <button class="catalog-btn" data-name="${good.name}">Добавить</button>`
  }
}

const cartItem = {
  render(good) {
    return `<div class="good_cart">
                <div><b>Наименование</b>: ${good.name}</div>
                <div><b>Цена за шт.</b>: ${good.price}</div>
                <div><b>Количество</b>: ${good.count}</div>
                <div><b>Стоимость</b>: ${good.count * good.price}</div>`
  }
}


const catalog = {
  catalogBlock: null,
  catalogButton: null,
  catalogItem,
  products: [
    {
      name: 'banana',
      price: 50,
    },
    {
      name: 'apple',
      price: 40,
    }
  ],

  init() {
    this.catalogBlock = document.querySelector('.catalog-list');
    this.catalogButton = document.querySelector('.catalog-btn');
    this.initEventHandlers();
    this.render();
  },

  render() {
    this.products.forEach(product => {
      this.catalogBlock.insertAdjacentHTML(`beforeend`, this.catalogItem.render(product))
    });
  },

  initEventHandlers() {
    this.catalogButton = addEventListener('click', (event) => {
      this.insertInCart(event);

    })
  },

  insertInCart (event) {
    this.products.forEach(product => {
      if (product.name === event.target.dataset.name) {
        cart.insertInCart(product) ;
      }
    })
  }
}


const cart = {
  cartBlock: null,
  cartItem,
  products: [

  ],

  init() {
    this.cartBlock = document.querySelector('.cart-list');
    this.render();
  },
  render() {
    if (this.products.length > 0) {

      this.products.forEach(product => {
        this.cartBlock.insertAdjacentHTML('afterend', this.cartItem.render(product));
      });
      this.cartBlock.textContent = `В корзине ${this.products.length} товаров на сумму ${this.getCartPrice()}`
    } else {
      this.cartBlock.textContent = 'Корзина пустая'
    }
  },
  getCartPrice() {
    let price = 0
    for (let product of this.products){
      price += product.price * product.count
    }
    return price
  },

  checkProductInCart(name) {
    if (this.products.length > 0) {
      this.products.forEach(product => {
        if (product.name === name) {
          return true
        }
      })
    }
  },

  incrementProductCount(good){
    this.products.forEach(product => {
      if (product.name === good.name) {
        product.count += 1
      }
    })
  },

  removeElement(elementClass) {
    let element = document.getElementsByClassName(elementClass);
    while (element.length) {
      element[0].parentNode.removeChild(element[0]);
    }
  },

  insertInCart(product){
    if (this.checkProductInCart(product.name)) {
      this.incrementProductCount(product) //не понимаю почему при добавлении уже не первого товара, сюда не входит, хоть проверка на checkProductInCart дает true
    } else {
      product.count = 1
      this.products.push(product)
    }
    this.removeElement('good_cart')
    this.render();
  },
}

catalog.init();
cart.init()