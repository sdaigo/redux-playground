import { connect } from 'react-redux'
import Component from '../components/app'

const mapStateToProps = state => ({
  state,
})

const mapDispatchToProps = dispatch => ({})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Component)
