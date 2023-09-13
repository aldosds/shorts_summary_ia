import cors from "cors"
import express, { request, response } from "express"

// Habilitando a conexão do Front com o Back
const app = express()
app.use(cors())

// Criando a rota /summary
app.get("/summary", (request, response) => {
  response.send("Hello World!")
})

// Escutando as requisições com o número da porta
app.listen(3333, () => console.log("Server is running on port 3333"))
