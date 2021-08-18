const cart = {
  cartBlock: null,
  products: [
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
  ],
  init() {
    this.cartBlock = document.querySelector('.cart-list');
    this.render();
  },
  render() {
    if (this.products.length > 0) {
      this.cartBlock.insertAdjacentHTML(`beforeend`, `В корзине ${this.products.length} товаров на сумму ${this.getCartPrice()}`)
    } else {
      this.cartBlock.insertAdjacentHTML(`beforeend`, `Корзина пустая`)
    }
  },
  getCartPrice() {
    let price = 0
    for (let product of this.products){
      price += product.price * product.count
    }
    return price
  }
}

cart.init()