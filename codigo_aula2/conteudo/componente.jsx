//funcao javascript que retorna um html
//trazer dados do backend guardar na constante lista e mostrar na tela
import { useState, useEffect } from 'react' //ajuda a lidar com dados
import axios from 'axios'//ajuda a conectar com backend

//Javascript crie um componente chamado Componente 
//e ele vai retornar um html que percorre uma lista e mostrar
//cada item da lista na tela
function Componente() {
  const [list, setList] = useState([])
  const baseURL = 'http://localhost:3333/lista'

  useEffect(()=> {

    async function pegaDados() {
      const resposta = await axios.get(baseURL)
      setList(resposta.data)
    }

    pegaDados()
  }, [])

  function mostraLista(obj) {
    return (
      <>
        <p>{obj.nome}</p>
        <p>{obj.descricao}</p>
      </>
    )
  }

  return (
    <>
      {list.map(mostraLista)}
    </>
  )
}

export default Componente

