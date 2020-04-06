import { GTB_PRSNL_TKN, GTB_CID, GTB_CSECRET } from "../config";
const axios = require("axios");

export default class GithubSearch {
  constructor(q) {
    this.searchVal = q;
    this.perPage = 5;
  }

  async searchUser() {
    try {
      const uDetails = await axios.get(
        `https://api.github.com/users/${this.searchVal}`,
        {
          // headers: {
          //   Authorization: `token ${GTB_PRSNL_TKN}`,
          // },
          auth: {
            username: GTB_CID,
            password: GTB_CSECRET,
          },
        }
      );
      this.udetail = uDetails.data;
    } catch (error) {
      console.log("Hey this is eroor: ", error.response);
      throw error;
    }
  }
  async searchUserRepos() {
    try {
      const uRepos = await axios.get(
        `https://api.github.com/users/${this.searchVal}/repos?per_page=${this.perPage}`,
        {
          // headers: {
          //   Authorization: `token ${GTB_PRSNL_TKN}`,
          // },
          auth: {
            username: GTB_CID,
            password: GTB_CSECRET,
          },
        }
      );
      this.urepos = uRepos.data;
    } catch (error) {
      console.log("Hey this is eroor: ", error.response);
      throw error;
    }
  }
}
