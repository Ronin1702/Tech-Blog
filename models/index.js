// initialize variables
const Post = require("./Post");
const Comment = require("./Comment");
const Users = require("./User");

// Users: one-to-many (user has many posts)
Users.hasMany(Post, {
  // foreign key in post model referencing user_id in users model
  foreignKey: "user_id",
});

// Users: one-to-many (user has many comments)
Users.hasMany(Comment, {
  // foreign key in comment model referencing user_id in users model
  foreignKey: "user_id",
});

// Post: many-to-one (post belongs to a user)
Post.belongsTo(Users, {
  // foreign key in post model referencing user_id in users model
  foreignKey: "user_id",
});

// Post: one-to-many (post has many comments)
Post.hasMany(Comment, {
  // Foreign key in Comment model referencing post_id in Post model
  foreignKey: "post_id",
  // when a post is deleted, all associated comments are also deleted
  onDelete: "CASCADE",
});

// Comment: many-to-one (comment belongs to a user)
Comment.belongsTo(Users, {
  // foreign key in comment model referencing user_id in users model
  foreignKey: "user_id",
});

// Comment: many-to-one (comment belongs to a post)
Comment.belongsTo(Post, {
  foreignKey: "post_id", // foreign key in comment model referencing post_id in post model
});

// Export the models
module.exports = { Post, Comment, Users };
