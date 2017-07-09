import { connect } from 'react-redux'
import MealSelector from '../components/MealSelector'
import { selectMeal } from '../actions'

const mapStateToProps = (state, ownProps) => {
  return {
    selectedMeal: state.selectedMeal
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onSelectMeal: mealName => {
      dispatch(selectMeal(mealName))
    }
  }
}

const MealSelectorContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(MealSelector)

export default MealSelectorContainer
