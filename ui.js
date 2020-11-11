class UI {
    constructor() {
        this.profile = document.querySelector('#profile');
    }


    //show profile
    showProfile(user){
        // console.log(user);
        this.profile.innerHTML = `
            <div class="card card-body mb-3 profile">
                <div class="row">
                    <div class="col-md-3">
                        <img class="img-fluid mb-2" src ="${user.avatar_url}" />
                        <a href="${user.html_url}" target="_blank" class="btn btn-primary btn-block mb-4">View Profile</a>
                    </div>
                    
                    <div class="col-md-9">
                        <span class="badge badge-primary">Public Repos: ${user.public_repos}</span>
                        <span class="badge badge-success">Public Gists: ${user.public_gists}</span>
                        <span class="badge badge-warning">Public Followers: ${user.followers}</span>
                        <span class="badge badge-info">Public Following: ${user.following}</span>
                        <br><br>
                        <ul class="list-group">
                            <li class="list-group-item">Company: ${user.company}</li>
                            <li class="list-group-item">Website/Blog: ${user.blog}</li>
                            <li class="list-group-item">Location: ${user.location}</li>
                            <li class="list-group-item">Member Since: ${user.created_at}</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div id="repos"></div>
        `;
    }

    showRepos(repos){

        let output = '<h3 class="page-heading mb-3">Latest Repos</h3>';
        repos.forEach((repo)=>{
            output += `
                <div class="card card-body mb-2">
                    <div class="row col-md-13">
                        <div class="col-md-9">
                            <a href="${repo.html_url}" target="_blank">${repo.name}</a>
                        </div>
                        <div class="col-md-3.5">
                        <span class="badge badge-primary col-md-2.33">Stars: ${repo.stargazers_count}</span>
                        <span class="badge badge-success col-md-2.33">Watchers: ${repo.watchers_count}</span>
                        <span class="badge badge-warning col-md-2.33">Forks: ${repo.forks_count}</span>
                        </div>
                    </div>
                </div>
            `
        });
        document.querySelector('#repos').innerHTML = output;
    }


    clearProfile(){
        this.profile.innerHTML = '';
    }

    clearAlert(){
        const currentAlert = document.querySelector('.alert');
        if(currentAlert){
            currentAlert.remove();
        }
    }

    showAlert(message, className){
        this.clearAlert();
        const div = document.createElement('div');
        div.className = className;
        div.appendChild(document.createTextNode(message));
        const container = document.querySelector('.searchContainer');
        const search = document.querySelector('.search');
        container.insertBefore(div, search);
        setTimeout(this.clearAlert, 3000);
    }
}