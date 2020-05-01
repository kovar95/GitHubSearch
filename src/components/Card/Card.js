import React, {Component} from 'react';
import './Card.scss';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import * as actionCreators from '../../store/ActionCreators';
import {Communicators} from '../../Communicators';
import loc from '../../images/location.png';
import mini from '../../images/mini-loader.gif';
import PropTypes from 'prop-types';

class Card extends Component{

	state = {
		data: {},
	}

	componentDidMount() {
		const {username, onLoad, addError, errors} = this.props;
		onLoad(true);
		Communicators.FetchSingleUser(username)
			.then( myJson => {
				if(myJson.status === 200) {
					this.setState({
						data:myJson.data,
					}, () => onLoad(false))
				} else {
					alert ("Mistake!");
				}
			})
			.catch(error => {
				let myErrors = [...errors];
				myErrors.push(error);
				addError(myErrors);
			});	
	}

	render() {
		const {username, updateReposData} = this.props;
		const {data} = this.state;
		const {avatar_url, bio, name, location} = data;

		return (
			<Link to='repos' className="card" onClick={() => updateReposData(username)}>
				<img src={avatar_url ? avatar_url : mini} alt="avatar"/>
				<div className="details">
					<h4 >{name}</h4>
					<p>{bio ? bio : "No description for this user!"}</p>
				</div>
				<div className="location">
					<img src={loc} alt="location"/>
					<span>{location ? location : "Remote"}</span>
				</div>
			</Link>	
		)
	}
}

Card.propTypes = {
	errors: PropTypes.array,
	username : PropTypes.string,
	onLoad: PropTypes.func,
	addError: PropTypes.func,
	updateReposData : PropTypes.func,
  };

const mapStateToProps = state => {
 return {
	 errors : state.errors,
 }
}

const mapDispatchToProps = dispatch => {
  return {
	updateReposData : username => dispatch(actionCreators.updateReposData(username)),
	onLoad : value => dispatch(actionCreators.isLoading(value)),
	addError : newErrors => dispatch(actionCreators.updateErrors(newErrors)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Card);