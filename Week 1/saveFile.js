var fs = require('fs');

fs.writeFile('generateNodeText.txt', 'awwwwwwok</br>?????', function (err, file) {
  if (err) throw err;
  console.log('Saved!');
});
