import React from 'react'
import PropTypes from 'prop-types'
import NavComponent from './Nav'
import MealSelectorContainer from '../containers/MealSelectorContainer'
import StationContainer from '../containers/StationContainer'

function renderStations(stations) {
  if (!stations) {
    return
  }

  const results = []
  for(let i = 0, length = stations.length; i < length; i++) {
    const station = stations[i]
    results.push(<StationContainer station={station} key={'station-'+i}/>)
  }
  return results
}

const Meal = ({date, cafeName, stations}) => (
  <div>
    <NavComponent title={cafeName}/>
    <MealSelectorContainer selectedMeal='breakfast'/>
    { renderStations(stations) }
  </div>
)

Meal.propTypes = {
  date: PropTypes.string.isRequired,
  cafeName: PropTypes.string,
  stations: PropTypes.array
}

export default Meal
