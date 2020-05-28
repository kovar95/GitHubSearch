import axios from 'axios';

class Communicators {
	
	static githubURL = 'https://api.github.com/search/users?q=';
	static singleUserURL = 'https://api.github.com/users/';
	static token = "cc0c58d5b6be2250a6a8fda3d6aa4be69cb69762";
	static auth = {
		authorization: "token " + this.token
	}

	static Fetch = (searchedTerm, page) => {
		return axios(`${this.githubURL}${searchedTerm}+in:login+type:user&per_page=10&page=${page}`, {
			headers: this.auth
		})
	}

	static FetchSingleUser = searchedTerm => {
		return axios(`${this.singleUserURL}${searchedTerm}`, {
			headers: this.auth
		})
	}

	static FetchReposData = selectedUser => {
		return axios(`${this.singleUserURL}${selectedUser}/repos`, {
			headers: this.auth
		})
	}
	
}

export { Communicators };