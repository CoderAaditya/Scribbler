document.addEventListener("DOMContentLoaded", function() {
    var editButton = document.getElementById("edit-button");
    var postTitle = document.getElementById("post-title");
    var postText = document.getElementById("post-text");
  
    var isEditMode = false;
  
    editButton.addEventListener("click", function() {
      if (isEditMode) {
        // Save changes
        postTitle.contentEditable = "false";
        postText.contentEditable = "false";
        editButton.innerHTML = '<i class="fas fa-edit"></i> Edit';
        isEditMode = false;
      } else {
        // Enter edit mode
        postTitle.contentEditable = "true";
        postText.contentEditable = "true";
        editButton.innerHTML = '<i class="fas fa-save"></i> Save';
        isEditMode = true;
      }
    });
  
    var likeButton = document.getElementById("like-button");
    var likeMessage = document.getElementById("like-message");
    var likeCount = 0;
  
    likeButton.addEventListener("click", function() {
      if (likeCount === 0) {
        likeCount++;
        likeMessage.innerHTML = "1 person likes this!";
        likeButton.innerHTML = '<i class="fas fa-thumbs-up"></i> Liked!';
      } else {
        likeCount++;
        likeMessage.innerHTML = likeCount + " people like this!";
      }
    });
  
    var commentButton = document.getElementById("comment-button");
    var commentInput = document.getElementById("comment-input");
    var allComments = document.getElementById("all-comments");
  
    commentButton.addEventListener("click", function() {
      var commentText = commentInput.value;
      if (commentText !== "") {
        var commentElement = document.createElement("p");
        commentElement.classList.add("comment");
        commentElement.innerHTML = commentText;
        allComments.insertBefore(commentElement, allComments.firstChild);
        commentInput.value = "";
      }
    });
  });
  window.onload = function() {
    var postAuthor = sessionStorage.getItem("postAuthor");
    var postTitle = sessionStorage.getItem("postTitle");
    var postText = sessionStorage.getItem("postText");

    if (postAuthor) {
        document.getElementById("post-author").innerHTML = postAuthor;
    }

    if (postTitle) {
        document.getElementById("post-title").innerHTML = postTitle;
    }

    if (postText) {
        document.getElementById("post-text").innerHTML = postText;
    }
};

window.onload = function() {
  var postAuthor = localStorage.getItem("postAuthor");
  var postTitle = localStorage.getItem("postTitle");
  var postText = localStorage.getItem("postText");

  if (postAuthor) {
      document.getElementById("post-author").innerHTML = postAuthor;
  }

  if (postTitle) {
      document.getElementById("post-title").innerHTML = postTitle;
  }

  if (postText) {
      document.getElementById("post-text").innerHTML = postText;
  }
};
