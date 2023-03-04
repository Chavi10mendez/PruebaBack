const users = require('./index')
let posteos = [];

const getAllPosteos = () => posteos;

let id = 1;
const postPosteos = (userId, title, contents) => {
    const newPost = {
        userId,
        title,
        contents,
        id: id++,
    }

    posteos.push(newPost);

    const findUser = users.find(user => user.id === userId);
    findUser.posts.push(newPost);

    return newPost;
};

module.exports = {
    getAllPosteos,
    postPosteos,
}