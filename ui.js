class UI {
    constructor() {
        this.profile = document.querySelector('#profile');
    }


    //show profile
    showProfile(user){
        console.log(user);
        let date = new Date(user.created_at);
        this.profile.innerHTML = `
            <div class="card card-body mb-3 profile">
                <div class="row">
                    <div class="col-md-3">
                        <img class="img-fluid mb-2" src ="${user.avatar_url}" />
                        <a href="${user.html_url}" target="_blank" class="btn btn-primary btn-block mb-1">View Profile</a>
                        <div class="col-md-12"> 
                            <span class="badge badge-primary col-md-12">Public Repos: ${user.public_repos}</span>
                            <span class="badge badge-primary col-md-12">Public Gists: ${user.public_gists}</span>
                            <span class="badge badge-primary col-md-12">Public Followers: ${user.followers}</span>
                            <span class="badge badge-primary col-md-12">Public Following: ${user.following}</span>
                        </div>
                    </div>
                    <div class="col-md-9">
                        <ul class="list-group">
                            <li class="list-group-item">Name: ${user.name}</li>
                            <li class="list-group-item">Company: ${user.company}</li>
                            <li class="list-group-item">Website/Blog: ${user.blog}</li>
                            <li class="list-group-item">Location: ${user.location}</li>
                            <li class="list-group-item">Member Since: ${(date.getMonth()+1) + '/' + date.getDate() + '/' + date.getFullYear()}</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div id="repos"></div>
        `;
    }

    showRepos(repos){
        console.log(repos);
        let date;
        let output = '<h3 class="page-heading mb-3">Latest Repos</h3>';
        output += '<div class="row">';
        repos.forEach((repo)=>{
            date = new Date(repo.pushed_at);
            
            output += `
                <div class="card card-body col-md-12 mb-2">
                <div class="row col-md-12">
                    <span class="heading row col-md-8">
                        <h5><a href="${repo.html_url}" target="_blank">${repo.name}</a></h5>
                    </span>
                    <span class="col-md-4">
                        <span class="badge badge-primary col-md-3">Stars: ${repo.stargazers_count}</span>
                        <span class="badge badge-primary col-md-3">Watchers: ${repo.watchers_count}</span>
                        <span class="badge badge-primary col-md-3">Forks: ${repo.forks_count}</span>
                        ${(repo.fork) ? '<span class="badge badge-warning col-md-2">Fork</span>' : '<span class="badge badge-primary col-md-2">Source</span>'}
                        
                    </span>
                    <div>${(date.getMonth()+1) + '/' + date.getDate() + '/' + date.getFullYear()}</div>
                </div>
                    <div>
                        <div>
                            ${(repo.description != null) ? repo.description : ''}
                        </div>
                    </div>
                </div>
            `
        });
        output += '</div>';
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