
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('cards').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('cards').insert([
        {
          id: 1, 
          customer_id: 1, 
          product_id: 1, 
          amount: 10, 
          created_at: knex.fn.now(),
          updated_at: knex.fn.now()
        },
          
      ]);
    });
};
