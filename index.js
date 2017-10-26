var recipes = {lettuce: "alot", eggs: "even more", salt: "a single grain"}

function updateObjectWithKeyAndValue(obj, key, value) {
 
  return Object.assign({}, obj, { [key]: value })
}
