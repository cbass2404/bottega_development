const foodResponse = (list, choice, nextLine) => {
  list.map((item) => {
    if (choice === item["name"]) {
      itemTracker.push(item["name"]);
      billTracker.push(item["price"]);
      return (response.innerHTML = `${item.selectResponse()} ${nextLine}`);
    }
  });
};

const arraySum = (arr) => arr.reduce((a, b) => a + b, 0);
