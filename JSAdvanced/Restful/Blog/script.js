$(document).ready(() => {

    const baseUrl = 'https://baas.kinvey.com/appdata/kid_ryFalYFDM/';
    const username = 'guest';

    //DOM Elements
    const posts = $('#posts');
    const viewComment = $('#view');
    const loadBtn = $('#load');
    let postName = $('#postname');
    let postContet = $('#postContent');
    let comments = $('#comments');
    let commentsContent = $('#commentsContent');
    

    let newPost = {
        name: 'Newpost',
        content: 'RAandom content',
        postId: '#34'
    }

    let newComment = {
        text: ' comment',
        postId: 3
    }


    loadAllMenus();


    loadBtn.on('click', loadAllMenus);
    viewComment.on('click', loadPostContent);

    //Create post and comment

    // postComments(newComment);
    // createPost(newPost);

    //SELECTMENU

    function loadAllMenus() {

        posts.html("<option>Loading...</option>");
        disableButtons();

        $.ajax({

            url: `${baseUrl}Posts`,
            headers: {
                'Authorization': 'Basic ' + btoa(username + ':' + username)
            },
            method: 'GET'

        }).then(displayMenu)
            .catch(() => console.log('ERROR'))
            .always(clear);
    };

    function displayMenu(data) {
        posts.empty('');
     
        for (let post of data) {
            $('<option>').text(post.name)
                .val(post.postId).appendTo(posts);
        }
    }

    //POSTS

    function loadPostContent() {
        disableButtons();
        let postId = posts.val();
        postName.text('Loading...');
      
        $.ajax({
            headers: {
                'Authorization': 'Basic ' + btoa(username + ':' + username)
            },
            url: `${baseUrl}Posts/?query={"postId":${postId}}`,
            method: 'GET'
        }).then(displayPost);
    }

    function displayPost(data) {
        let postId = data[0].postId;
       
        postName.text(data[0].name);
        
        postContet.text(data[0].content);
        

        loadComments(postId);
    }

    function createPost(post) {

        $.ajax({
            headers: {
                'Authorization': 'Basic ' + btoa(username + ':' + username)
            },
            url: `${baseUrl}Posts`,
            method: 'POST',
            dataType: 'application/json',
            data: {
                name: post.name,
                content: post.content,
                postId: post.postId
            }

        }).then(loadAllMenus)
            .catch(() => { console.log('Error with post creation') });


    }


    //COMMENTS

    function loadComments(id) {
        comments.text('Loading...');
        $.ajax({
            headers: {
                'Authorization': 'Basic ' + btoa(username + ':' + username)
            },
            url: `${baseUrl}Comments/?query={"postId":${id}}`,
            method: 'GET'
        }).then(displayComments)
            .always(() => {comments.text('Comments')})
            .always(clear);
    }

    function displayComments(data) {
        for (comment of data) {
            commentsContent.append(`<div>${comment.text}</div>`);
        }
        
    }

    function postComments(comment) {

        $.ajax({
            headers: {
                'Authorization': 'Basic ' + btoa(username + ':' + username)
            },
            url: `${baseUrl}Comments`,
            method: 'POST',
            dataType: 'aplication/JSON',
            data: {
                postId: comment.postId,
                text: comment.text
            }
        });
    }

   
    function disableButtons() {
        loadBtn.prop('disabled', true);
        viewComment.prop('disabled', true);
    }

    function clear() {
        loadBtn.prop('disabled', false);
        viewComment.prop('disabled', false);
    }


});