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

function dealjson(obj) {
  var arr = []
  var Jsonarr = []
  let object = {}
  for (var key in obj) {
    arr.push(obj[key]); //属性
  }
  for (let i = 0; i < arr.length; i++) {
    if (i % 2 != 0) {
      object.name = arr[i]
      Jsonarr.push(object)
      object = {}
    } else {
      object.des = arr[i]
      object.id = i
    }
  }
  var one = Jsonarr.slice(0, 13)
  var two = Jsonarr.slice(13, 23)
  for (let j = 0; j < two.length; j++) {
    [two[j].des, two[j].name] = [two[j].name, two[j].des]
  }
  var three = one.concat(two)
<<<<<<< HEAD
  three.splice(12, 1)
=======
  three.splice(12,1)
  three.splice(4,1)
>>>>>>> eabb9e8e9ae0a3e6a6ef3909dd4b8ad0c43a02b3
  return three
}

function remobenull(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i].foods) {
      for (let j = 0; j < array[i].foods.length; j++) {
        if (array[i].foods.length < 24) {
          console.log(array.splice(i, 1))
          // console.log(response.data.category_list[i].foods)
        }
      }

    }
  }
  console.log(array)
  return array
}

export default {sliceArray, dealarray, dealjson, remobenull};
