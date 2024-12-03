const express = require('express')
const cors = require('cors')
const app = express()

const rotaTeste = require('./routes/routeProduto')


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use('/', rotaTeste)

app.listen(3000, () => {
    console.log('backend funcionando!')
})