import './App.css'
import { useState, useEffect } from 'react' //ajuda a lidar com dados
import axios from 'axios'//ajuda a conectar com backend

function App() {
  const [list, setList] = useState([])
  const baseURL = 'http://localhost:3333/lista'

  useEffect(()=> {

    async function pegaDados() {
      const resposta = await axios.get(baseURL)
      setList(resposta.data)
    }

    pegaDados()
  }, [])

  function mostrarDados(tech) {
    return (
      <>
        <div className="card" key={tech.foto}>
          <a href={tech.link} target="_blank" rel="noreferrer">
            <img src={tech.foto} className="card_img" alt="foto" />
          </a>
          <h2 className="card_name">
            {tech.nome}
          </h2>
          <p className="card_descripition">
            {tech.descricao}
          </p>
        </div>
     </>
    )
  }
  
  return (
    <>
      <header className="header">
        <div className="textos">
          <h1 className="header_title">#Afreektech</h1>
          <p className="header_description">Uma lista de referências pretas que inspira a comunidade na tecnologia. Acompanhe esse bonde e todo dia tenha uma inspiração pra crescer na carreira em tecnologia!</p>
        </div>
      </header>
      <div className="cards">
        {
          list.map(mostrarDados)
        }
      </div>
    </>
  )
}

export default App
