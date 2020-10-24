class Customer {
  constructor(name) {
    this.name = name;
  }
}

class FoodItem {
  constructor(name, type, price) {
    this.name = name;
    this.type = type;
    this.price = price;
  }

  selectResponse() {
    let responseList = [
      `${this.name} is an excellent choice for the ${this.type}. It costs $${this.price}.`,
      `${this.name} costs $${this.price}. I think you'll be happy with that ${this.type}`,
      `That ${this.type} is $${this.price}. The ${this.name} has been especially delicious today!`,
    ];
    let ranValue =
      responseList[Math.floor(Math.random() * responseList.length)];
    return ranValue;
  }
}
