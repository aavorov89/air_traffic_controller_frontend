import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { requestApiData, enqueueJob } from '../../actions'

const mapStateToProps = state => ({ planes: state.data });

const mapDispatchToProps = dispatch => bindActionCreators({ requestApiData, enqueueJob }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps);