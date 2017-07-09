import React from 'react'
import PropTypes from 'prop-types'
import Dish from './Dish'

const stationTextContainerStyle = {
  background: '#FFCC80',
  padding: '5px 20px'
}

function renderItems(items) {
  if (!items) {
    return
  }

  const results = []
  for(let i = 0, length = items.length; i < length; i++) {
    const item = items[i]
    const isLastRow = i === length - 1
    results.push(<Dish dishText={item.label} descriptionText={item.description} key={'item-'+i} isLastRow={isLastRow}/>)
  }
  return results
}

const Station = ({ stationName, items }) => (
  <div>
    <div style={stationTextContainerStyle}>
      <p>{stationName}</p>
    </div>
    { renderItems(items) }
  </div>
)

Station.propTypes = {
  stationName: PropTypes.string,
  items: PropTypes.array
}

export default Station
