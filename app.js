const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('<h1> Welcome to Innovatily </h1> <h4>Message: Success</h4> <p>Version 1.1</p>');
})

app.get('/products', (req, res) => {
  res.send([
    {
      productId: '111',
      productname: 'SG BAT',
      price: 2000
    },
    {
      productId: '222',
      productname: 'Leather Ball',
      price: 80
    },
    {
        productId: '103',
        productname: 'Yonex Raquet',
        price: 2999
    },
    {
        productId: '104',
        productname: 'Fastrack watch',
        price: 1800
    },
    {
        productId:'105',
        productname: 'Playstation 4',
        price:27999
    },
    {
        productId: '106',
        productname:'Yezdi Scrambler',
        price: 274719
    }
  ])
})

app.listen(port, ()=> {
  console.log(`Demo app is up and listening to port: ${port}`);
})