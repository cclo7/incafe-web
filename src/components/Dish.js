import React from 'react'
import PropTypes from 'prop-types'

const containerStyle = {
  margin: '10px 20px',
  paddingBottom: '5px'
}

const containerStyleWithBorder = Object.assign({}, containerStyle, {
  borderBottom: '1px solid #FFCC80'
})

const dishTextStyle = {

}

const descriptionTextStyle = {
  margin: '5px 10px',
  color: '#616161',
}

function getContainerStyle(isLastRow) {
  return isLastRow ? containerStyle : containerStyleWithBorder
}

const Dish = ({ dishText, descriptionText, isLastRow }) => (
  <div style={getContainerStyle(isLastRow)}>
    <p style={dishTextStyle}>{dishText}</p>
    <p style={descriptionTextStyle}>{descriptionText}</p>
  </div>
)

Dish.propTypes = {
  dishText: PropTypes.string.isRequired,
  descriptionText: PropTypes.string.isRequired,
  isLastRow: PropTypes.bool.isRequired
}

export default Dish
