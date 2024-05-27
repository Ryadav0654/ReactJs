import conf from "../conf/conf";
import { Client, ID, Databases, Storage, Query } from "appwrite";

// define DBService class

export class DBService {
    client = new Client();
    databases;
    bucket;

    //define constructor 
    
    constructor(){
        this.client
        .setEndpoint(conf.appwriteUrl)
        .setProject(conf.appwriteProjectId);
        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.client)
    }

    // create the new post 
    async createPost({title, slug, content, featuredImage, status, userId}){
        try {
            return await this.databases.createDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    userId,
                }
            )
        } catch (error) {
            console.log("Appwrite service :: createPost :: error : ", error);
        }
    }

    // update the post 
    async updatepost(slug, {title, content, featuredImage, status, }){
        try{
            return await this.databases.updateDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                }
            )
        }catch(err){
            console.log("Appwrite service :: updatePost :: error : ", err);
        }
    }

    // delete the  post
    async deletePost(slug){
        try{
            await this.databases.deleteDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            )

            return true;
        }catch(err){
            console.log("Appwrite service :: deletePost :: error : ", err);
            return false;
        }
    }

    // get one post using slug
    async getPost(slug){
        try {
            return await this.databases.getDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug 
            )
        } catch (error) {
            console.log("Appwrite service :: gettPost :: error : ", error);
            return false;
        }
    }

    // get all the posts
    async getposts(queries = [Query.equal("status", "active")]){
        try {
            return await this.databases.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                queries
            )
        } catch (error) {
            console.log("Appwrite service :: getPosts :: error : ", error);
        }
    }

    // file upload service
    async uploadFile(file){
        try {
            return await this.bucket.createFile(
                conf.appwriteBucketId,
                ID.unique(),
                file
            )
        } catch (error) {
            
            console.log("Appwrite service :: uploadFile :: error : ", error);
            return false;
        }
    }

    // delete file
    async deleteFile(fileId){
        try {
            await this.bucket.deleteFile(
                conf.appwriteBucketId,
                fileId
            )
            return true;
        } catch (error) {
            console.log("Appwrite service :: deletePost :: error : ", error);
            return false;
        }
    }

    getFilePreview(fileId){
        return this.bucket.getFilePreview(
            conf.appwriteBucketId,
            fileId
        )
    }
}

const dbservice = new DBService()

export default dbservice;