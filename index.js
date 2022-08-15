const express = require('express');

const app = express();

app.use(express.json())

app.set('view engine', 'ejs')

//app.use(express.static('public'))

app.get('/', (req, res) => {
    res.render("index");
    //res.sendFile('public/index.html', {root: __dirname});
});

app.get('/check', (req, res) => {
    let domain = req.host;
    let sdIndex = req.host.indexOf(".");

    let subdomain = domain.slice(0, sdIndex);

    if(subdomain == 'aena'){
        res.status(200).render('indexa', { subdomain})
    }else if(subdomain == 'davi'){
        res.status(200).render('indexd', { subdomain})
    }else{
        res.status(200).render('index', { subdomain})
    }
});


app.listen(3000, () => console.log("Server running on port 3000"))