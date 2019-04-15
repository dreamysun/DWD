var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var request = require('request');

var url = "https://insult.mattbas.org/api/en/insult.json?template=is+as+%3Cadjective%3E+as+%3Carticle+target%3Dadj1%3E+%3Cadjective+min%3D1+max%3D3+id%3Dadj1%3E+%3Camount%3E+of+%3Cadjective+min%3D1+max%3D3%3E+%3Canimal%3E+%3Canimal_part%3E";
var insult = " ";

request(url, function(err,res, data){
    var result = JSON.parse(data);
    insult = " " + result.insult;
    console.log(result.insult);
});

// 创建 application/x-www-form-urlencoded 编码解析
var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.use('/public', express.static('public'));

app.get('/partB.html', function (req, res) {
   res.sendFile( __dirname + "/" + "partB.html" );
})


app.post('/process_post', urlencodedParser, function (req, res) {

   // 输出 JSON 格式
   var response = {"band": req.body.first_name};
  // var response = "<h1 style=\"color: black" + "; font-family: sans-serif; font-size: 7em; vertical-align:center;\">" + req.body.first_name +"</h1>"

   console.log(response);
  // res.end(JSON.stringify(response));
   res.send("<h1 style=\"color: red" + "; background-color: black; font-family: sans-serif; font-size: 7em; padding:100px; text-align:center;\">" + req.body.first_name + insult + "</h1>");
})

var server = app.listen(8000, function () {

  var host = server.address().address
  var port = server.address().port

})
