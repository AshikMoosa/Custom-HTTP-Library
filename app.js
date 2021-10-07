const http = new easyHTTP();

// //Get Posts
// http.get("https://jsonplaceholder.typicode.com/posts", function (err, posts) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(posts);
//   }
// });

//Create data

const data = {
  title: "SOme New Title",
  body: "I dont know what im doing here",
};

//Create Post
// http.post(
//   "https://jsonplaceholder.typicode.com/posts",
//   data,
//   function (err, posts) {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log(posts);
//     }
//   }
// );

//Update post
// http.put(
//   "https://jsonplaceholder.typicode.com/posts/1",
//   data,
//   function (err, post) {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log(post);
//     }
//   }
// );

//Delete Posts
http.delete(
  "https://jsonplaceholder.typicode.com/posts/1",
  function (err, response) {
    if (err) {
      console.log(err);
    } else {
      console.log(response);
    }
  }
);
