const express = require('express');
const path = require('path');
const index = express();

index.get('/', (req,res) => {
    res.sendFile(path.dirname( 'views', 'index.html'));
});

module.exports = index;