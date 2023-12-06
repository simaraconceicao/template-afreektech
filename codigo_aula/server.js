// Cria configurações para o nodeJs
const express = require("express")
const router = express.Router()
const cors = require("cors")

const mensagem = 'Listening on port:' // texto precisa envolver com aspas - string
const porta = 3333// pra guardar numero - number
//constantes eu posso criar pra guardar informacoes que ue vou reutilizar
//Tipos de dados 

const app = express()
app.use(cors())

function mostrarLista(request, response) {
  response.json([
    {
      nome: 'Simara Conceicao',
      descricao: 'Dev e LinkedIn Top Voice',
      foto: 'https://media.licdn.com/dms/image/C4E03AQFAcqqo2WX_8A/profile-displayphoto-shrink_800_800/0/1563116727615?e=1707350400&v=beta&t=B2L2PHqSZq_EVKEOrN61leqAHyUM3tFeuaFpuK9zvt0',
      link: 'https://www.linkedin.com/in/simaraconceicao/'
    },
    {
      nome: 'Nina Silva',
      descricao: 'CEO MBM e Executiva de TI',
      foto: 'https://media.licdn.com/dms/image/C5603AQFuuejw9URzWg/profile-displayphoto-shrink_400_400/0/1616715071546?e=1706745600&v=beta&t=WguEZidYUI9roh3Rd7t5_nWt_1aSGKrvhH5FWs0vYlo',
      link: 'https://www.linkedin.com/in/marina-silva-profile/',
    },
    {
      nome: 'Nina da Hora',
      descricao: 'Cientista da Computação',
      foto: 'https://media.licdn.com/dms/image/D4D03AQFfEO5sNww0sA/profile-displayphoto-shrink_400_400/0/1679701314820?e=1706745600&v=beta&t=uhZHuxis-7itGYQDmkDkHDWvP0vhQRPWx8Wpx5ddwG0',
      link: 'https://www.linkedin.com/in/ninadahora/',
    },
    {
      nome: 'Kizzy Terra',
      descricao: 'Cientista de Dados',
      foto: 'https://media.licdn.com/dms/image/C4E03AQGIt5hFYkuAAg/profile-displayphoto-shrink_400_400/0/1615912937011?e=1706745600&v=beta&t=wLIaTnYIMbQb0-aYSd0bNhDdTKZs4pCLt0mmJUqDA7Q',
      link: 'https://www.linkedin.com/in/kizzyterra/',
    }
  ])
}

// Pedindo ao app pra criar na barra de navegador o endereço /lista e mostrar uma lista de objetos que é um array
app.use(router.get('/lista', mostrarLista))
//o verbo get do HTTP é o único que podemos ver no navegador


//Pedindo ao app para ouvir a porta 3333
app.listen(porta, () => console.log(mensagem, porta))