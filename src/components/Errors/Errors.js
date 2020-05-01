import React, {Component} from 'react';
import './Errors.scss';
import {connect} from 'react-redux';
import Error from '../Error/Error';
import PropTypes from 'prop-types';

class Errors extends Component{ 
    
    render() {

        const {errors} = this.props;

        return(
            <div className="errors">
                {errors.map( (element, index) => <Error 
                        status={element.response.status}
                        message={element.response.statusText}
                        key={index}
                        id={index}
                />
							)
                    }
            </div>
        )
    }
}

Errors.propTypes = {
    errors: PropTypes.array,
};

const mapStateToProps = state => {
    return {
        errors: state.errors,
    }
}
   
const mapDispatchToProps = dispatch => {
    return {}
}
   
export default connect(mapStateToProps, mapDispatchToProps)(Errors);