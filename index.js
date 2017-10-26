var recipes = {lettuce: "alot", eggs: "even more", salt: "a single grain"}

function updateObjectWithKeyAndValue(obj, key, value) {
  return obj.assign({}, obj, {key: value})
}
