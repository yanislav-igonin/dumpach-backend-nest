const app = {
  env: process.env.NODE_ENV || 'development',
  port: process.env.PORT ? parseInt(process.env.PORT) : 3000,
}

const db = {
  url: process.env.POSTGRES_URL || 'postgres://dumpach:test_password@localhost/dumpach',
}

const config = {
  db,
  app
};

export { config };
