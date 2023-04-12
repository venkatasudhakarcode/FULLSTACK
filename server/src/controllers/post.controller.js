/*
Project : FullStack
Module : Posts Module
Version : 1.0
Author : Venkata SUdhakar Challagulla
Email : ch.v.sudhakar9@gmail.com
Controller : post.controller
*/
const PostModel = require('../models/post.model');
const express = require("express");

class PostsController {

getPosts = async(req,res)=>{

    var arr = [{post1:'desc1', post2:'desc2'}];

    let postData = await PostModel.getPosts();

    var result = {'status': true, "code" :200, 'message':"Succesfully Get Data",
    "data":postData};
    res.send(result);
    return;
}

}

/******************************************************************************
 *                               Export
 ******************************************************************************/
module.exports = new PostsController;