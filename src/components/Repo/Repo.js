import React, {Component} from 'react';
import './Repo.scss';
import {connect} from 'react-redux';
import * as actionCreators from '../../store/ActionCreators';
import forks from '../../images/fork.png';
import watch from '../../images/watch.png';
import star from '../../images/star.png';
import PropTypes from 'prop-types';

class Repo extends Component{

	render() {

		const {data} = this.props;
		const {name, description, created_at, forks_count, watchers_count, stargazers_count, html_url, license} = data;

		return (
			
			<a className="repo" href={html_url}>

				<span>{name}</span>
				<span className="desc">{description ? description : "No description for this repo!"}</span>
				<span className="create">Created: {created_at}</span>
				<div className="analitics">
					<div className="forks">
						<img src={forks} alt="forks"/>
						<span>{forks_count}</span>
					</div>
					<div className="watch">
						<img src={watch} alt="watch"/>
						<span>{watchers_count}</span>
					</div>
					<div className="star">
						<img src={star} alt="star"/>
						<span>{stargazers_count}</span>
					</div>
				</div>
				<div className="license">
					License: <span>{license ? license.name : "No license!"}</span>
				</div>
				
			</a>
		)
	}
}

Repo.propTypes = {
	data: PropTypes.object,
	updateReposData: PropTypes.func,
};

const mapStateToProps = state => {
 return {}
}

const mapDispatchToProps = dispatch => {
  return {
    updateReposData : username => dispatch(actionCreators.updateReposData(username)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Repo);