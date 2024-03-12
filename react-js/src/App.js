import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Select } from './components/Ui/Select'

class App extends React.Component {
  constructor () {
    super()
    this.state = {
      name: 'React'
    }

    console.log('constructor')
  }

  handleChange (evt) {
    console.log(evt)
  }
  
  render () {    
    console.log('render', this.state.name)
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h6>Olha maurice um bocó esta lendo kkkkk</h6>
          <Select options={[1,2,3,4,5,6,7,8,9,10,11,12,13]} handleChange={this.handleChange}/>
          <button onClick={console.log}>Click</button>
          Learn React
        </header>
        
      </div>
    )
  }

  componentDidMount () {
    // Roda após o render, após montar o componente
    // Usado para chamadas a API, contadores e outras funções demoradas
    // Roda apenas uma vez
    console.log('DidMount')
    setTimeout(() => {
      this.setState({
        name: 'Outro nome',
        hide: true
      })
    }, 3000)
  }

  componentDidUpdate () {
    // Roda após o this.setState for chamado
    console.log('DidUpdate')
  }
}

export default App
