var http = require('http');
var fs = require('fs');
var st = [];

  try {
    var data = fs.readFileSync('generateNodeText.txt', 'utf8');
    console.log(data.toString(st));
} catch(e) {
    console.log('Error:', e.stack);
}



  console.log(data);



  fs.writeFile('newHTTP.http', "<!DOCTYPE html><html><body><h2>" + data + "</h2></body></html>", function (err, data) {

    if (err) throw err;
    console.log('Saved!');
  });
