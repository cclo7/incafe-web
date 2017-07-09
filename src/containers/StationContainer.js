import { connect } from 'react-redux'
import Station from '../components/Station'

const mapStateToProps = (state, ownProps) => {
  const itemsProp = ownProps.station.items
  const items = itemsProp ? itemsProp.map((itemId) => {
    return state.items[itemId]
  }) : []
  return {
    stationName: ownProps.station.label,
    items
  }
}

const StationContainer = connect(
  mapStateToProps,
)(Station)

export default StationContainer
