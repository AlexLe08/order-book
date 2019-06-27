// Check if the book has 0 orders and adds the incoming order in if so
function newOrder(existingBook,incomingOrder) {
  return [...existingBook, incomingOrder]
}

//Checks whether the opposite order type exists; if this new array of opposite types is empty, then no corresponding orders to match with; add orders to book
function checkForMatchingOrder(existingBook, incomingOrder) {
  var differentTypesBook = existingBook.filter(order => order.type !== incomingOrder.type)
  if (differentTypesBook.length === 0) {
    //console.log('Oh hey theres no opposite order so well add the incoming order to the book')
    return [...existingBook, incomingOrder]
  }
  else {
    // There is at least 1 order that can potentially be fulfilled. Check further if it can be
    existingBook.map(function(order) {
      // If quantity and price do not match between the incoming order and existing orders, add incoming order to the book
      if (order.type !== incomingOrder.type && order.quantity !== incomingOrder.quantity && order.price !== incomingOrder.quantity) {
        existingBook = [...existingBook, incomingOrder]
      }
    })
  }
  //console.log(existingBook)
  return existingBook
}


export function reconcileOrder(existingBook, incomingOrder) {
  //throw new Error('Not Implemented Yet')
  var book
  if (!existingBook.length) {
    book = newOrder(existingBook, incomingOrder)
  }
  else {
    book = checkForMatchingOrder(existingBook, incomingOrder)
  }
  
  return book

}
