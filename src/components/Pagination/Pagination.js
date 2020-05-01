import React, {Component} from 'react';
import './Pagination.scss';
import {connect} from 'react-redux';
import * as actionCreators from '../../store/ActionCreators';
import PropTypes from 'prop-types';

class Pagination extends Component{

	render() {

		const {pagination, pagesData, updatePagesData, searchedTerm} = this.props;
    const {currentPage} = pagesData;

		return (
			<div className="pagination">
        {pagination.map( element => <span 
                                      key={element} 
                                      className={ currentPage === element ? 'selected' : ''}
                                      onClick={() => updatePagesData(searchedTerm, element)}
                                    >{element}</span>
          )}
      </div>
		)
	}
}

Pagination.propTypes = {
  pagination: PropTypes.array,
  pagesData: PropTypes.object,
  updatePagesData: PropTypes.func,
  searchedTerm: PropTypes.string,
};

const mapStateToProps = state => {
 return {
     pagesData: state.pagesData,
     pagination : state.pagination,
     searchedTerm: state.searchedTerm,
 }
}

const mapDispatchToProps = dispatch => {
  return {
    updatePagesData : (searchedTerm, slectedPage) => dispatch(actionCreators.updatePagesData(searchedTerm, slectedPage)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Pagination);