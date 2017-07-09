import * as Constants from '../constants'

export default function(state = {}, action) {

  if (action.type === Constants.RECEIVE_MEALS) {
    const actionData = action.data
    const days = actionData.days[0]
    const { items } = actionData
    const icons = actionData['cor_icons']
    return Object.assign({}, state, {
      days: {
        [days.date]: days.cafes
      },
      items,
      icons
    })
  } else if (action.type === Constants.SELECT_MEAL) {
    return Object.assign({}, state, {
      selectedMeal: action.selectedMeal
    })
  }

  return state
}
