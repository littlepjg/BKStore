const db = require('../common/knex');

async function batchInsertWithTransaction(
    tableName,
    dataSets
) {
    const isSuccess = true;
    await db
        .transaction(trx => {
            db.batchInsert(tableName, dataSets)
                .transacting(trx)
                .then(trx.commit)
                .catch(trx.rollback);
        })
        .then(() => {
            console.log('transaction success!!');
        })
        .catch(err => {
            console.log(err);
        });
    return isSuccess;
}

async function purge(tableName) {
    await db(tableName).truncate();
}

async function paginate(
    builder,
    pagerCondition
) {
    const limit = pagerCondition.limit;
    const pageNum = pagerCondition.pageNum;

    const total = await builder
        .clone()
        .clearSelect()
        .count('* as count')
        .first();

    const totalCount = total.count;
    const totalPage = Math.ceil(totalCount / limit);
    const currentPageNum = totalPage > 0 ? pageNum : 0;
    const hasPrev = currentPageNum > 1;
    const hasNext = currentPageNum < totalPage;
    const offset = currentPageNum > 0 ? (currentPageNum - 1) * limit : 0;

    const data = await builder.offset(offset).limit(limit);

    return {
        pager: {
            offset,
            limit,
            currentPageNum,
            totalCount,
            hasPrev,
            hasNext,
            prevPageNum: hasPrev ? currentPageNum - 1 : undefined,
            nextPageNum: hasNext ? currentPageNum + 1 : undefined,
            lastPageNum: totalPage,
        },
        data
    }
}

module.exports = {
    batchInsertWithTransaction,
    purge,
    paginate
}