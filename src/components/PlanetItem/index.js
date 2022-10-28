// Write your code here
import {Component} from 'react'
import './index.css'

class PlanetItem extends Component {
  render() {
    const {item} = this.props
    const {name, imageUrl, description} = item
    return (
      <div className="planet-container">
        <img src={imageUrl} alt={`planet ${name}`} className="img" />
        <h1 className="planet-heading">{name}</h1>
        <p className="planet-text">{description}</p>
      </div>
    )
  }
}

export default PlanetItem
