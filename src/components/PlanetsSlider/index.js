// Write your code here
import {Component} from 'react'
import Slider from 'react-slick'
import PlanetItem from '../PlanetItem'
import './index.css'

class PlanetSlider extends Component {
  render() {
    const {planetsList} = this.props
    return (
      // eslint-disable-next-line react/no-unknown-property
      <div className="bg-container" testid="planets">
        <h1 className="heading">Planets</h1>
        <Slider
          settings={{
            dots: true,
            infinite: true,
            speed: 500,
            slideToShow: 1,
            slideToScroll: 1,
          }}
        >
          {planetsList.map(item => (
            <PlanetItem key={item.id} item={item} />
          ))}
        </Slider>
      </div>
    )
  }
}

export default PlanetSlider
