const express = require('express');

const app = express();

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
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