export const config = {
  secrets: {
    jwt: 'heimdalldev'
  },
  dbUrl:
    process.env.MONGODB_URL_DEV ||
    process.env.MONGODB_URL ||
    'mongodb://localhost:27017/heimdall-dev'
}
