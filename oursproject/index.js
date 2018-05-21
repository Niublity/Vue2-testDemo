var express = require("express");
var app = express();
console.log(__dirname)
app.use(express.static(__dirname+"/dist"));
app.get("/1"||"/",function (req,res) {
  console.log(res)
  res.sendFile(__dirname+"/dist/index.html")
});
// app.get("/2",function (req,res) {
//   res.sendFile(__dirname+"/html/baidu.html")
// })
app.listen(8888,"10.90.87.226")
