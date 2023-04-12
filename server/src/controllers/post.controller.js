/*
Project : FullStack
Module : Posts Module
Version : 1.0
Author : Venkata SUdhakar Challagulla
Email : ch.v.sudhakar9@gmail.com
Controller : post.controller
*/
class PostsController {

getPosts = async(req,res)=>{

    var arr = [{post1:'desc1', post2:'desc2'}];
    var result = {'status': true, "code" :200, 'message':"Provide Property Id",
    "data":arr};
    res.send(result);
    return;
}

}

/******************************************************************************
 *                               Export
 ******************************************************************************/
module.exports = new PostsController;