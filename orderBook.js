//Adds the incoming order to the existing book
function addedOrderToBook(existingBook,incomingOrder) {
  return [...existingBook, incomingOrder]
}

//Checks whether the opposite order type exists; if this new array of opposite types is empty, then no corresponding orders to match with; add orders to book
function checkForMatchingOrder(existingBook, incomingOrder) {
  var differentTypesBook = existingBook.filter(order => order.type !== incomingOrder.type)
  if (differentTypesBook.length === 0) {
    //console.log('Oh hey theres no opposite order so well add the incoming order to the book')
    return addedOrderToBook(existingBook,incomingOrder)
  }
  else {
    // There is at least 1 order that can potentially be fulfilled.
    var potentialMatchingOrders = 0
    existingBook.forEach(function(order) {
      // If quantity and price match between the incoming order and existing orders, count it and fulfill it somehow
      if (order.type !== incomingOrder.type && order.quantity === incomingOrder.quantity && order.price === incomingOrder.quantity) {
        potentialMatchingOrders += 1
      }
      
    })
    // No matches means add incoming order to the book
    if (potentialMatchingOrders === 0) {
      return addedOrderToBook(existingBook,incomingOrder)
    }
  }
  //console.log(existingBook)
  //return existingBook
}


export function reconcileOrder(existingBook, incomingOrder) {
  //throw new Error('Not Implemented Yet')
  var book
  if (!existingBook.length) {
    book = addedOrderToBook(existingBook, incomingOrder)
  }
  else {
    book = checkForMatchingOrder(existingBook, incomingOrder)
  }
  
  return book

}
