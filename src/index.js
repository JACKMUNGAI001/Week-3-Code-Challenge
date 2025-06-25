// Wait for the DOM to fully load before starting the app
document.addEventListener("DOMContentLoaded", main);

// Main entry point: display posts and set up the new post form listener
function main() {
    displayPosts();
    addNewPostListener();
}

// Fetch all posts from the server and display them in the #post-list div
function displayPosts() {
    fetch("http://localhost:3000/posts")
        .then(response => response.json())
        .then(posts => {
            const postList = document.getElementById("post-list");
            postList.innerHTML = "<h2>Posts</h2>"; // Keep the heading
            posts.forEach(post => {
                const postItem = document.createElement("div");
                // Show title and category
                postItem.innerHTML = `
                    <strong>${post.title}</strong>
                    <span style="color:#6366f1; font-size:0.95em; margin-left:8px;">[${post.category || "Uncategorized"}]</span>
                `;
                // Add click event to show post details when a title is clicked
                postItem.addEventListener("click", () => handlePostClick(post.id));
                postList.appendChild(postItem);
            });
        });
}

// Fetch and display details for a single post by ID
function handlePostClick(postId) {
    fetch(`http://localhost:3000/posts/${postId}`)
        .then(response => response.json())
        .then(post => {
            const postDetail = document.getElementById("post-detail");
            postDetail.innerHTML = `
                <h2>${post.title}</h2>
                <p><strong>Category:</strong> ${post.category || "Uncategorized"}</p>
                <p>${post.content}</p>
                <p><strong>Author:</strong> ${post.author}</p>
                <button id="edit-post">Edit</button>
                <button id="delete-post">Delete</button>
            `;
            // Set up Edit and Delete button event listeners
            document.getElementById("edit-post").addEventListener("click", () => showEditForm(post));
            document.getElementById("delete-post").addEventListener("click", () => deletePost(postId));
        });
}

// Set up the event listener for the new post form submission
function addNewPostListener() {
    const newPostForm = document.getElementById("new-post-form");
    newPostForm.addEventListener("submit", (event) => {
        event.preventDefault();
        // Get form values
        const title = newPostForm.title.value;
        const content = newPostForm.content.value;
        const author = newPostForm.author.value;
        const category = newPostForm.category.value; 
        const newPost = { title, content, author, category };
        addNewPost(newPost);
    });
}

// Send a POST request to add a new post, then refresh the post list
function addNewPost(post) {
    fetch("http://localhost:3000/posts", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(post)
    })
    .then(response => response.json())
    .then(() => {
        displayPosts();
        document.getElementById("new-post-form").reset();
    });
}

// Show the edit form with the current post's data filled in
function showEditForm(post) {
    const editForm = document.getElementById("edit-post-form");
    editForm.classList.remove("hidden");
    document.getElementById("edit-title").value = post.title;
    document.getElementById("edit-content").value = post.content;

    // Handle form submission for updating the post
    editForm.onsubmit = (event) => {
        event.preventDefault();
        updatePost(post.id);
    };

    // Handle cancel button to hide the edit form
    document.getElementById("cancel-edit").onclick = () => {
        editForm.classList.add("hidden");
    };
}

// Send a PATCH request to update the post, then refresh the UI
function updatePost(postId) {
    const title = document.getElementById("edit-title").value;
    const content = document.getElementById("edit-content").value;
    const updatedPost = { title, content };

    fetch(`http://localhost:3000/posts/${postId}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(updatedPost)
    })
    .then(() => {
        displayPosts();
        handlePostClick(postId);
        document.getElementById("edit-post-form").classList.add("hidden");
    });
}

// Send a DELETE request to remove the post, then refresh the UI
function deletePost(postId) {
    fetch(`http://localhost:3000/posts/${postId}`, {
        method: "DELETE"
    })
    .then(() => {
        displayPosts();
        document.getElementById("post-detail").innerHTML = "";
    });
}