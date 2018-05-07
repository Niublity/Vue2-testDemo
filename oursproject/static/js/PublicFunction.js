let sliceArray = function (array, size) {
  var result = [];
  for (var x = 0; x < Math.ceil(array.length / size); x++) {
    var start = x * size;
    var end = start + size;
    result.push(array.slice(start, end));
  }
  return result;
}
let dealarray = function (array) {
  let x = [...array]
  if (x.length == 0) {
    return "b/ff/533cf9617bd57fe1dfb05603bebcfpng.png"
  } else {
    var arr1 = [];
    for (let a = x.length - 4; a < x.length; a++) {
      arr1.push(x[a])
    }
    var abc = arr1.join("")
    if (abc == "jpeg") {
      x.push(".jpeg")
      x.splice(1, 0, "/")
      x.splice(4, 0, "/")
      var jpeg = x.join("")
      return jpeg
    }
    for (let a = x.length - 3; a < x.length; a++) {
      arr1.push(x[a])
    }
    if (abc = "png") {
      x.push(".png")
      x.splice(1, 0, "/")
      x.splice(4, 0, "/")
      var png = x.join("")
      return png
    }
  }
}

export default {sliceArray, dealarray};
