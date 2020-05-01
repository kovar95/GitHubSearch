import React, {Component} from 'react';
import './Search.scss';
import {connect} from 'react-redux';
import * as actionCreators from '../../store/ActionCreators';
import PropTypes from 'prop-types';

class Search extends Component {

	dataSearch(event) {
		if(event.key === "Enter"){
			this.props.onDataUpdate(event.target.value.trim());
		}
	  }

	addValue(event) {
		this.props.onSearchUpdate(event.target.value)
	}

	render() {
		const {searchedTerm} = this.props;

		return(
			<section  className="search" >
				<input type="text" 
					   autoComplete="off"
					   value={searchedTerm}
					   placeholder="Search" 
					   name="Search" 
					   onKeyUp={ e => this.dataSearch(e)} 
					   onChange={ e => this.addValue(e)} 
				/>		
			</section>
		)
	}
}

Search.propTypes = {
	searchedTerm: PropTypes.string,
	onDataUpdate: PropTypes.func,
	onSearchUpdate: PropTypes.func,
};

const mapStateToProps = state => {
  return {
    searchedTerm : state.searchedTerm,
  }
}

const mapDispatchToProps = dispatch => {
  return {
	onDataUpdate : data => dispatch(actionCreators.updateData(data)),
	onSearchUpdate : searchedTerm => dispatch(actionCreators.updateSearch(searchedTerm))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);