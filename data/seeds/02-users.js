
exports.seed = function(knex) {
      return knex('users').insert([
        {id: 1, username: 'Tom', password: 'hero69'},
        {id: 2, username: 'Dick', password: 'blobsquare'},
        {id: 3, username: 'Harry', password: 'spacecowboy'}
      ]);
};
