import cors from "cors"
import express, { request, response } from "express"

// Importando o arquivo download.js
import { download } from "./download.js"

// Habilitando a conexão do Front com o Back
const app = express()
app.use(cors())

// Criando a rota /summary/<Coloque uma numeração para exemplo no navegador>
app.get("/summary/:id", (request, response) => {
  download(request.params.id) // Adicionando a função download
  //response.send("ID do vídeo: " + request.params.id);
  response.json({result: "Download do vídeo realizado com sucesso!"})
})

// Escutando as requisições com o número da porta
app.listen(3333, () => console.log("Server is running on port 3333"))
