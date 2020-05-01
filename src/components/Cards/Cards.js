import React, {Component} from 'react';
import './Cards.scss';
import Card from '../Card/Card';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

class Cards extends Component{

	render() {
		const {data} = this.props;
		
		return (
			<div className="cards">
				<h1>{data.length ? "Searched Users" : "Search for users..." }</h1>
				{data.map( element => <Card 
										username={element.login}
										key={element.id}
									  />
							)
				}
			</div>
		)
	}
}

Cards.propTypes = {
	data: PropTypes.array,
};

const mapStateToProps = state => {
  return {
	data : state.data,
  }
}

const mapDispatchToProps = dispatch => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(Cards);