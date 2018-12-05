const db = require('../common/knex');
const { paginate } = require('../helpers/dbUtils');

const getProviders = async () => {
    return await db('providers').select();
}

const getProductTypes = async () => {
    return await db('product_type').select();
}

const getProductAdminByPage = async (limit, pageNum, searchValue, filter) => {
    const whereClause = {};
    const { provider, product_type } = filter;
    if (searchValue) {
        whereClause['products.product_name'] = searchValue;
    }
    if (provider) {
        whereClause['products.provider_id'] = provider;
    }
    if (product_type) {
        whereClause['products.product_type_id'] = product_type;
    }
    console.log("WhereClauseProductAmin: ", whereClause);
    const builder = db('products').select(
        'products.id',
        'products.product_name',
        'products.base_price',
        'products.unit',
        'product_type.product_type_name',
        'providers.name as provider_name',
        'products.quantity'
    ).leftJoin(
        'product_type',
        'product_type.id',
        'products.product_type_id'
    ).leftJoin(
        'providers',
        'providers.id',
        'products.provider_id'
    );
    if (whereClause) {
        builder.where(whereClause);
    }

    return await paginate(
        builder,
        { limit, pageNum }
    );
}

const deleteProduct = async (id) => {
    return await db('products').where({ id }).del();
}

module.exports = {
    getProviders,
    getProductTypes,
    getProductAdminByPage,
    deleteProduct,
}