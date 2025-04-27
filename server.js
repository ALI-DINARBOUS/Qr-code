const express = require('express');

const path = require('path');

const codeQr = require('qrcode');

const app = express();

app.listen(3000, () => {
    console.log("Server en cours d'execution");
});

app.use(express.static(path.join(__dirname, 'public')));

app.use(express.json());

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});


app.post("/", (req, res) => {
    const texte = req.body.texte;
    codeQr.toDataURL(texte, (err, url) => {
        res.json({ qrCode: url });
    });
});
