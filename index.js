const express = require('express');
const app = express();
const port = 3000;

app.get('/tintuc', (req, res) =>  {
    let x =1;
    let y =2;
    let c = x+y;
    return(res.send('Hello World!'))
});


app.listen(port, () => console.log(`example ${port}`))  