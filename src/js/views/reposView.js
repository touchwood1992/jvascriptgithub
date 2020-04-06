import allUiElements from "./allUiElements";
const { userRepos } = allUiElements;

export const userRepoSet = (repo) => {
  if (repo.length > 0) {
    let html = `<h2 class="mt-3 mb-2">Latest repos</h2>`;
    repo.forEach((repo) => {
      html += `<div class="card mb-2">
      <div class="card-body">
        <div class="row">
          <div class="col-md-6"><a href="${repo.html_url}" target="_blank">${repo.name}</a></div>
          <div class="col-md-6">
            <span class="badge badge-primary p-1">Stars: ${repo.stargazers_count}</span>
            <span class="badge badge-secondary p-1">Watchers: ${repo.watchers_count}</span>
            <span class="badge badge-success p-1">Forks: ${repo.forms_count}</span>
          </div>
        </div>
      </div>
      </div>`;
    });

    userRepos.innerHTML = html;
  }
};

export const userRepoReset = () => {
  userRepos.innerHTML = "";
};
