export const config = {
  secrets: {
    jwt: 'heimdalltest'
  },
  dbUrl:
    process.env.MONGODB_URL_TEST ||
    'mongodb://localhost:27017/heimdall-test'
}
