let input = document.querySelector(".git-repos input"),
btn = document.querySelector(".send-btn"),
reposData = document.querySelector(".show-data");

btn.onclick = function () {
    getRepos();
}

function getRepos() {
    if (input.value == "") {
        reposData.innerHTML = `<span>Please enter your github username</span>`
    } else {

    }
}