  let handler = {
    get (target, key) {
      invariant(key, 'get')
      return target[key]
    },
    set (target, key, value) {
      invariant(key, 'set')
      target[key] = value
      return true
    }
  }
  function invariant (key, action) {
    if (key[0] === '_') {
      throw new Error(`Invalid attempt to ${action} private "${key}" property`)
    }
  }
  let target = {_privateMember: 'private data'}
  let proxy = new Proxy(target, handler)
  proxy.publicMember = 'public data'
  console.log(proxy.publicMember) // 'public data'
  console.log(proxy._privateMember)// Error('Invalid attempt to get private "_privateMember" property')
  proxy._privateMember = 'changed data'// Error('Invalid attempt to set private "_privateMember" property')
