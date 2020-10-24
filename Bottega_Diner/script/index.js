function start() {
  let custName = prompt("Welcome to Bottega Diner! What is your name?");

  const newCustomer = new Customer(custName);

  response.innerHTML = `Nice to have you here ${newCustomer["name"]}
      . Here are the entrees. See anything you like?`;

  menu.innerHTML = entreeList.map((entree) => {
    return `<br>${entree["name"]} $${entree["price"]}`;
  });

  const entreeChoice = prompt("Choose an entree!");

  foodResponse(entreeList, entreeChoice, "Here are the sides!");

  menu.innerHTML = sideList.map((side) => {
    return `<br>${side["name"]} $${side["price"]}`;
  });

  const firstSide = prompt("Pick your first side.");

  foodResponse(sideList, firstSide, "You get another side.");

  const secondSide = prompt("Pick your second side.");

  foodResponse(sideList, secondSide, "Here's your bill! Enjoy.");

  menu.innerHTML = "HAVE A GREAT DAY!";
  response.innerHTML = `${newCustomer["name"]} <br>
    ${itemTracker[0]}: ${billTracker[0]} <br>
    ${itemTracker[1]}: ${billTracker[1]} <br>
    ${itemTracker[2]}: ${billTracker[2]} <br>
    Total: ${arraySum(billTracker)}
    `;
}

start();
