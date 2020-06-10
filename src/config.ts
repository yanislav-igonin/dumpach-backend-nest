const config = {
  env: process.env.NODE_ENV || 'development',
  port: process.env.PORT ? parseInt(process.env.PORT) : 3000,
  postgresUrl: process.env.POSTGRES_URL || 'localhost/dumpach'
}

export {
  config,
};
