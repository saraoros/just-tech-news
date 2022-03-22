const User = require('./User');
const Post = require('./Post');

// create associations
User.hasMany(Post, {
    foreignKey: 'user_id',
})

Post.belongsTo(User, {
    // We are defining the realtionship of the Post Model to the User
    foreignKey: 'user_id',
})

module.exports = { User, Post };