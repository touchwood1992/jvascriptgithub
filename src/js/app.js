import allUiElements from "./views/allUiElements";
import { getSearchValue, showUserUi, userUiReset } from "./views/searchView";
import { userRepoReset, userRepoSet } from "./views/reposView";
import { showLoading, removeAllLoading } from "./views/commonUi";
import GithubSearch from "./models/GithubSearch";
const { searchForm, searchValue } = allUiElements;

//App state is here
const state = {};

//Search form submit
searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  performSearch();
});

//Search key up
searchValue.addEventListener("keyup", (e) => {
  e.preventDefault();
  performSearch();
});

const performSearch = async () => {
  const serchVal = getSearchValue().trim();
  //Remove Previous All loading
  removeAllLoading(searchForm.classList[2]);
  //Reset Ui
  userUiReset();
  userRepoReset();
  //Show loading
  showLoading(searchForm);
  if (serchVal !== "") {
    //Get Result
    try {
      state.user = new GithubSearch(serchVal);
      await state.user.searchUser();
      await state.user.searchUserRepos();

      //If there is a user found
      if (state.user.udetail) {
        //Render this user to ui
        showUserUi(state.user.udetail);
        userRepoSet(state.user.urepos);
      } else {
        //alert("Search with valid user name");
      }
    } catch (error) {
      //alert(error);
    }
  } else {
    //alert("Please Enter Value");
  }
  //Hide loading
  removeAllLoading(searchForm.classList[2]);
};
