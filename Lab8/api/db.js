const { Pool } = require('pg');

class Database {
  constructor() {
    this.config = {
      user: 'igorgulyaschy',
      host: 'localhost',
      database: 'lab8',
      password: process.env.PASSWORD,
      port: 5432,
    };

    this.pool = new Pool(this.config);
  }

  query(sql) {
    return this.pool.query(sql);
  }

  close() {
    this.pool.end();
  }
}

module.exports = new Database();