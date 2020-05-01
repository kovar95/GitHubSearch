import axios from 'axios';

class Communicators {

	
	static githubURL = 'https://api.github.com/search/users?q=';
	static singleUserURL = 'https://api.github.com/users/';
	static token = "23739f0b77e2b66c92dae1f49401e78ffc57956e"

	static Fetch = (searchedTerm, page) => {
		return axios(`${Communicators.githubURL}${searchedTerm}+in:login+type:user&per_page=10&page=${page}`, {
			headers: {
				authorization: "token " + this.token
			  }
		})
	}

	static FetchSingleUser = searchedTerm => {
		return axios(`${Communicators.singleUserURL}${searchedTerm}`, {
			headers: {
				authorization: "token " + this.token,
			  }
		})
	}

	static FetchReposData = selectedUser => {
		return axios(`${Communicators.singleUserURL}${selectedUser}/repos`, {
			headers: {
				authorization: "token " + this.token
			  }
		})
	}
	
}

export { Communicators };