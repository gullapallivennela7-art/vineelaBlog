```javascript
// ==========================================
// VINEELA BLOG - COMPLETE JAVASCRIPT
// ==========================================


// ==========================================
// ADD POST
// ==========================================

document.addEventListener("DOMContentLoaded", function () {

    const postForm = document.getElementById("postForm");
    const postsContainer = document.getElementById("postsContainer");

    if (postForm && postsContainer) {

        postForm.addEventListener("submit", function (event) {

            event.preventDefault();

            const title = document.getElementById("postTitle").value.trim();
            const content = document.getElementById("postContent").value.trim();

            if (title === "" || content === "") {
                alert("Please enter the post title and content.");
                return;
            }

            const post = document.createElement("div");

            post.className = "post";
            post.setAttribute("data-category", "Personal");

            post.innerHTML = `
                <div class="post-icon">
                    📝
                </div>

                <span class="category">
                    Personal
                </span>

                <h3>
                    ${title}
                </h3>

                <p>
                    ${content}
                </p>

                <button type="button" class="new-read-button">
                    Read More
                </button>

                <button type="button" class="delete-button">
                    Delete
                </button>
            `;

            postsContainer.appendChild(post);

            document.getElementById("postTitle").value = "";
            document.getElementById("postContent").value = "";

            alert("Post added successfully!");

            post.querySelector(".new-read-button").addEventListener(
                "click",
                function () {
                    alert(content);
                }
            );

            post.querySelector(".delete-button").addEventListener(
                "click",
                function () {
                    post.remove();
                }
            );

        });

    }

});


// ==========================================
// FILTER POSTS
// ==========================================

function filterPosts(category) {

    const posts = document.querySelectorAll(".post");

    posts.forEach(function (post) {

        const postCategory =
            post.getAttribute("data-category");

        if (category === "all" || postCategory === category) {

            post.style.display = "";

        } else {

            post.style.display = "none";

        }

    });

}


// ==========================================
// SEARCH POSTS
// ==========================================

function searchPosts() {

    const searchInput =
        document.getElementById("searchInput");

    const searchText =
        searchInput.value.toLowerCase().trim();

    const posts =
        document.querySelectorAll(".post");

    posts.forEach(function (post) {

        const postText =
            post.textContent.toLowerCase();

        if (postText.includes(searchText)) {

            post.style.display = "";

        } else {

            post.style.display = "none";

        }

    });

}


// ==========================================
// READ MORE
// ==========================================

function readPost() {

    alert(
        "This blog post contains interesting ideas and experiences."
    );

}


// ==========================================
// CONTACT FORM
// ==========================================

document.addEventListener("DOMContentLoaded", function () {

    const contactForm =
        document.getElementById("contactForm");

    if (contactForm) {

        contactForm.addEventListener(
            "submit",
            function (event) {

                event.preventDefault();

                const contactMessage =
                    document.getElementById("contactMessage");

                contactMessage.textContent =
                    "Thank you! Your message has been sent.";

                contactMessage.style.color =
                    "green";

                contactForm.reset();

            }
        );

    }

});
```
