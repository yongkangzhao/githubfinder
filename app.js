// search input

const github = new Github;
const ui = new UI;


const searchUser = document.querySelector('#searchUser');

let timeout = null;
searchUser.addEventListener('keyup', (e) =>{
    clearTimeout(timeout);
    // get input text
    const userText = e.target.value;
    if (userText !== ''){
        // console.log(userText);
        // make http call
        timeout = setTimeout(() => {
            github.getUser(userText).then(data => {
                if(data.profile.message === 'Not Found'){
                    // show not found
                    ui.showAlert('User is not found', 'alert alert-danger');
                // }else if(data.profile.message.search('API rate limit exceeded')){
                    // ui.showAlert('API rate limit exceeded, try again later.', 'alert alert-danger');
                }else{
                    // show profile
                    ui.showProfile(data.profile);
                    ui.showRepos(data.repos);
                }
            })
        },1000)
    }else{
        ui.clearProfile();
    }
});

