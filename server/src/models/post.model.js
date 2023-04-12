var db = require('../db/db');

class PostModel {

    getPosts = async (req,res) => {
        let query = "SELECT * FROM posts";

        return new Promise((resolve,reject) => {
            db.query(query,(err,res1) => {
                if(err){
                    reject(err);
                }else {
                    resolve(res1);
                }
            })
        })        

    }
}

module.exports = new PostModel;