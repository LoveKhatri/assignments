/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
    id: 1,
    timestamp: 1656076800000,
    price: 10,
    category: 'Food',
    itemName: 'Pizza',
  }
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
  const obj = []

  for (let tran of transactions) {
    if (obj.find(obj => obj.category === tran.category)) {
      obj.find(obj => obj.category === tran.category).totalSpent += tran.price
    } else {
      obj.push({ category: tran.category, totalSpent: tran.price })
    }
  }
  return obj;
}

module.exports = calculateTotalSpentByCategory;
