var express = require('express');
var path = require('path');

const publicPath = path.join(__dirname, './public');
const app = express();
app.use(express.static(publicPath));

app.listen(8000, () => {
  console.log('listenning on port 8000');
});