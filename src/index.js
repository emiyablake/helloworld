const express = require('express');
const path = require('path');
const index = express();

index.get('/', (req,res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
})


index.get('/contato', (req, res) => {
    res.json({
        "criadores dessa pagina": [
            {
                "nome": "Gabriel",
                "idade": 24
            },
            {
                "nome": "Mara",
                "idade": 24
            }
        ]
    })
})



module.exports = index;