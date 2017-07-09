import { connect } from 'react-redux'
import Meal from '../components/Meal'

function getStations(cafe, mealName) {
  let index = 0
  if (mealName === 'lunch') {
    index = 1
  } else if (mealName === 'dinner') {
    index = 2
  }

  return cafe ? cafe.dayparts[0][index].stations : []
}

const mapStateToProps = (state, ownProps) => {
  if (!state.days || !state.days[ownProps.date]) {
    return {}
  }
  const cafe = state.days[ownProps.date][ownProps.cafeId]
  return {
    cafeName: cafe.name,
    date: ownProps.date,
    stations: getStations(cafe, state.selectedMeal)
  }
}

const MealContainer = connect(
  mapStateToProps,
)(Meal)

export default MealContainer
