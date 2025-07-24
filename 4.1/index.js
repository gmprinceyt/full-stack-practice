const express = require("express")
const cors = require('cors')
const app = express();


app.use(cors())
app.use(express.json())

app.get('/sum', (req, res)=> {
    const {a,b} = req.query;

    const data = parseInt(a)+ parseInt(b);

    res.json(data)
});


app.get('/intrest', (req, res)=> {
    const {p,r, t} = req.query;
    const data = parseInt(p)* parseInt(r)*parseInt(t)/100;
    res.json(data)
})


app.listen(5500, ()=> {
    console.log("connnected")
})