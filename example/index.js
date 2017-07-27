import Connector from "../lib/index.js"

const connection = new Connector({
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
