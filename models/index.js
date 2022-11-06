const User = require('./User');
const Post = require('./Post');

User.hasMany(Post, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

User.hasMany(Comment, {

});

Post.belongsTo(User, {
  foreignKey: 'user_id'
});

Post.hasMany(Comment, {

});

Comment.belongsTo(User, {

});

Comment.belongsTo(Post, {

});

module.exports = { User, Blog };