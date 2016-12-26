  let array = new Proxy([], {
    get: function (receiver, index) {
      if (index in receiver) {
        return receiver[index]
      }
      const i = parseInt(index)
      if (!isNaN(i) && i < 0 && Math.abs(i) <= receiver.length) {
        return receiver[receiver.length + i]
      }
    }
  })
  
  array.push('firstItem', 'secondToLasItem', 'lastItem')
  
  console.log(array[0]) // outputs: 'firstItem'
  console.log(array[-1])// outputs: 'lastItem'
  console.log(array[-2])// outputs: 'secondToLasItem'
