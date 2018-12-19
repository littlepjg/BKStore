const db = require('../common/knex');
const { paginate } = require('../helpers/dbUtils');

const getProductAdminByPage = async (limit, pageNum, searchValue, filter) => {
    const whereClause = {};
    const { provider, product_type } = filter;
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

    if (searchValue && !whereClause) {
        builder.where('products.product_name', 'like', `%${searchValue}%`);
    }
    if (whereClause) {
        builder.where(whereClause);
        if (searchValue) {
            builder.andWhere('products.product_name', 'like', `%${searchValue}%`);
        }
    }

    return await paginate(
        builder,
        { limit, pageNum }
    );
}

const getTopSellingProducts = async (limit) => {
    return await db('products')
        .innerJoin(db('sale_bills')
            .select(db.raw('product_id, sum(amount) as count'))
            .innerJoin(
                'sale_details',
                'sale_details.id',
                'sale_bills.id'
            ).whereRaw('(sale_bills.book_date between (CURDATE() - INTERVAL 1 MONTH ) and CURDATE()) and sale_bills.status_order < 4')
            .groupBy('product_id')
            .limit(limit).as('x'),
            'x.product_id',
            'products.id')
        .select(
            'products.id',
            'products.product_name',
            'products.product_images',
            'products.base_price',
            'products.unit',
            'products.quantity',
            'x.count'
        );
}

const deleteProduct = async (id) => {
    return await db('products').where({ id }).del();
}

const getProductListByProductTypeId = async(product_type_id)=>{
    return await db('providers')
    .where('id', product_type_id)
    .join('products', 'providers.id', 'products.provider_id')
    .join('product_type', 'products.product_type_id', 'product_type.id')
    .select(
        'products.id',
        'products.product_name',
        'products.product_images',
        'products.base_price',
        'products.unit',
        'products.description',
        'products.quantity',
        'providers.name as provider_name',
        'product_type.name as product_type_name',
    );
}

module.exports = {
    getProductAdminByPage,
    getTopSellingProducts,
    deleteProduct,
    getProductListByProductTypeId,
}