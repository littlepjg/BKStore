
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex.raw('SET foreign_key_checks = 0').then(function () {
    return knex('favorites').truncate().then(function () {
      return knex.raw('SET foreign_key_checks = 1').then(function () {
        return knex('favorites').insert([
          {
            id: 1,
            customer_id: 1,
            product_id: 1,
            created_at: knex.fn.now(),
            updated_at: knex.fn.now()
          },
          {
            id: 2,
            customer_id: 1,
            product_id: 2,
            created_at: knex.fn.now(),
            updated_at: knex.fn.now()
          },
          {
            id: 3,
            customer_id: 1,
            product_id: 3,
            created_at: knex.fn.now(),
            updated_at: knex.fn.now()
          },
        ]);
      });
    });
  });
};
