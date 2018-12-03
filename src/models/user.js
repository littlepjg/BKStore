const db = require('../common/knex');
const { paginate } = require('../helpers/dbUtils');

const addUser = async (user) => {
    const { full_name, email, passwd } = user;
    return await db('users')
        .insert({
            full_name,
            email,
            passwd,
            created_at: db.fn.now(),
            updated_at: db.fn.now()
        });
}

const getUserByEmail = async (email) => {
    return await db('users')
        .select()
        .where({ email })
        .first();
}

const getUserById = async (id) => {
    return await db('users')
        .select()
        .where({ id })
        .first();
}

const getUserByPage = async (limit, pageNum, searchValue) => {
    const builder = db('users').where({ level: 1 });
    if (searchValue) {
        builder.andWhere('email', 'like', `%${searchValue}%`);
    }
    return await paginate(builder, { limit, pageNum });
}

const deleteUserById = async (id) => {
    return await db('users').where({ id }).del();
}

module.exports = {
    addUser,
    getUserByEmail,
    getUserById,
    getUserByPage,
    deleteUserById
}