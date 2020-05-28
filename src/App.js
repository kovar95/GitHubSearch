import React, {Fragment} from 'react';
import './App.scss';
import {Switch, Route} from 'react-router-dom';
import {connect} from 'react-redux';
import Cards from './components/Cards/Cards';
import Repos from './components/Repos/Repos';
import {Header} from './components/Header/Header';
import Pagination from './components/Pagination/Pagination';
import {Loader} from './components/Loader/Loader';
import {Hello} from './components/Hello/Hello';
import Errors from './components/Errors/Errors';
import PropTypes from 'prop-types';


class App extends React.Component {

  render() {
    const {loading, errors} = this.props;

    return (

        <Fragment>
          <Hello/>
          {loading && <Loader/>}
          <Switch> 
            <Route exact path="/" >
              <Header/>
              {!!errors.length && <Errors/>}
              <Cards/>
              <Pagination/>
            </Route>

            <Route exact path='/repos'>
              <Repos/>
            </Route>
          </Switch> 
        </Fragment>
    )
  }
}

App.propTypes = {
  loading: PropTypes.bool,
  errors: PropTypes.array,
};

const mapStateToProps = state => {
  return {
    loading : state.loading,
    errors : state.errors,
  }
}

const mapDispatchToProps = dispatch => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
