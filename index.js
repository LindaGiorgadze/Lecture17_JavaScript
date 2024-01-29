async function f() {
  return 1;
}

// console.log("First Log");
// f().then((promise) => console.log(promise));
// console.log("Third Log");

// async function products() {
//   let promise = await fetch("./product.json");
//   let result = await promise.json();
//   console.log(result);
//   return result;
// }

// function products() {
//   let promise = fetch("./products.json")
//     .then((response) => response.json())
//     .then((result) => console.log(result))
//     .catch(error => console.error(error));
// }

// console.log(products());

// POSTS

const popup = document.querySelector(".popup");

popup
  .querySelector(".closeBtn")
  .addEventListener("click", () => (popup.style.display = "none"));

function fetchPosts() {
  let posts = fetch("https://dummyjson.com/posts")
    .then((response) => response.json())
    .then((res) => {
      res.posts?.forEach((post) => {
        const card = document.createElement("div");
        card.classList.add("card");
        card.setAttribute("id", post.id);

        const title = document.createElement("h2");
        title.classList.add("postTitle");
        title.innerText = post.title;

        const body = document.createElement("p");
        body.classList.add("postBody");
        body.innerText = post.body;

        const tags = document.createElement("div");
        tags.classList.add("tags");
        post.tags.forEach((tag) => {
          const tagSpan = document.createElement("span");
          tagSpan.innerText = tag;
          tags.append(tag);
        });

        const postContainer = document.querySelector(".postsContainer");
        postContainer.append(card);
        card.append(title);
        card.append(body);
        card.append(tags);

        const button = document.createElement("button");
        button.innerText = "Open";
        card.append(button);
        button.addEventListener("click", () => {
          popup.style.display = "block";
          fetchCurrentPost(post.id);
        });
      });
    })
    .catch((error) => console.error(error));
  console.log(posts);
}

fetchPosts();

function fetchCurrentPost(id) {
  let post = fetch(`https://dummyjson.com/posts/${id}`)
    .then((response) => response.json())
    .then((res) => {
      console.log(res);
      popup.querySelector('.postTitle').innerText = res.title;
      popup.querySelector('.postBody').innerText = res.body;
    });
}
