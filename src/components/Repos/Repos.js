import React, {Component} from 'react';
import './Repos.scss';
import Repo from '../Repo/Repo';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

class Repos extends Component{

	render() {
		const {reposData} = this.props;
		
		return (
			<div className="repos">
				<span className="back" onClick={ () => {window.history.back()}}>
					BACK
				</span>
				<h1>Repos</h1>
				{reposData.map( element => <Repo 
										key={element.id}
										data={element}
									 />
							)
				}
			</div>
		)
	}
}

Repos.propTypes = {
	reposData: PropTypes.array,
};

const mapStateToProps = state => {
  return {
	reposData: state.reposData,
  }
}

const mapDispatchToProps = dispatch => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(Repos);