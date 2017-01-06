  let validator = {
    set (target, key, value) {
      if (key === 'age') {
        if (typeof value !== 'number' || Number.isNaN(value)) {
          throw new TypeError('Age must be a number')
        }
        if (value <= 0) {
          throw new TypeError('Age must be a positive number')
        }
      }
      target[key] = value
      /* We make sure that we always return true to mark the operation as done */
      return true
    }
  }
  let person = { age: 28 }
  let proxy = new Proxy(person, validator)
  proxy.age = 29
  console.log(proxy.age) // 29
  proxy.age = -1 // Exception
