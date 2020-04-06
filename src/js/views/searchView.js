import allUiElements from "./allUiElements";
const { searchValue, UserLeft, UserRight } = allUiElements;

//Get Input Value
export const getSearchValue = () => searchValue.value;

//Left side HTML build
const leftUiSeach = (uObj) => {
  const html = `<img
src="${uObj.avatar_url}"
alt=""
class="img-thumbnail"
/>
<a target="_blank" href="${uObj.html_url}" class="btn btn-danger d-block mt-2">View Profile</a>`;

  UserLeft.innerHTML = html;
};

//Right side HTML build
const rightUiSearch = (uObj) => {
  const html = `<div class="badges-container">
  <span class="badge badge-primary p-2">Public Repos:${uObj.public_repos}</span>
  <span class="badge badge-secondary p-2">Followers:${uObj.followers}</span>
  <span class="badge badge-success p-2">Following: ${uObj.following}</span>
  <span class="badge badge-warning p-2">Public Gists: ${uObj.public_gists}</span>
</div>
<ul class="list-group mt-2">
  <li class="list-group-item">Company: ${uObj.company}</li>
  <li class="list-group-item">Website/Blog: ${uObj.blog}</li>
  <li class="list-group-item">Location: ${uObj.location}</li>
  <li class="list-group-item">Member Since: ${uObj.created_at}</li>
</ul>`;
  UserRight.innerHTML = html;
};
//Main user HTML build
export const showUserUi = (uObj) => {
  leftUiSeach(uObj);
  rightUiSearch(uObj);
};

//Reset User Html
export const userUiReset = (uObj) => {
  UserLeft.innerHTML = "";
  UserRight.innerHTML = "";
};
