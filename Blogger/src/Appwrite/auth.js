import conf from "../conf/conf";
import { Client, Account, ID } from "appwrite";

// define a AuthService class

export class AuthService {
  client = new Client();
  account;

  //create constructor 
  constructor() {
    this.client
      .setEndpoint(conf.appwriteUrl)
      .setProject(conf.appwriteProjectId);
    this.account = new Account(this.client);
  }

  //define createAccount function which create a account
  async createAccount({ email, password, name }) {
    try {
      const userAccount = await this.account.create(
        ID.unique(),
        email,
        password,
        name
      );
      if (userAccount) {
        //call the another method
        return this.login({ email, password });
      } else {
        return userAccount;
      }
    } catch (error) {
      throw error;
    }
  }

  //define login function => if user have account then user login that accout using email and password
  async login({ email, password }) {
    try {
      return await this.account.createEmailPasswordSession(email, password);
    } catch (error) {
      throw error;
    }
  }

  //define getCurrentUser function which gives the current user
  async getCurrentUser() {
    try {
      return await this.account.get();
    } catch (error) {
      console.log("appwrite service:: getCurrntUser :: error", error);
    }

    return null;
  }


  //define logout function which work is stop all sessions 
  async logout(){
    try {
        await this.account.deleteSessions();
    } catch (error) {
        console.log("Appwrite service :: logout :: error: ", error);
    }
  }
}

const authservice = new AuthService();
export default authservice;
