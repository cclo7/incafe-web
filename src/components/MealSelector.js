import React from 'react'
import PropTypes from 'prop-types'

const mealContainerStyle = {
  display: 'flex',
  margin: '15px',
}

const mealStyle = {
  display: 'flex',
  flexGrow: '1',
  flexShrink: '0',
  border: '1px solid #FF9800',
  marginRight: '-1px',
  justifyContent: 'center',
  alignItems: 'center',
  color: '#FF9800'
}

const selectedMealStyle = Object.assign({}, mealStyle, {
  background: '#FF9800',
  color: '#FFFFFF'
})

const mealButtonStyle = {
  width: '100%',
  height: '100%',
  padding: '5px 0'
}

function getMealStyle(meal, selectedMeal) {
  return meal === selectedMeal ? selectedMealStyle : mealStyle
}

const MealSelector = ({ selectedMeal, onSelectMeal }) => (
  <ul style={mealContainerStyle}>
    <li style={getMealStyle('breakfast', selectedMeal)}><button style={mealButtonStyle} onClick={() => onSelectMeal('breakfast')}>Breakfast</button></li>
    <li style={getMealStyle('lunch', selectedMeal)}><button style={mealButtonStyle} onClick={() => onSelectMeal('lunch')}>Lunch</button></li>
    <li style={getMealStyle('dinner', selectedMeal)}><button style={mealButtonStyle} onClick={() => onSelectMeal('dinner')}>Dinner</button></li>
  </ul>
)

MealSelector.propTypes = {
  selectedMeal: PropTypes.string,
  onSelectMeal: PropTypes.func
}

export default MealSelector
