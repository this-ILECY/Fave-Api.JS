
const express = require('express');
const { Pool } = require('pg');
const product = require('./controller/product.controller')
const b = require('dotenv').config();

const app = express();
const port = 3000;

const pool = new Pool({
    host: process.env.PGHOST,
    user: process.env.PGUSER,
    password: process.env.PGPASSWORD,
    database: process.env.PGDATABASE,
    port: process.env.PGPORT,
});

pool.query('SELECT NOW()', (err, res) => {
    if (err) console.log('err: ',err);
    else console.log('working babe!',res)
})

app.get('/product', product.getProduct)

app.get('/', (req, res) => {
    res.send('Started Working, Express!');
});

app.listen(port, () => {
    console.log(`Server listening at port: ${port}`);
});