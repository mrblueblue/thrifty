# thrifty

A lightweight wrapper for `mapd-connector`

## Getting Started

```
npm install thrifty
```

Then use it like so:

```js
import Thrifty from "thrifty"

const connection = new Thrifty({
  protocol: "https",
  host: "metis.mapd.com",
  port: "443",
  dbName: "mapd",
  user: "mapd",
  password: "HyperInteractive"
})

connection.connect().then(connection => {
  connection.logging(true)
  return connection.query("SELECT COUNT(*) FROM tweets_nov_feb")
}).then(result => console.log(result))
```
