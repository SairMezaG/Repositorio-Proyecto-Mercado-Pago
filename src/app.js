require("dotenv").config()
const express = require ("express")
const cors = require ("cors")
const dbConnect = require("./config/conexion")
const app = express()

app.use(cors())
app.use(express.json())


const port = process.env.PORT || 3000

app.use("/api", require("./routes"))



app.listen(port,() => {
    console.log(`La aplicacion está escuchando por el puerto: http://localhost:${port}`)
})

dbConnect()

