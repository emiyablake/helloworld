const express = require('express');
const index = express();

index.get('/', (req,res) => {
    res.sendFile('views/index.html', {root: __dirname})
})

module.exports = index;