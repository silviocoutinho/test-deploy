const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Test Deploy!!!')
});


app.listen(port, () => {
    console.log(`Test Deploy listening at http://localhost:${port}`)
  })