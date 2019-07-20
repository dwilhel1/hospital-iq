const express = require('express');
const path = require('path');

const app = express();

app.use(express.static('./dist/hospital-iq'));

app.get('/', (req,res) => {
  res.sendFile(path.join('./dist/hospital-iq/index.html'));
});

app.listen(process.env.PORT || 8080);
