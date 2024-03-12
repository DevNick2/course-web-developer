import React from 'react'

class Select extends React.Component {

  render () {
    const options = this.props.options
    return (
     <select name="" id="" onChange={this.props.handleChange}>
       { options.map(number => {
         return <option value={number} key={number}>{number}</option>
       }) }
     </select>
    )
  }

  componentWillUnmount () {
    // Chama quando desmonta o componente
    console.log('Will unmount')
  }
}

export {
  Select
}