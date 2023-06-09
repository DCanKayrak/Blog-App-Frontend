import * as actionTypes from './actionTypes';

export function changeCurrentPost(post){
    return{
        type:actionTypes.CHANGE_CURRENT_POST,
        payload:post
    }
}

export function getPostsSuccess(posts){
    return{
        type:actionTypes.GET_POSTS_SUCCESS,
        payload:posts
    }
}

export function getPosts(id){
    return function(dispatch){
        let url = "/api/posts/"

        if(id){
            url = "/api/posts/category/"+id;
        }

        fetch(url)
        .then(res => res.json())
        .then(result => dispatch(getPostsSuccess(result)))
    }
    
}