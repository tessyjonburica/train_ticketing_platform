const express = require('express');
const app = express()

app.get('/', (req, res) => {
    res.send('Swift Rails');
})

app.listen(3000, () => console.log('server is listening on port 3000.\n visit http://localhost:3000'));

// curl -v http://localhost:3000/