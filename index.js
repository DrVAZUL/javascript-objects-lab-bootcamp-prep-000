var recipes = {lettuce: "alot", eggs: "even more", salt: "a single grain"}

function updateObjectWithKeyAndValue(obj, key, value) {
  var newObj = Object.assign({}, obj, {[key]: value})
  return newObj

}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value
  return object
}

function deleteFromObjectBykey(object, key) {
  var newObje = Object.assign({}, object)
  delete newObje.key
  return newObje
}