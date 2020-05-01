import axios from 'axios';

class Communicators {

	
	static githubURL = 'https://api.github.com/search/users?q=';
	static singleUserURL= 'https://api.github.com/users/';

	static Fetch = (searchedTerm, page) => {
		return axios(`${Communicators.githubURL}${searchedTerm}+in:login+type:user&per_page=10&page=${page}`, {
			headers: {
				authorization: "token 99dcf2bc2a64aa568ef595dd2998c08443a8c011"
			  }
		})
	}

	static FetchSingleUser = searchedTerm => {
		return axios(`${Communicators.singleUserURL}${searchedTerm}`, {
			headers: {
				authorization: "token 99dcf2bc2a64aa568ef595dd2998c08443a8c011"
			  }
		})
	}

	static FetchReposData = selectedUser => {
		return axios(`${Communicators.singleUserURL}${selectedUser}/repos`, {
			headers: {
				authorization: "token 99dcf2bc2a64aa568ef595dd2998c08443a8c011"
			  }
		})
	}
	
}

export { Communicators };