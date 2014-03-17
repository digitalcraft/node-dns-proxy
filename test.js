var proxy = require("./proxy.js");

proxy.createServer({
    addresses: {
      "roflware.com": "123.234.123.234"
    },
    filters: {
        "\.docker.digital8.com.au$": "10.20.0.10",
        "\.vm$": "10.20.0.10",
        "\.dev$": "127.0.0.1",
        "\.local$": "127.0.0.1"
    },
    cache: true
}).start();
