var recipes = {lettuce: "alot", eggs: "even more", salt: "a single grain"}

function updateObjectWithKeyAndValue(object, key, value) {
  var newObject = object.assign({}, {key: value})
  return newObject
}
