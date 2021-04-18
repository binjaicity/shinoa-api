const routes = require("express").Router()
const user_routes = require("./user")
const dl_routes = require("./downloader")
const stalk_routes = require("./getProfile")
const docs_routes = require("./docs")
const fun_routes = require("./fun")
const tools_routes = require("./imgMaker")
const internet_routes = require("./internet")
const auth = require("./user")
const path = require("path")

routes.get("/", (req, res) => {
  res.render(path.join(__dirname + "../../../client/sc_code/index.ejs"), { url: process.env.BASE_URL })
})
// routes.get("/generate", (req, res) => {
//   require("crypto").randomBytes(48, function (err, buffer) {
//     let token = buffer.toString("hex")
//     return res.json({ key: token })
//   })
// })

routes.use("/docs", docs_routes)
routes.use("/user", auth)
routes.use("/user", user_routes)
routes.use("/dl", dl_routes)
routes.use("/stalk", stalk_routes)
routes.use("/fun", fun_routes)
routes.use("/maker", tools_routes)
routes.use("/internet", internet_routes)

module.exports = routes
