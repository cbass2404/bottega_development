const ribs = new FoodItem("Ribs", "entree", 12.99);
const steak = new FoodItem("Steak", "entree", 10.99);
const blackenedTuna = new FoodItem("Blackened tuna", "entree", 14.99);

const entreeList = [ribs, steak, blackenedTuna];

const loadedPotatos = new FoodItem("loaded potatos", "side", 4.99);
const frenchFries = new FoodItem("french fries", "side", 2.99);
const mixedVegetables = new FoodItem("mixed vegetables", "side", 3.99);
const bakedPotato = new FoodItem("baked potato", "side", 2.99);

const sideList = [loadedPotatos, frenchFries, mixedVegetables, bakedPotato];

const commText = document.querySelector("#response");
const menuText = document.querySelector("#menu");
