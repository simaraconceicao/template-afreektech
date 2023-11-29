const express = require("express")
const router = express.Router()
const cors = require("cors")

const app = express()
app.use(cors())

app.use(router.get('/ola', (req, res) => {
  res.json({ message: 'Olá, AfreekTech' })
}))

app.listen(3333, () => console.log('Listening on port: 3333'))