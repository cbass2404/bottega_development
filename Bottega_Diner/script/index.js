const commText = document.querySelector("#response");
const menuText = document.querySelector("#menu");

function start() {
  const response = document.querySelector("#response");
  const menu = document.querySelector("#menu");

  console.log("hi");
  let custName = prompt("Welcome to Bottega Diner! What is your name?");
  if (custName != null) {
    const newCustomer = new Customer(custName);
    response.innerHTML = `Nice to have you here ${newCustomer["name"]}
      , Here are the entrees. See anything you like?`;
  }
  menu.innerHTML = entreeList.map((entree) => {
    return `<br>${entree["name"]} $${entree["price"]}`;
  });

  const entreeChoice = prompt("Choose an entree!");
  // loop through the entree list
  // check if (entreeChoice === current.name)
  // then do something with that item

  response.innerHTML = `${entreeChoice.selectResponse()}`;
}

start();

// document.getElementById("response").innerText = "hi";
