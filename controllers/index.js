
let users = [];

const getAllUsers = () => users;

const getUsersByName = (name) => {
    const usersFiltered = users.filter(user => user.name === name);

//   if(usersFiltered) return usersFiltered;
    usersFiltered ? usersFiltered : { error: `No hay usuarios con nombre: ${name}` }
};

let id = 1;
const postUser = (name, email, username ) => {
    const newUser = {
        name,
        email,
        username,
        id: id++,
        posts: [],  
    };
    users.push(newUser);
    return newUser;
}

const updateUser = (id, name, username, email) => {
    const user = users.find(user => user.id === id); 

    if(!user) return { error: "usuario inexistente" };
    else{
        name ? users.name = name
        : username ? users.name = name
        : email ? users.email = email
        : null;
        return users;
    }
}

const deleteUser = (id) => {
    const user = users.find(user => user.id === Number(id));
    
    if(!user) return { error: "Usuario no encontrado" };
    else{
        users = users.filter(user => user.id !== Number(id))
        // 3hs
        return users;
    }
}

const getUsersByID = (id) => {
    const usersFilteredId = users.find(user => user.id === Number(id));

//   if(usersFiltered) return usersFiltered;
    usersFilteredId ? usersFilteredId : { error: `No se encontro el usuario solicitado` }
};

module.exports = {
    getAllUsers,
    getUsersByName,
    postUser,
    updateUser,
    deleteUser, 
    getUsersByID,
    users   
}