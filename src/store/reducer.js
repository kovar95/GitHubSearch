import * as actionTypes from './ActionTypes';

const initialState = {
	data : [],
	reposData: [],
	pagesData: {
		currentPage: null,
		lastPage: null,
	},
	pagination: [],
	searchedTerm: '',
	loading : false,
	errors: [],
}

const reducer = (state = initialState, action) => {

	switch(action.type) {

		case actionTypes.DATA_UPDATE :
			return {
				...state,
				data: action.data
			};

		case actionTypes.REPOS_DATA_UPDATE :
			return {
				...state,
				reposData: action.reposData
			};

		case actionTypes.PAGES_DATA_UPDATE :
			return {
				...state,
				pagesData: action.pagesData
			};

		case actionTypes.PAGINATION_UPDATE :
			return {
				...state,
				pagination: action.pagination
			};
		
		case actionTypes.SEARCH_UPDATE :
			return {
				...state,
				searchedTerm: action.searchedTerm
			};

		case actionTypes.LOADING :
			return {
				...state,
				loading: action.loading
			};

		case actionTypes.UPDATE_ERRORS :
			return {
				...state,
				errors: action.errors
			};	
	
		default : return state;
	}
}

export { reducer }