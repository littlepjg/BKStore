const db = require('../common/knex');
const { paginate } = require('../helpers/dbUtils');

const addUser = async (user) => {
    return await db('users')
        .insert({
            ...user,
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
    const builder = db('users').where('level', '!=', 2);
    if (searchValue) {
        builder.andWhere('email', 'like', `%${searchValue}%`);
    }
    return await paginate(builder, { limit, pageNum });
}

const deleteUserById = async (id) => {
    return await db('users').where({ id }).del();
}

const getProductFavorites = async (user_id) => {
    return await db('products')
        .select(
            'products.id',
            'products.product_name',
            'products.product_images',
            'products.description',
            'products.base_price',
        ).innerJoin(
            'favorites',
            'favorites.product_id',
            'products.id',
        ).where('favorites.customer_id', user_id);
}
const getProductSuggest = async () => {
    return await db('products')
        .select(
            'products.id',
            'products.product_name',
            'products.product_images',
            'products.base_price',
        )
        .limit(6);
}

const addProductFavorite = async (user_id, product_id) => {
    return await db('favorites')
        .insert({
            customer_id: user_id,
            product_id,
            created_at: db.fn.now(),
            updated_at: db.fn.now(),
        });
}

const deleteProductFavorite = async (user_id, product_id) => {
    return await db('favorites')
        .where({
            customer_id: user_id,
            product_id: product_id,
        }).del();
}

const getUserCart = async (user_id) => {
    return await db('carts')
        .select(
            'products.id',
            'products.product_name',
            'products.product_images',
            'products.description',
            'products.base_price',
            'carts.amount',
        ).innerJoin(
            'products',
            'products.id',
            'carts.product_id'
        ).where('carts.customer_id', user_id);
}

const changeAmountProductCart = async (user_id, product_id, amount) => {
    return db('carts')
        .update({
            amount,
            updated_at: db.fn.now(),
        }).where({
            customer_id: user_id,
            product_id,
        });
}

const deleteProductCart = async (user_id, product_id) => {
    return db('carts')
        .where({
            customer_id: user_id,
            product_id,
        }).del();
}

module.exports = {
    addUser,
    getUserByEmail,
    getUserById,
    getUserByPage,
    deleteUserById,
    getProductFavorites,
    getProductSuggest,
    addProductFavorite,
    deleteProductFavorite,
    getUserCart,
    changeAmountProductCart,
    deleteProductCart,
}