import Slider from 'react-slick'

import PlanetItem from '../PlanetItem'

import './index.css'

const PlanetsSlider = props => {
  const {planetsList} = props

  const setting = {
    slidesToShow: 1,
    slidesToScroll: 1,
  }

  return (
    <div className="app-container" data-testid="planets">
      <h1 className="planet-heading">PLANETS</h1>
      <Slider {...setting} className="slider-container">
        {planetsList.map(eachPlanet => (
          <PlanetItem key={eachPlanet.id} planetDetails={eachPlanet} />
        ))}
      </Slider>
    </div>
  )
}

export default PlanetsSlider
