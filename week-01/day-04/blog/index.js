const BlogPost = require('./BlogPost');
const Blog = require('./Blog');

const blog = new Blog([
  new BlogPost('John Doe', 'Lorem Ipsum', 'Lorem ipsum dolor sit amet.', '2000.05.04'),
  new BlogPost('Tim Urban', 'Wait but why', 'A popular long-form, stick-figure-illustrated blog about almost everything.', '2010.10.10'),
]);
console.log(blog);

blog.addPost(new BlogPost('William Turton', 'One Engineer Is Trying to Get IBM to Reckon With Trump', 'Daniel Hanley, a cybersecurity engineer at IBM, doesn’t want to be the center of attention. When I asked to take his picture outside one of IBM’s New York City offices, he told me that he wasn’t really into the whole organizer profile thing.', '2017.03.28'));
console.log(blog);

blog.delete(2);
console.log(blog);

blog.update(0, new BlogPost('John Doe', 'Lorem Ipsum v2', 'Lorem ipsum dolor sit amet.', '2000.05.04'));
console.log(blog);
