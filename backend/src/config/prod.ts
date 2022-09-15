export const config = {
  secrets: {
    jwt: 'heimdallprod'
  },
  dbUrl:
    process.env.MONGODB_URL_PROD ||
    'mongodb://localhost:27017/heimdall-prod'
}
