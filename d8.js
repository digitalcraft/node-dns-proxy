var proxy = require("./proxy.js");

proxy.createServer({
    addresses: {
        "crm.digital8.com.au": "10.20.0.10",
        "db.digital8.com.au": "10.20.0.10",
        "docker.Digital8": "10.20.0.10"
    },
    filters: {
        "docker.digital8.com.au": "10.20.0.10",
        ".vm": "10.20.0.10",
        ".dev": "127.0.0.1"
    },
    cache: true
}).start();
