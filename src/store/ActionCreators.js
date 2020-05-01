import * as actionTypes from './ActionTypes';
import {Communicators} from '../Communicators';

const update = data => {
	return {
		type: actionTypes.DATA_UPDATE,
		data: data
	}
}

const updatePages = pagesData => {
	return {
		type: actionTypes.PAGES_DATA_UPDATE,
		pagesData: pagesData
	}
}

const updatePagination = pages => {
	return {
		type: actionTypes.PAGINATION_UPDATE,
		pagination: pages
	}
}

export const updateSearch = searchedTerm => {
	return {
		type: actionTypes.SEARCH_UPDATE,
		searchedTerm: searchedTerm
	}
}

export const isLoading = value => {
	return {
		type: actionTypes.LOADING,
		loading: value
	}
}

export const updateErrors = errors => {
	return {
		type: actionTypes.UPDATE_ERRORS,
		errors: errors
	}
}

const updateRepos = reposData => {
	return {
		type: actionTypes.REPOS_DATA_UPDATE,
		reposData: reposData
	}
}

const pagination = (current, last) => {

    let delta = 5;
    let range = 11;
    let pages = [];
  
    let left = current - delta;
    let right = current + delta;
  
    if (range >= last) {
      range = last;
    }
  
    if (current <= delta) {
      left = 1;
      right = range;
    }
  
    if (last - current < delta) {
      right = last;
    }
  
    range = right - left + 1;
    
    for (let i = 0; i < range; i++) {
      pages[i] = left;
      left ++;
    }
	return pages;
  }

export const updateData = searchedTerm => {
	
	return (dispatch, getState) => {
		dispatch(isLoading(true));
		Communicators.Fetch(searchedTerm, 1)
	    .then( myJson =>  {
	        if (myJson.status === 200) {
				let currentPage = 1;
				let lastPage = Math.ceil(myJson.data.total_count/12);
				dispatch(updatePages({
					currentPage: currentPage,
					lastPage: lastPage,
				}));
				dispatch(updateSearch(searchedTerm));
				dispatch(updatePagination(pagination(currentPage, lastPage)))
				dispatch(update(myJson.data.items));	
	        } else {
				dispatch(update([]));
			}
			dispatch(isLoading(false));
	      })
	    .catch( error => {
			let newErrors = [...getState().errors];
			console.log(newErrors);
			newErrors.push(error);
			dispatch(updateErrors(newErrors));
			dispatch(isLoading(false));
		});
	}
}

export const updateReposData = selectedUser => {
	return dispatch => {
		dispatch(isLoading(true));
		Communicators.FetchReposData(selectedUser)
	    .then( myJson =>  {
	        if (myJson.status === 200) {
	        	dispatch(updateRepos(myJson.data));
	        } else {
	        	dispatch(updateRepos([]));
			}
			dispatch(isLoading(false));
			document.documentElement.scrollTop = 0;	
	      })
	    .catch( error => alert(`Error: ${error}`));
	}
}

export const updatePagesData = (searchedTerm, selectedPage) => {
	return dispatch => {
		dispatch(isLoading(true));
		Communicators.Fetch(searchedTerm, selectedPage)
	    .then( myJson =>  {
	        if (myJson.status === 200) {
				let currentPage = selectedPage;
				let lastPage = Math.ceil(myJson.data.total_count/12);
				dispatch(updatePages({
					currentPage: currentPage,
					lastPage: lastPage,
				}));
				dispatch(updatePagination(pagination(currentPage, lastPage)))
				dispatch(update(myJson.data.items));
				document.documentElement.scrollTop = 0;	
	        } else {
	        	dispatch(update([]));
			}
			dispatch(isLoading(false));
	      })
	    .catch( error => alert(`Error: ${error}`));
	}
}

export const deleteError = errorId => {
	return (dispatch, getState) => {
		let errors = [...getState().errors];
		errors.splice(errorId, 1);
		dispatch(updateErrors(errors));
	}
}