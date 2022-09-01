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
        fetch(`https://api.github.com/users/${input.value}/repos`)
        .then((response) => {
            return response.json();
        })
        .then((repositories) => {
            reposData.innerHTML = "";

            // loop on repositories
            repositories.forEach(repo => {

                // create main div element
                let mainDiv = document.createElement("div");

                // create repo text
                let repoName = document.createTextNode(repo.name);

                mainDiv.appendChild(repoName);

                // create repository url anchor tag
                let url = document.createElement("a");
                
                // create repo url text
                let urlText = document.createTextNode("Visit Repo");

                url.appendChild(urlText);

                // add link to a tag
                url.href = repositories.html_url;

                // set target attribute
                url.setAttribute("target", "_blank");

                mainDiv.appendChild(url);

                // create stars count
                let starsSpan = document.createElement("span");

                // create stars count text
                let starsText = document.createTextNode(`Stars: ${repo.stargazers_count}`);

                starsSpan.appendChild(starsText);

                mainDiv.appendChild(starsSpan);

                // add class for main div
                mainDiv.className = "repo-box";

                reposData.appendChild(mainDiv);
            })
        });
    }
}