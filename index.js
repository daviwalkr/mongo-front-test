const express = require('express');

const app = express();

app.get('/', (req, res) => {
    let domain = req.host;
    let sdIndex = req.host.indexOf(".");

    let subdomain = domain.slice(0, sdIndex);

    if(subdomain == 'aena'){
        res.send('Hello aena')
    }else if(subdomain == 'davi'){
        res.send('Hello davi')
    }else{
        res.send('Hello anyone')
    }
    
});

app.listen(3000, () => console.log("Server running on port 3000"))