import DateUtil from './utils/date-util'
import * as Constants from './constants'

const URL_CAFE_BONAPPETIT_MENU = 'http://legacy.cafebonappetit.com/api/2/menus?'
const URL_PARAM_CAFE = 'cafe'
const URL_PARAM_DATE = 'date'
const AMPERSAND = '&'

function getMenuApiUrl(cafeId, date) {
  const dateString = DateUtil.getValidDateForApiFromDateObject(date);
  return URL_CAFE_BONAPPETIT_MENU + URL_PARAM_CAFE + '=' + cafeId
    + AMPERSAND + URL_PARAM_DATE + '=' + dateString
}

function receiveMeals(cafeId, date, json) {
  return {
    type: Constants.RECEIVE_MEALS,
    cafeId,
    date,
    data: json,
    receivedAt: Date.now()
  }
}

function requestMeals(cafeId, date) {
  return {
    type: Constants.REQUEST_MEALS,
    cafeId,
    date
  }
}

export function selectMeal(mealName) {
  return {
    type: Constants.SELECT_MEAL,
    selectedMeal: mealName
  }
}

export function fetchMeals(cafeId, date) {

  return function(dispatch) {
    dispatch(requestMeals(cafeId, date))

    return fetch(getMenuApiUrl(cafeId, date))
      .then(
        response => response.json(),
        error => console.log('Error:', error)
      )
      .then(
        json => dispatch(receiveMeals(cafeId, date, json))
      )
  }
}
