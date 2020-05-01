import React, {Component} from 'react';
import './Error.scss';
import {connect} from 'react-redux';
import * as actionCreators from '../../store/ActionCreators';
import PropTypes from 'prop-types';

class Error extends Component{ 
    
    render() {

        const {status, message, id, deleteErrorWithThisId} = this.props;

        return(
            <div className="error">
                <h3>Error!</h3>
                <p>Status code: <strong>{status}</strong> </p>
                <p>Message: <strong>{message}!</strong> </p>
                <button onClick={ () => deleteErrorWithThisId(id)}>X</button>
            </div>
        )
    }
}

Error.propTypes = {
    status: PropTypes.number,
    message: PropTypes.string,
    id: PropTypes.number,
    deleteErrorWithThisId: PropTypes.func,
};

const mapStateToProps = state => {
    return {}
}
   
const mapDispatchToProps = dispatch => {
    return {
        deleteErrorWithThisId : id => dispatch(actionCreators.deleteError(id)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Error);