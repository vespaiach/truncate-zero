
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./truncate-zero.cjs.production.min.js')
} else {
  module.exports = require('./truncate-zero.cjs.development.js')
}
