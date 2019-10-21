class Blog {
  constructor(posts) {
    this.posts = posts;
  }

  addPost(post) {
    this.posts.push(post);
  }

  delete(index) {
    this.posts.splice(index, 1);
  }

  update(index, newPost) {
    this.posts[index] = newPost;
  }
}

module.exports = Blog;
