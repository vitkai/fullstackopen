const app = require('./app') // the actual Express application
const config = require('./utils/config')
const logger = require('./utils/logger')

const api = supertest(app)

app.listen(config.PORT, () => {
  logger.info(`Server running on port ${config.PORT}`)
})