// Started at 12:24 6-11-2022

extends layouts/main-layout.pug

block content   
    
    if errorMessage
        span.errorMessage #{errorMessage}
    else 
        script.
            var chatId = '!{chat._id}';

        .chatPageContainer
            .chatTitleBarContainer
                +createChatImage(chat, userLoggedIn)
                span#chatName(data-toggle="modal", data-target="#chatNameModal")
            
            .mainContentContainer
                .chatContainer
                    ul.chatMessages
                    .footer
                        textarea.inputTextbox(name="messageInput", placeholder="Type a message...")
                        button.sendMessageButton
                            i.fas.fa-paper-plane
        +createChatNameModal(chat)

block scripts
    script(src="/js/chatPage.js")

:root {
    --blue: #1FA2F1;
    --blueLight: #9BD1F9;
    --blueBackground: rgba(212, 237, 255, 0.6);
    --buttonHoverBg: #d4edff;
    --lightGrey: rgb(230, 236, 240);
    --spacing: 15px;
    --greyText: rgb(101, 119, 134);
    --greyButtonText: rgba(0,0,0,0.34);
    --red: rgb(226,34,94);
    --redBackground: rgba(226,34,94,0.1);
    --green: rgb(23,191,99);
    --greenBackground: rgba(23,191,99,0.1);
}

html, body {
    height: 100%;
    min-height: 100%;
    background-color: #fff;
    font-weight: 300;
}

* {
    outline: none !important;
}

a {
    color: inherit;
}

a:hover {
    color: inherit;
    text-decoration: none;
}

h1 {
    font-size: 19px;
    font-weight: 800;
    margin: 0;
}

nav {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    height: 100%;
}

nav a {
    padding: 10px;
    font-size: 30px;
    width: 55px;
    height: 55px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #212529;
}

nav a.blue {
    color: var(--blue);
}

nav a:hover {
    background-color: var(--buttonHoverBg);
    color: var(--blue);
    border-radius: 50%;
}

.wrapper {
    display: flex;
    flex-direction: column;
    height: 100%;
}

.wrapper > .row {
    margin: 0;
    height: 100%;
}

button {
    background-color: transparent;
    border: none;
    color: var(--greyButtonText);
}

button i,
button span {
    pointer-events: none;
}

.mainSectionContainer {
    padding:  0;
    border-left: 1px solid var(--lightGrey);
    border-right: 1px solid var(--lightGrey);
    display: flex;
    flex-direction: column;
}

.titleContainer {
    height: 53px;
    padding: 0 var(--spacing);
    display: flex;
    align-items: center;
    border-bottom: 1px solid var(--lightGrey);
    flex-shrink: 0;
}

.titleContainer h1 {
    flex: 1;
}

.postFormContainer {
    display: flex;
    padding: var(--spacing);
    border-bottom: 10px solid rgb(230, 236, 240);
    flex-shrink: 0;
}

.modal .postFormContainer {
    border: none;
    padding: 0;
    padding-top: var(--spacing);
}

.modal .post {
    padding: 0 0 var(--spacing) 0;
}

.userImageContainer {
    width: 50px;
    height: 50px;
}

.userImageContainer img {
    width: 100%;
    border-radius: 50%;
    background-color: white;
}

.textareaContainer {
    flex: 1;
    padding-left: var(--spacing);
}

.textareaContainer textarea {
    width: 100%;
    border: none;
    resize: none;
    font-size: 19px;
}

#submitPostButton {
    background-color: var(--blue);
    color: white;
    border: none;
    border-radius: 40px;
    padding: 7px 15px;
}

#submitPostButton:disabled {
    background-color: var(--blueLight);
}

.post {
    display: flex;
    flex-direction: column;
    padding: var(--spacing);
    cursor: pointer;
    border-bottom: 1px solid var(--lightGrey);
    flex-shrink: 0;
}

.mainContentContainer {
    flex: 1;
    display: flex;
}

.postContentContainer {
    padding-left: var(--spacing);
    display: flex;
    flex-direction: column;
    flex: 1;
}

.username,
.date {
    color: var(--greyText)
}

.displayName {
    font-weight: bold;
}

.postFooter {
    display: flex;
    align-items: center;
}

.postFooter .postButtonContainer {
    flex: 1;
    display: flex;
}

.postFooter .postButtonContainer button {
    padding: 2px 5px;
}

.header a:hover {
    text-decoration: underline;
}

.header a,
.header span {
    padding-right: 5px;
}

.postButtonContainer button:hover {
    background-color: #d4edff;
    color: var(--blue);
    border-radius: 50%;
}

.postButtonContainer.red button.active {
    color: var(--red);
}

.postButtonContainer.red button:hover {
    color: var(--red);
    background-color: var(--redBackground)
}

.postButtonContainer.green button.active {
    color: var(--green);
}

.postButtonContainer.green button:hover {
    color: var(--green);
    background-color: var(--greenBackground)
}

.postActionContainer {
    padding-left: 35px;
    font-size: 13px;
    color: var(--greyText);
    margin-bottom: 5px;
}

.replyFlag {
    margin-bottom: 5px;
}

.replyFlag a {
    color: var(--blue);
}

.post.largeFont .postBody,
.post.largeFont .postFooter {
    font-size: 23px;
}

.postContentContainer .header {
    display: flex;
}

.postContentContainer .header .date {
    flex: 1;
}

.errorMessage {
    padding: var(--spacing);
}

.coverPhotoSection {
    height: 180px;
    background-color: var(--blue);
    position: relative;
}

.profileHeaderContainer .userImageContainer {
    width: 132px;
    height: 132px;
    margin-left: var(--spacing);
    position: absolute;
    bottom: -66px;

    display: flex;
    align-items: center;
    justify-content: center;
}

.profileHeaderContainer .userImageContainer img {
    border: 4px solid #fff;
}

.profileHeaderContainer .profileButtonsContainer {
    text-align: right;
    padding: var(--spacing);
    min-height: 66px;
}

.profileButton,
.followButton {
    border: 1px solid var(--blue);
    color: var(--blue);
    font-weight: bold;
    padding: 5px 15px;
    border-radius: 60px;
    display: inline-block;
    margin-left: var(--spacing);
}

.profileButton:hover,
.followButton:hover {
    background-color: var(--blueBackground);
}

.followButton.following {
    background-color: var(--blue);
    color: #fff;
}

.profileHeaderContainer .userDetailsContainer {
    display: flex;
    flex-direction: column;
    padding: 0 var(--spacing);
}

.followersContainer .value {
    font-weight: bold;
    margin-right: 5px;
}

.followersContainer span:not(.value) {
    color: var(--greyText);
}

.followersContainer a {
    margin-right: 15px;
}

.followersContainer a:hover {
    border-bottom: 1px solid #000;
}

.tabsContainer {
    display: flex;
    border-bottom: 1px solid var(--lightGrey);
    flex-shrink: 0;
}

.tab {
    flex: 1;
    height: 52px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--greyText);
    font-weight: bold;
}

.tab.active {
    color: var(--blue);
    border-bottom: 2px solid var(--blue);
}

.tab:hover {
    color: var(--blue);
    background-color: var(--blueBackground);
}

.noResults {
    padding: var(--spacing);
}

.resultsContainer {
    display: flex;
    flex-direction: column;
}

.resultsContainer .user {
    padding: var(--spacing);
    display: flex;
    border-bottom: 1px solid var(--lightGrey);
}

.user .userDetailsContainer {
    flex: 1;
    padding: 0 var(--spacing)
}

.profilePictureButton,
.coverPhotoButton {
    position: absolute;
    font-size: 50px;
    color: rgba(0,0,0,0.6);
    display: none;
}

.userImageContainer:hover .profilePictureButton,
.coverPhotoSection:hover .coverPhotoButton {
    display: block;
}

.coverPhotoContainer {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
}

.coverPhotoContainer img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

#imagePreview,
#coverPreview {
    width: 100%;
    display: block;
 
    /* This rule is very important, please don't ignore this */
    max-width: 100%;
}

.pinButton.active {
    color: var(--blue);
}

.pinnedPostText {
    font-size: 12px;
    color: var(--greyText);
}

.pinnedPostContainer {
    border-bottom: 10px solid rgb(230,236,240);
}

.searchBarContainer {
    position: relative;
    color: var(--greyText);
    padding: 10px var(--spacing);
}

.searchBarContainer i {
    position: absolute;
    top: 20px;
    left: 28px;
}

.searchBarContainer #searchBox {
    height: 36px;
    width: 100%;
    padding: 5px 15px 5px 40px;
    border-radius: 50px;
    background-color: var(--lightGrey);
    border: none;
    color: var(--greyText);
}

.chatPageContainer {
    display: flex;
    flex-direction: column;
    min-height: 0;
    flex: 1;
}

.chatTitleBar {
    border-bottom: 1px solid var(--lightGrey);
    display: flex;
    align-items: center;
    min-height: 60px;
    padding: 10px;
}

.chatTitleBar label {
    margin: 0 10px 0 0;
}

#userSearchTextbox {
    border: none;
    flex: 1;
    font-weight: 200;
    min-width: 350px;
}

#createChatButton {
    border: none;
    background-color: var(--blue);
    color: #fff;
    padding: 7px 20px;
    margin: 10px auto;
    border-radius: 40px;
}

#createChatButton:disabled {
    background-color: var(--lightGrey);
    color: var(--greyText);
}

.selectedUser {
    font-weight: 300;
    background-color: #CBE5FE;
    color: #0084ff;
    padding: 5px;
    border-radius: 3px;
    margin: 5px 5px 0 0;
    display: inline-block;
}

.resultListItem {
    padding: 7px;
    display: flex;
    align-items: center;
    flex-shrink: 0;
    border-bottom: 1px solid var(--lightGrey);
}

.resultListItem:hover {
    background-color: #F2F2F2;
}

.resultsDetailsContainer {
    display: flex;
    flex-direction: column;
    flex: 1;
}

.resultsDetailsContainer .heading {
    font-weight: 500;
}

.resultsDetailsContainer .subText {
    color: var(--greyText);
    font-size: 14px;
}

.resultListItem img {
    height: 100%;
    width: 100%;
    border-radius: 50%;
}

.resultsImageContainer {
    height: 40px;
    width: 40px;
    position: relative;
    margin-right: 10px;
    display: flex;
    align-items: center;
    padding: 5px;
}

.groupChatImage img {
    height: 65%;
    width: 65%;
    position: absolute;
    bottom: 0;
    margin: 0;
    border: 2px solid #fff;
}

.groupChatImage img:first-of-type {
    top: 0;
    right: 0;
}

.ellipsis {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

.chatTitleBarContainer {
    border-bottom: 1px solid var(--lightGrey);
    display: flex;
    align-items: center;
    padding: var(--spacing);
}

#chatName {
    width: 100%;
    border: 1px solid transparent;
    padding: 0 5px;
}

#chatName:hover {
    border: 1px solid var(--lightGrey);
    cursor: text;
}

.chatContainer {
    flex: 1;
    display: flex;
    flex-direction: column;
    overflow-y: hidden;
}

.chatContainer .footer {
    display: flex;
    padding: var(--spacing);
    flex-shrink: 0px;
}

.chatContainer .footer textarea {
    flex: 1;
    resize: none;
    background-color: rgba(0,0,0,0.05);
    border-radius: 18px;
    border: none;
    padding: 8px 12px;
    height: 38px;
}

.chatContainer .footer button {
    background-color: transparent;
    color: var(--blue);
    font-size: 24px;
}

.chatMessages {
    flex: 1;
    display: flex;
    flex-direction: column;
    overflow-y: auto;
    padding: var(--spacing);
}

.chatImagesContainer {
    display: flex;
    flex-direction: row-reverse;
    height: 100%;
    margin-right: 10px;
}

.chatImagesContainer img {
    width: 40px;
    height: 40px;
    border: 2px solid #fff;
    border-radius: 50%;
}

.chatImagesContainer .userCount {
    height: 40px;
    width: 40px;
    background-color: #f1f1f1;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    border: 2px solid #fff;
}

.chatImagesContainer img:not(:last-child),
.chatImagesContainer .userCount {
    margin-left: -10px;
}

#chatNameTextbox {
    width: 100%;
}

.chatMessages .message {
    padding-bottom: 2px;
    list-style: none;
    display: flex;
    align-items: flex-end;
    flex-shrink: 0;
    -webkit-flex: 0;
}

.chatMessages .message .messageBody {
    background-color: #f1f0f0;
    padding: 6px 12px;
    border-radius: 18px;
    font-size: 14px;
}

.chatMessages .message .messageContainer {
    display: flex;
    flex-direction: column;
    max-width: 55%;
}

$(document).ready(() => {
    $.get(`/api/chats/${chatId}`, (data) => $("#chatName").text(getChatName(data)))
})

$("#chatNameButton").click(() => {
    var name = $("#chatNameTextbox").val().trim();
    
    $.ajax({
        url: "/api/chats/" + chatId,
        type: "PUT",
        data: { chatName: name },
        success: (data, status, xhr) => {
            if(xhr.status != 204) {
                alert("could not update");
            }
            else {
                location.reload();
            }
        }
    })
})

$(".sendMessageButton").click(() => {
    messageSubmitted();
})

$(".inputTextbox").keydown((event) => {
    
    if(event.which === 13) {
        messageSubmitted();
        return false;
    }
})

function messageSubmitted() {
    var content = $(".inputTextbox").val().trim();

    if(content != "") {
        sendMessage(content)
        $(".inputTextbox").val("");
    }
}

function sendMessage(content) {
    $.post("/api/messages", { content: content, chatId: chatId }, (data, status, xhr) => {

        addChatMessageHtml(data)
        
    })
}

function addChatMessageHtml(message) {
    if(!message || !message._id) {
        alert("Message is not valid");
        return;
    }

    var messageDiv = createMessageHtml(message);

    $(".chatMessages").append(messageDiv)
}

function createMessageHtml(message) {

    var isMine = message.sender._id == userLoggedIn._id;
    var liClassName = isMine ? "mine" : "theirs";

    return `<li class='message ${liClassName}'>
                <div class='messageContainer'>
                    <span class='messageBody'> 
                        ${message.content}
                    </span>
                </div>
            </li>`;
}

const express = require('express');
const app = express();
const router = express.Router();
const bodyParser = require("body-parser")
const User = require('../../schemas/UserSchema');
const Post = require('../../schemas/PostSchema');
const Chat = require('../../schemas/ChatSchema');
const Message = require('../../schemas/MessageSchema');

app.use(bodyParser.urlencoded({ extended: false }));

router.post("/", async (req, res, next) => {
    if(!req.body.content || !req.body.chatId) {
        console.log("Invalid data passed into request");
        return res.sendStatus(400);
    }

    var newMessage = {
        sender: req.session.user._id,
        content: req.body.content,
        chat: req.body.chatId
    };

    Message.create(newMessage)
    .then(message => {
        res.status(201).send(message);
    })
    .catch(error => {
        console.log(error);
        res.sendStatus(400);
    })
})

module.exports = router;

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const messageSchema = new Schema({
    sender: { type: Schema.Types.ObjectId, ref: 'User' },
    content: { type: String, trim: true },
    chat: { type: Schema.Types.ObjectId, ref: 'Chat' },
    readBy: [{ type: Schema.Types.ObjectId, ref: 'User' }]
}, { timestamps: true });

module.exports = mongoose.model('Message', messageSchema);

// Globals
var cropper;
var timer;
var selectedUsers = [];

$("#postTextarea, #replyTextarea").keyup(event => {
    var textbox = $(event.target);
    var value = textbox.val().trim();

    var isModal = textbox.parents(".modal").length == 1;
    
    var submitButton = isModal ? $("#submitReplyButton") : $("#submitPostButton");

    if(submitButton.length == 0) return alert("No submit button found");

    if (value == "") {
        submitButton.prop("disabled", true);
        return;
    }

    submitButton.prop("disabled", false);
})

$("#submitPostButton, #submitReplyButton").click(() => {
    var button = $(event.target);

    var isModal = button.parents(".modal").length == 1;
    var textbox = isModal ? $("#replyTextarea") : $("#postTextarea");

    var data = {
        content: textbox.val()
    }

    if (isModal) {
        var id = button.data().id;
        if(id == null) return alert("Button id is null");
        data.replyTo = id;
    }

    $.post("/api/posts", data, postData => {

        if(postData.replyTo) {
            location.reload();
        }
        else {
            var html = createPostHtml(postData);
            $(".postsContainer").prepend(html);
            textbox.val("");
            button.prop("disabled", true);
        }
    })
})

$("#replyModal").on("show.bs.modal", (event) => {
    var button = $(event.relatedTarget);
    var postId = getPostIdFromElement(button);
    $("#submitReplyButton").data("id", postId);

    $.get("/api/posts/" + postId, results => {
        outputPosts(results.postData, $("#originalPostContainer"));
    })
})

$("#replyModal").on("hidden.bs.modal", () => $("#originalPostContainer").html(""));

$("#deletePostModal").on("show.bs.modal", (event) => {
    var button = $(event.relatedTarget);
    var postId = getPostIdFromElement(button);
    $("#deletePostButton").data("id", postId);
})

$("#confirmPinModal").on("show.bs.modal", (event) => {
    var button = $(event.relatedTarget);
    var postId = getPostIdFromElement(button);
    $("#pinPostButton").data("id", postId);
})

$("#unpinModal").on("show.bs.modal", (event) => {
    var button = $(event.relatedTarget);
    var postId = getPostIdFromElement(button);
    $("#unpinPostButton").data("id", postId);
})

$("#deletePostButton").click((event) => {
    var postId = $(event.target).data("id");

    $.ajax({
        url: `/api/posts/${postId}`,
        type: "DELETE",
        success: (data, status, xhr) => {

            if(xhr.status != 202) {
                alert("could not delete post");
                return;
            }
            
            location.reload();
        }
    })
})

$("#pinPostButton").click((event) => {
    var postId = $(event.target).data("id");

    $.ajax({
        url: `/api/posts/${postId}`,
        type: "PUT",
        data: { pinned: true },
        success: (data, status, xhr) => {

            if(xhr.status != 204) {
                alert("could not delete post");
                return;
            }
            
            location.reload();
        }
    })
})

$("#unpinPostButton").click((event) => {
    var postId = $(event.target).data("id");

    $.ajax({
        url: `/api/posts/${postId}`,
        type: "PUT",
        data: { pinned: false },
        success: (data, status, xhr) => {

            if(xhr.status != 204) {
                alert("could not delete post");
                return;
            }
            
            location.reload();
        }
    })
})

$("#filePhoto").change(function(){    
    if(this.files && this.files[0]) {
        var reader = new FileReader();
        reader.onload = (e) => {
            var image = document.getElementById("imagePreview");
            image.src = e.target.result;

            if(cropper !== undefined) {
                cropper.destroy();
            }

            cropper = new Cropper(image, {
                aspectRatio: 1 / 1,
                background: false
            });

        }
        reader.readAsDataURL(this.files[0]);
    }
    else {
        console.log("nope")
    }
})

$("#coverPhoto").change(function(){    
    if(this.files && this.files[0]) {
        var reader = new FileReader();
        reader.onload = (e) => {
            var image = document.getElementById("coverPreview");
            image.src = e.target.result;

            if(cropper !== undefined) {
                cropper.destroy();
            }

            cropper = new Cropper(image, {
                aspectRatio: 16 / 9,
                background: false
            });

        }
        reader.readAsDataURL(this.files[0]);
    }
})

$("#imageUploadButton").click(() => {
    var canvas = cropper.getCroppedCanvas();

    if(canvas == null) {
        alert("Could not upload image. Make sure it is an image file.");
        return;
    }

    canvas.toBlob((blob) => {
        var formData = new FormData();
        formData.append("croppedImage", blob);

        $.ajax({
            url: "/api/users/profilePicture",
            type: "POST",
            data: formData,
            processData: false,
            contentType: false,
            success: () => location.reload()
        })
    })
})

$("#coverPhotoButton").click(() => {
    var canvas = cropper.getCroppedCanvas();

    if(canvas == null) {
        alert("Could not upload image. Make sure it is an image file.");
        return;
    }

    canvas.toBlob((blob) => {
        var formData = new FormData();
        formData.append("croppedImage", blob);

        $.ajax({
            url: "/api/users/coverPhoto",
            type: "POST",
            data: formData,
            processData: false,
            contentType: false,
            success: () => location.reload()
        })
    })
})

$("#userSearchTextbox").keydown((event) => {
    clearTimeout(timer);
    var textbox = $(event.target);
    var value = textbox.val();

    if (value == "" && (event.which == 8 || event.keyCode == 8)) {
        // remove user from selection
        selectedUsers.pop();
        updateSelectedUsersHtml();
        $(".resultsContainer").html("");

        if(selectedUsers.length == 0) {
            $("#createChatButton").prop("disabled", true);
        }

        return;
    }

    timer = setTimeout(() => {
        value = textbox.val().trim();

        if(value == "") {
            $(".resultsContainer").html("");
        }
        else {
            searchUsers(value);
        }
    }, 1000)

})

$("#createChatButton").click(() => {
    var data = JSON.stringify(selectedUsers);

    $.post("/api/chats", { users: data }, chat => {

        if(!chat || !chat._id) return alert("Invalid response from server.");

        window.location.href = `/messages/${chat._id}`;
    })
})

$(document).on("click", ".likeButton", (event) => {
    var button = $(event.target);
    var postId = getPostIdFromElement(button);
    
    if(postId === undefined) return;

    $.ajax({
        url: `/api/posts/${postId}/like`,
        type: "PUT",
        success: (postData) => {
            
            button.find("span").text(postData.likes.length || "");

            if(postData.likes.includes(userLoggedIn._id)) {
                button.addClass("active");
            }
            else {
                button.removeClass("active");
            }

        }
    })

})

$(document).on("click", ".retweetButton", (event) => {
    var button = $(event.target);
    var postId = getPostIdFromElement(button);
    
    if(postId === undefined) return;

    $.ajax({
        url: `/api/posts/${postId}/retweet`,
        type: "POST",
        success: (postData) => {            
            button.find("span").text(postData.retweetUsers.length || "");

            if(postData.retweetUsers.includes(userLoggedIn._id)) {
                button.addClass("active");
            }
            else {
                button.removeClass("active");
            }

        }
    })

})

$(document).on("click", ".post", (event) => {
    var element = $(event.target);
    var postId = getPostIdFromElement(element);

    if(postId !== undefined && !element.is("button")) {
        window.location.href = '/posts/' + postId;
    }
});

$(document).on("click", ".followButton", (e) => {
    var button = $(e.target);
    var userId = button.data().user;
    
    $.ajax({
        url: `/api/users/${userId}/follow`,
        type: "PUT",
        success: (data, status, xhr) => { 
            
            if (xhr.status == 404) {
                alert("user not found");
                return;
            }
            
            var difference = 1;
            if(data.following && data.following.includes(userId)) {
                button.addClass("following");
                button.text("Following");
            }
            else {
                button.removeClass("following");
                button.text("Follow");
                difference = -1;
            }
            
            var followersLabel = $("#followersValue");
            if(followersLabel.length != 0) {
                var followersText = followersLabel.text();
                followersText = parseInt(followersText);
                followersLabel.text(followersText + difference);
            }
        }
    })
});

function getPostIdFromElement(element) {
    var isRoot = element.hasClass("post");
    var rootElement = isRoot == true ? element : element.closest(".post");
    var postId = rootElement.data().id;

    if(postId === undefined) return alert("Post id undefined");

    return postId;
}

function createPostHtml(postData, largeFont = false) {

    if(postData == null) return alert("post object is null");

    var isRetweet = postData.retweetData !== undefined;
    var retweetedBy = isRetweet ? postData.postedBy.username : null;
    postData = isRetweet ? postData.retweetData : postData;
    
    var postedBy = postData.postedBy;

    if(postedBy._id === undefined) {
        return console.log("User object not populated");
    }

    var displayName = postedBy.firstName + " " + postedBy.lastName;
    var timestamp = timeDifference(new Date(), new Date(postData.createdAt));

    var likeButtonActiveClass = postData.likes.includes(userLoggedIn._id) ? "active" : "";
    var retweetButtonActiveClass = postData.retweetUsers.includes(userLoggedIn._id) ? "active" : "";
    var largeFontClass = largeFont ? "largeFont" : "";

    var retweetText = '';
    if(isRetweet) {
        retweetText = `<span>
                        <i class='fas fa-retweet'></i>
                        Retweeted by <a href='/profile/${retweetedBy}'>@${retweetedBy}</a>    
                    </span>`
    }

    var replyFlag = "";
    if(postData.replyTo && postData.replyTo._id) {
        
        if(!postData.replyTo._id) {
            return alert("Reply to is not populated");
        }
        else if(!postData.replyTo.postedBy._id) {
            return alert("Posted by is not populated");
        }

        var replyToUsername = postData.replyTo.postedBy.username;
        replyFlag = `<div class='replyFlag'>
                        Replying to <a href='/profile/${replyToUsername}'>@${replyToUsername}<a>
                    </div>`;

    }

    var buttons = "";
    var pinnedPostText = "";
    if (postData.postedBy._id == userLoggedIn._id) {

        var pinnedClass = "";
        var dataTarget = "#confirmPinModal";
        if (postData.pinned === true) {
            pinnedClass = "active";
            dataTarget = "#unpinModal";
            pinnedPostText = "<i class='fas fa-thumbtack'></i> <span>Pinned post</span>";
        }

        buttons = `<button class='pinButton ${pinnedClass}' data-id="${postData._id}" data-toggle="modal" data-target="${dataTarget}"><i class='fas fa-thumbtack'></i></button>
                    <button data-id="${postData._id}" data-toggle="modal" data-target="#deletePostModal"><i class='fas fa-times'></i></button>`;
    }

    return `<div class='post ${largeFontClass}' data-id='${postData._id}'>
                <div class='postActionContainer'>
                    ${retweetText}
                </div>
                <div class='mainContentContainer'>
                    <div class='userImageContainer'>
                        <img src='${postedBy.profilePic}'>
                    </div>
                    <div class='postContentContainer'>
                        <div class='pinnedPostText'>${pinnedPostText}</div>
                        <div class='header'>
                            <a href='/profile/${postedBy.username}' class='displayName'>${displayName}</a>
                            <span class='username'>@${postedBy.username}</span>
                            <span class='date'>${timestamp}</span>
                            ${buttons}
                        </div>
                        ${replyFlag}
                        <div class='postBody'>
                            <span>${postData.content}</span>
                        </div>
                        <div class='postFooter'>
                            <div class='postButtonContainer'>
                                <button data-toggle='modal' data-target='#replyModal'>
                                    <i class='far fa-comment'></i>
                                </button>
                            </div>
                            <div class='postButtonContainer green'>
                                <button class='retweetButton ${retweetButtonActiveClass}'>
                                    <i class='fas fa-retweet'></i>
                                    <span>${postData.retweetUsers.length || ""}</span>
                                </button>
                            </div>
                            <div class='postButtonContainer red'>
                                <button class='likeButton ${likeButtonActiveClass}'>
                                    <i class='far fa-heart'></i>
                                    <span>${postData.likes.length || ""}</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>`;
}

function timeDifference(current, previous) {

    var msPerMinute = 60 * 1000;
    var msPerHour = msPerMinute * 60;
    var msPerDay = msPerHour * 24;
    var msPerMonth = msPerDay * 30;
    var msPerYear = msPerDay * 365;

    var elapsed = current - previous;

    if (elapsed < msPerMinute) {
        if(elapsed/1000 < 30) return "Just now";
        
        return Math.round(elapsed/1000) + ' seconds ago';   
    }

    else if (elapsed < msPerHour) {
         return Math.round(elapsed/msPerMinute) + ' minutes ago';   
    }

    else if (elapsed < msPerDay ) {
         return Math.round(elapsed/msPerHour ) + ' hours ago';   
    }

    else if (elapsed < msPerMonth) {
        return Math.round(elapsed/msPerDay) + ' days ago';   
    }

    else if (elapsed < msPerYear) {
        return Math.round(elapsed/msPerMonth) + ' months ago';   
    }

    else {
        return Math.round(elapsed/msPerYear ) + ' years ago';   
    }
}

function outputPosts(results, container) {
    container.html("");

    if(!Array.isArray(results)) {
        results = [results];
    }

    results.forEach(result => {
        var html = createPostHtml(result)
        container.append(html);
    });

    if (results.length == 0) {
        container.append("<span class='noResults'>Nothing to show.</span>")
    }
}

function outputPostsWithReplies(results, container) {
    container.html("");

    if(results.replyTo !== undefined && results.replyTo._id !== undefined) {
        var html = createPostHtml(results.replyTo)
        container.append(html);
    }

    var mainPostHtml = createPostHtml(results.postData, true)
    container.append(mainPostHtml);

    results.replies.forEach(result => {
        var html = createPostHtml(result)
        container.append(html);
    });
}

function outputUsers(results, container) {
    container.html("");

    results.forEach(result => {
        var html = createUserHtml(result, true);
        container.append(html);
    });

    if(results.length == 0) {
        container.append("<span class='noResults'>No results found</span>")
    }
}

function createUserHtml(userData, showFollowButton) {

    var name = userData.firstName + " " + userData.lastName;
    var isFollowing = userLoggedIn.following && userLoggedIn.following.includes(userData._id);
    var text = isFollowing ? "Following" : "Follow"
    var buttonClass = isFollowing ? "followButton following" : "followButton"

    var followButton = "";
    if (showFollowButton && userLoggedIn._id != userData._id) {
        followButton = `<div class='followButtonContainer'>
                            <button class='${buttonClass}' data-user='${userData._id}'>${text}</button>
                        </div>`;
    }

    return `<div class='user'>
                <div class='userImageContainer'>
                    <img src='${userData.profilePic}'>
                </div>
                <div class='userDetailsContainer'>
                    <div class='header'>
                        <a href='/profile/${userData.username}'>${name}</a>
                        <span class='username'>@${userData.username}</span>
                    </div>
                </div>
                ${followButton}
            </div>`;
}

function searchUsers(searchTerm) {
    $.get("/api/users", { search: searchTerm }, results => {
        outputSelectableUsers(results, $(".resultsContainer"));
    })
}

function outputSelectableUsers(results, container) {
    container.html("");

    results.forEach(result => {

        if(result._id == userLoggedIn._id || selectedUsers.some(u => u._id == result._id)) {
            return;
        }

        var html = createUserHtml(result, false);
        var element = $(html);
        element.click(() => userSelected(result))

        container.append(element);
    });

    if(results.length == 0) {
        container.append("<span class='noResults'>No results found</span>")
    }
}

function userSelected(user) {
    selectedUsers.push(user);
    updateSelectedUsersHtml();
    $("#userSearchTextbox").val("").focus();
    $(".resultsContainer").html("");
    $("#createChatButton").prop("disabled", false);
}

function updateSelectedUsersHtml() {
    var elements = [];

    selectedUsers.forEach(user => {
        var name = user.firstName + " " + user.lastName;
        var userElement = $(`<span class='selectedUser'>${name}</span>`);
        elements.push(userElement);
    })

    $(".selectedUser").remove();
    $("#selectedUsers").prepend(elements);
}

function getChatName(chatData) {
    var chatName = chatData.chatName;

    if(!chatName) {
        var otherChatUsers = getOtherChatUsers(chatData.users);
        var namesArray = otherChatUsers.map(user => user.firstName + " " + user.lastName);
        chatName = namesArray.join(", ");
    }

    return chatName;
}

function getOtherChatUsers(users) {
    if(users.length == 1) return users;

    return users.filter(user => user._id != userLoggedIn._id);
}

function getChatImageElements(chatData) {
    var otherChatUsers = getOtherChatUsers(chatData.users);

    var groupChatClass = "";
    var chatImage = getUserChatImageElement(otherChatUsers[0]);

    if(otherChatUsers.length > 1) {
        groupChatClass = "groupChatImage";
        chatImage += getUserChatImageElement(otherChatUsers[1]);
    }

    return `<div class='resultsImageContainer ${groupChatClass}'>${chatImage}</div>`;
}

$(document).ready(() => {
    $.get("/api/chats", (data, status, xhr) => {
        if(xhr.status == 400) {
            alert("Could not get chat list.");
        }
        else {
            outputChatList(data, $(".resultsContainer"));
        }
    })
})

function outputChatList(chatList, container) {
    chatList.forEach(chat => {
        var html = createChatHtml(chat);
        container.append(html);
    })

    if(chatList.length == 0) {
        container.append("<span class='noResults'>Nothing to show.</span>")
    }
}

function createChatHtml(chatData) {
    var chatName = getChatName(chatData);
    var image = getChatImageElements(chatData);
    var latestMessage = "This is the latest message";

    return `<a href='/messages/${chatData._id}' class='resultListItem'>
                ${image}
                <div class='resultsDetailsContainer ellipsis'>
                    <span class='heading ellipsis'>${chatName}</span>
                    <span class='subText ellipsis'>${latestMessage}</span>
                </div>
            </a>`;
}

function getUserChatImageElement(user) {
    if(!user || !user.profilePic) {
        return alert("User passed into function is invalid");
    }

    return `<img src='${user.profilePic}' alt='User's profile pic'>`;
}

const express = require('express');
const app = express();
const port = 3003;
const middleware = require('./middleware')
const path = require('path')
const bodyParser = require("body-parser")
const mongoose = require("./database");
const session = require("express-session");

const server = app.listen(port, () => console.log("Server listening on port " + port));

app.set("view engine", "pug");
app.set("views", "views");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use(session({
    secret: "bbq chips",
    resave: true,
    saveUninitialized: false
}))

// Routes
const loginRoute = require('./routes/loginRoutes');
const registerRoute = require('./routes/registerRoutes');
const logoutRoute = require('./routes/logout');
const postRoute = require('./routes/postRoutes');
const profileRoute = require('./routes/profileRoutes');
const uploadRoute = require('./routes/uploadRoutes');
const searchRoute = require('./routes/searchRoutes');
const messagesRoutes = require('./routes/messagesRoutes');

// Api routes
const postsApiRoute = require('./routes/api/posts');
const usersApiRoute = require('./routes/api/users');
const chatsApiRoute = require('./routes/api/chats');
const messagesApiRoute = require('./routes/api/messages');

app.use("/login", loginRoute);
app.use("/register", registerRoute);
app.use("/logout", logoutRoute);
app.use("/posts", middleware.requireLogin, postRoute);
app.use("/profile", middleware.requireLogin, profileRoute);
app.use("/uploads", uploadRoute);
app.use("/search", middleware.requireLogin, searchRoute);
app.use("/messages", middleware.requireLogin, messagesRoutes);

app.use("/api/posts", postsApiRoute);
app.use("/api/users", usersApiRoute);
app.use("/api/chats", chatsApiRoute);
app.use("/api/messages", messagesApiRoute);

app.get("/", middleware.requireLogin, (req, res, next) => {

    var payload = {
        pageTitle: "Home",
        userLoggedIn: req.session.user,
        userLoggedInJs: JSON.stringify(req.session.user),
    }

    res.status(200).render("home", payload);
})

mixin createPostForm(userLoggedIn)
    .postFormContainer
        .userImageContainer
            img(src=userLoggedIn.profilePic, alt="User's profile picture")
        .textareaContainer
            textarea#postTextarea(placeholder="What's happening?")
            .buttonsContainer
                button#submitPostButton(disabled="") Post

mixin createReplyModal(userLoggedIn)
    #replyModal.modal.fade(tabindex='-1', role='dialog', aria-labelledby='replyModalLabel', aria-hidden='true')
        .modal-dialog(role='document')
            .modal-content
                .modal-header
                    h5#replyModalLabel.modal-title Reply
                    button.close(type='button', data-dismiss='modal', aria-label='Close')
                    span(aria-hidden='true') &times;
                .modal-body
                    #originalPostContainer
                    .postFormContainer
                        .userImageContainer
                            img(src=userLoggedIn.profilePic, alt="User's profile picture")
                        .textareaContainer
                            textarea#replyTextarea(placeholder="What's happening?")
                .modal-footer
                    button.btn.btn-secondary(type='button', data-dismiss='modal') Close
                    button#submitReplyButton.btn.btn-primary(type='button', disabled="") Reply

mixin createDeletePostModal()
    #deletePostModal.modal.fade(tabindex='-1', role='dialog', aria-labelledby='deletePostModalLabel', aria-hidden='true')
        .modal-dialog(role='document')
            .modal-content
                .modal-header
                    h5#deletePostModalLabel.modal-title Delete the post?
                    button.close(type='button', data-dismiss='modal', aria-label='Close')
                    span(aria-hidden='true') &times;
                .modal-body
                    p You won't be able to delete this.
                .modal-footer
                    button.btn.btn-secondary(type='button', data-dismiss='modal') Close
                    button#deletePostButton.btn.btn-primary(type='button') Delete

mixin createPostModals(userLoggedIn)
    +createReplyModal(userLoggedIn)
    +createDeletePostModal()
    +createPinnedPostModal()
    +createUnpinPostModal()

mixin createFollowButton(user, isFollowing)
    - text = isFollowing ? "Following" : "Follow"
    - buttonClass = isFollowing ? "followButton following" : "followButton"
    button(class=buttonClass, data-user=user._id) #{text}

mixin createTab(name, href, isSelected)
    - className = isSelected ? "tab active" : "tab"
    a(href=href, class=className)
        span #{name}

mixin createImageUploadModal()
    #imageUploadModal.modal.fade(tabindex='-1', role='dialog', aria-labelledby='imageUploadModalLabel', aria-hidden='true')
        .modal-dialog(role='document')
            .modal-content
                .modal-header
                    h5#imageUploadModalLabel.modal-title Upload a new profile picture
                    button.close(type='button', data-dismiss='modal', aria-label='Close')
                    span(aria-hidden='true') &times;
                .modal-body
                    input#filePhoto(type="file", name="filePhoto")

                    .imagePreviewContainer
                        img#imagePreview
                .modal-footer
                    button.btn.btn-secondary(type='button', data-dismiss='modal') Cancel
                    button#imageUploadButton.btn.btn-primary(type='button') Save

mixin createCoverPhotoUploadModal()
    #coverPhotoUploadModal.modal.fade(tabindex='-1', role='dialog', aria-labelledby='coverPhotoModalLabel', aria-hidden='true')
        .modal-dialog(role='document')
            .modal-content
                .modal-header
                    h5#coverPhotoModalLabel.modal-title Upload a new cover photo
                    button.close(type='button', data-dismiss='modal', aria-label='Close')
                    span(aria-hidden='true') &times;
                .modal-body
                    input#coverPhoto(type="file", name="filePhoto")

                    .imagePreviewContainer
                        img#coverPreview
                .modal-footer
                    button.btn.btn-secondary(type='button', data-dismiss='modal') Cancel
                    button#coverPhotoButton.btn.btn-primary(type='button') Save

mixin createPinnedPostModal()
    #confirmPinModal.modal.fade(tabindex='-1', role='dialog', aria-labelledby='confirmPinModalLabel', aria-hidden='true')
        .modal-dialog(role='document')
            .modal-content
                .modal-header
                    h5#confirmPinModalLabel.modal-title Pin this post?
                    button.close(type='button', data-dismiss='modal', aria-label='Close')
                    span(aria-hidden='true') &times;
                .modal-body
                    p This post will appear at the top of your profile. You can only pin one post.
                .modal-footer
                    button.btn.btn-secondary(type='button', data-dismiss='modal') Cancel
                    button#pinPostButton.btn.btn-primary(type='button') Pin

mixin createUnpinPostModal()
    #unpinModal.modal.fade(tabindex='-1', role='dialog', aria-labelledby='unpinModalLabel', aria-hidden='true')
        .modal-dialog(role='document')
            .modal-content
                .modal-header
                    h5#unpinModalLabel.modal-title Unpin the post?
                    button.close(type='button', data-dismiss='modal', aria-label='Close')
                    span(aria-hidden='true') &times;
                .modal-body
                    p This post will be unpinned.
                .modal-footer
                    button.btn.btn-secondary(type='button', data-dismiss='modal') Cancel
                    button#unpinPostButton.btn.btn-primary(type='button') Unpin

mixin createChatImage(chatData, userLoggedIn)
    if(!chatData)
        return

    - var i = 0
    - var maxImagesToShow = 3
    - var remainingUsers = chatData.users.length - maxImagesToShow
    - remainingUsers-- // Remove 1 since we won't show our own image
    
    .chatImagesContainer
        if remainingUsers > 0
            .userCount
                span +#{remainingUsers}

        each user in chatData.users
            if chatData.users.length != 1 && user._id == userLoggedIn._id 
                - continue 
            else if i >= maxImagesToShow 
                - break 

            img(src=user.profilePic, alt="User's profile picture", title=user.firstName)
            - i++

mixin createChatNameModal(chat)
    #chatNameModal.modal.fade(tabindex='-1', role='dialog', aria-labelledby='chatNameModalLabel', aria-hidden='true')
        .modal-dialog(role='document')
            .modal-content
                .modal-header
                    h5#chatNameModalLabel.modal-title Change the chat name
                    button.close(type='button', data-dismiss='modal', aria-label='Close')
                    span(aria-hidden='true') &times;
                .modal-body
                    input#chatNameTextbox(type="text", placeholder="Enter a name for this chat", value=chat.chatName)
                .modal-footer
                    button.btn.btn-secondary(type='button', data-dismiss='modal') Cancel
                    button#chatNameButton.btn.btn-primary(type='button') Save
                    
// Ended at 4:40 6-11-2022
