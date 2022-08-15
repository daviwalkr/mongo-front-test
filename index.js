const express = require('express');
const app = express();
const mongoose = require('mongoose')
require('dotenv').config()

app.use(express.json())
app.set('view engine', 'ejs')


app.get('/', (req, res) => {
    let domain = req.host;
    let sdIndex = req.host.indexOf(".");

    let subdomain = domain.slice(0, sdIndex);

    if (subdomain == 'aena') {
        mongoose.connect(process.env.MONGO_AENA)
            .then(() => res.send(`connect to mongodb in ${process.env.MONGO_AENA}`))
            .catch((e) => res.send(`Fail to connect ${e}`))
    } else if (subdomain == 'davi') {
        mongoose.connect(process.env.MONGO_DAVI)
            .then(() => res.send(`connect to mongodb in ${process.env.MONGO_DAVI}`))
            .catch((e) => res.send(`Fail to connect ${e}`))
    } else {
        res.status(200).send(`${subdomain}`)
    }
});

app.get('/check/sub', (req, res) => {
    let domain = req.host;
    let sdIndex = req.host.indexOf(".");

    let subdomain = domain.slice(0, sdIndex);

    if (subdomain == 'aena') {
        res.status(200).render('indexa', { subdomain })
    } else if (subdomain == 'davi') {
        res.status(200).render('indexd', { subdomain })
    } else {
        res.status(200).render('index', { subdomain })
    }
});


app.listen(3000 || process.env.PORT, () => console.log("Server running on port 3000"))