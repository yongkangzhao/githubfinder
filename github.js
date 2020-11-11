class Github {
    constructor(){
        this.client_id = '2c533bd73b1aa3cf72b7';
        this.client_secret = 'e73531425f74a278d52075f7a7e743b918df876b';
        this.repos_count = 5;
        this.repos_sort = 'created: asc';
    }

    async getUser(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
        const profile = await profileResponse.json();
        const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);
        const repos = await repoResponse.json();
        return {
            profile,
            repos
        }
    }

    async getRatelimit() {
        const rateLimit = await fetch(`https://api.github.com/rate_limit?client_id=${this.client_id}&client_secret=${this.client_secret}`);
        return await rateLimit.json();


        // const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?client_id=${this.client_id}&client_secret=${this.client_secret}`);
        
    }
    









}