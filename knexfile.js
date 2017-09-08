module.exports = {

  development: {
        client: 'pg',
        connection: 'postgresql://localhost/capstone_dev'
  },
  test: {
        client: 'pg',
        connection: 'postgresql://localhost/capstone_test'
  },
  production: {
        client: 'pg',
        connection: process.env.DATABASE_URL
  }
};
